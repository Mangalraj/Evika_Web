import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import Logo from "@/components/Logo";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import {
  ArrowLeft,
  SkipForward,
  RefreshCw,
  Target,
  Activity,
  Settings,
  Rotate3D,
  MoveHorizontal,
  Repeat,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend,
} from "recharts";
import { ref, onChildAdded, onValue, update } from "firebase/database";
import { db } from "@/firebase/firebase";

/* ---------------- TYPES ---------------- */
interface TelemetryPoint {
  time: number;
  val1: number;
  val2: number;
}

interface CalibrationData {
  bendLeft?: number;
  bendRight?: number;
  torsoMaxLeft?: number;
  torsoMaxRight?: number;
}

interface StageResult {
  accuracy?: number;
  stage: string;
  completedReps?: number;
}

const ExerciseMonitor = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const sessionId = searchParams.get("session") || "";

  /* ---------------- STATE ---------------- */
  const [connected, setConnected] = useState(false);
  const [currentStage, setCurrentStage] = useState<"torso_bend" | "torso_rotation">("torso_bend");
  const [telemetry, setTelemetry] = useState<TelemetryPoint[]>([]);
  const [calibration, setCalibration] = useState<CalibrationData | null>(null);
  const [stageResult, setStageResult] = useState<StageResult | null>(null);
  const [repCount, setRepCount] = useState(0);

  /* BEND CONFIG */
  const [duration, setDuration] = useState(60);
  const [obstacleSpeed, setObstacleSpeed] = useState([50]);
  const [spawnInterval, setSpawnInterval] = useState(2);
  // Reusing existing calibration state for bend inputs to match your original logic
  const [calibLeft, setCalibLeft] = useState(0);
  const [calibRight, setCalibRight] = useState(0);

  /* ROTATION CONFIG */
  const [totalReps, setTotalReps] = useState(10);
  const [tolerance, setTolerance] = useState(15);
  // NEW: Independent variables for the new Rotation Card
  const [configLeftAngle, setConfigLeftAngle] = useState(45);
  const [configRightAngle, setConfigRightAngle] = useState(45);

  /* ---------------- LISTENERS ---------------- */
  useEffect(() => {
    if (!sessionId) return;

    // 1. DETECT STAGE
    onValue(ref(db, `sessions/${sessionId}/currentStage`), (snap) => {
      if (snap.exists()) {
        const stage = snap.val();
        setCurrentStage(stage.includes("rotation") ? "torso_rotation" : "torso_bend");
        setTelemetry([]);
        setStageResult(null);
        setRepCount(0);
      }
    });

    // 2. LIVE EVENTS
    onChildAdded(ref(db, `sessions/${sessionId}/livePatientData`), (snap) => {
      const d = snap.val();
      if (!d) return;
      if (d.type === "rep_complete") setRepCount((prev) => prev + 1);

      setTelemetry((prev) => {
        let newVal1 = 0;
        let newVal2 = 0;
        if (d.type === "bend_event") {
          newVal1 = d.event === "hit" ? 1 : 0;
          newVal2 = d.event === "avoid" ? 1 : 0;
        } else if (d.type === "rep_complete") {
          newVal1 = d.side === "Left" ? 1 : 0;
          newVal2 = d.side === "Right" ? 1 : 0;
        }
        return [...prev, { time: prev.length, val1: newVal1, val2: newVal2 }].slice(-50);
      });
    });

    // 3. CALIBRATION
    onValue(ref(db, `sessions/${sessionId}/calibrationData`), (snap) => {
      if (snap.exists()) {
        const c = snap.val();
        setCalibration(c);
        
        // Auto-fill Bend inputs (Your original logic)
        if (currentStage === "torso_bend" && c.bendLeft) {
             setCalibLeft(c.bendLeft * 0.7);
             setCalibRight(c.bendRight * 0.7);
        }
        // Auto-fill Rotation inputs (New logic)
        if (c.torsoMaxLeft) setConfigLeftAngle(Math.round(c.torsoMaxLeft));
        if (c.torsoMaxRight) setConfigRightAngle(Math.round(c.torsoMaxRight));
      }
    });

    // 4. RESULT
    onValue(ref(db, `sessions/${sessionId}/stageResult`), (snap) => {
      if (snap.exists()) setStageResult(snap.val());
    });

    setConnected(true);
  }, [sessionId, currentStage]);

  /* ---------------- ACTIONS ---------------- */
  const pushConfig = async () => {
    setRepCount(0);
    setTelemetry([]);

    const config: any = { start: true };

    if (currentStage === "torso_bend") {
      config.sessionDuration = duration;
      config.obstacleSpeed = obstacleSpeed[0] / 25;
      config.spawnInterval = spawnInterval;
      config.bendDistanceLeft = calibLeft;
      config.bendDistanceRight = calibRight;
    } else {
      // ROTATION SPECIFIC
      config.totalReps = totalReps;
      config.tolerance = tolerance;
      // Send the values from the NEW card
      config.maxLeftAngle = configLeftAngle;
      config.maxRightAngle = configRightAngle;
    }

    await update(ref(db, `sessions/${sessionId}/liveConfig`), config);
    toast({ title: "Config Pushed & Session Started" });
  };

  const nextStage = async () => {
    await update(ref(db, `sessions/${sessionId}`), { therapistDecision: "next" });
    setStageResult(null);
    toast({ title: "Next Stage Triggered" });
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="border-b bg-card/30 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Logo size="sm" />
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-mono">
                ID: {sessionId}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${currentStage === "torso_bend" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"}`}>
                {currentStage.replace("_", " ")}
              </span>
              <Button variant="ghost" onClick={() => navigate("/therapist/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Exit
              </Button>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT GRID */}
        <main className="flex-1 container mx-auto px-4 py-6">
          {!connected ? (
            <GlassCard className="text-center">Waiting for Unity connection…</GlassCard>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* TOP LEFT: CALIBRATION & RESULTS */}
              <div className="lg:col-span-3 space-y-4">
                <GlassCard>
                  <h3 className="font-semibold flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4" /> Calibration Data
                  </h3>
                  {!calibration ? <p className="text-xs text-gray-500">Waiting for patient...</p> : (
                    <div className="space-y-4">
                      {/* Bend Data */}
                      {calibration.bendLeft !== undefined && (
                        <div className={`p-2 rounded ${currentStage === "torso_bend" ? "bg-white/10" : "opacity-30"}`}>
                          <div className="text-xs font-bold text-blue-300">Lateral Bend (m)</div>
                          <div className="flex justify-between text-sm">
                            <span>L: {calibration.bendLeft.toFixed(2)}</span>
                            <span>R: {calibration.bendRight?.toFixed(2)}</span>
                          </div>
                        </div>
                      )}
                      {/* Rotation Data */}
                      {calibration.torsoMaxLeft !== undefined && (
                        <div className={`p-2 rounded ${currentStage === "torso_rotation" ? "bg-white/10" : "opacity-30"}`}>
                          <div className="text-xs font-bold text-purple-300">Rotation (Deg)</div>
                          <div className="flex justify-between text-sm">
                            <span>L: {calibration.torsoMaxLeft.toFixed(0)}°</span>
                            <span>R: {calibration.torsoMaxRight?.toFixed(0)}°</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </GlassCard>

                {stageResult && (
                  <GlassCard>
                    <h3 className="font-semibold flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4" /> Session Result
                    </h3>
                    <div className="text-center py-2">
                        <CheckCircle className="w-8 h-8 mx-auto text-green-400 mb-2"/>
                        <div className="text-xl font-bold">{stageResult.completedReps} Reps</div>
                        <div className="text-xs text-gray-400">Completed</div>
                    </div>
                  </GlassCard>
                )}
              </div>

              {/* CENTER: GRAPHS */}
              <div className="lg:col-span-6">
                <GlassCard className="h-[350px] flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Activity className="w-4 h-4" /> Live Telemetry
                    </h3>
                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">
                      Reps: {repCount} / {totalReps}
                    </span>
                  </div>
                  <div className="flex-1 min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={telemetry}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                        <YAxis allowDecimals={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#000", border: "1px solid #333" }} />
                        <Legend />
                        {currentStage === "torso_bend" ? (
                           <>
                           <Line name="Hits" dataKey="val1" stroke="#ef4444" strokeWidth={2} dot={false} />
                           <Line name="Avoids" dataKey="val2" stroke="#22c55e" strokeWidth={2} dot={false} />
                           </>
                        ) : (
                           <>
                           <Line name="Left" dataKey="val1" stroke="#a855f7" strokeWidth={2} dot={false} type="step" />
                           <Line name="Right" dataKey="val2" stroke="#3b82f6" strokeWidth={2} dot={false} type="step" />
                           </>
                        )}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </GlassCard>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button onClick={pushConfig} className={currentStage === "torso_bend" ? "bg-blue-600 hover:bg-blue-500" : "bg-purple-600 hover:bg-purple-500"}>
                    <RefreshCw className="w-4 h-4 mr-2" /> Start / Update
                  </Button>
                  <Button onClick={nextStage} variant="secondary">
                    <SkipForward className="w-4 h-4 mr-2" /> Next Stage
                  </Button>
                </div>
              </div>

              {/* RIGHT: GENERAL SETTINGS */}
              <div className="lg:col-span-3">
                 <GlassCard>
                    <h3 className="font-semibold mb-4">Settings</h3>
                    {currentStage === "torso_bend" ? (
                        <div className="space-y-4">
                            <label className="text-xs text-gray-400">Duration (s)</label>
                            <input type="number" value={duration} onChange={e=>setDuration(+e.target.value)} className="w-full p-2 rounded text-black"/>
                            <label className="text-xs text-gray-400">Obs Speed</label>
                            <Slider value={obstacleSpeed} onValueChange={setObstacleSpeed} className="py-2"/>
                            
                            <label className="text-xs text-blue-300 font-bold">Max Bend (M)</label>
                            <div className="grid grid-cols-2 gap-2">
                                <input type="number" value={calibLeft} step={0.01} onChange={e=>setCalibLeft(+e.target.value)} className="w-full p-2 rounded text-black" placeholder="L"/>
                                <input type="number" value={calibRight} step={0.01} onChange={e=>setCalibRight(+e.target.value)} className="w-full p-2 rounded text-black" placeholder="R"/>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <label className="text-xs text-gray-400">Total Reps</label>
                            <input type="number" value={totalReps} onChange={e=>setTotalReps(+e.target.value)} className="w-full p-2 rounded text-black"/>
                            <label className="text-xs text-gray-400">Tolerance (°)</label>
                            <input type="number" value={tolerance} onChange={e=>setTolerance(+e.target.value)} className="w-full p-2 rounded text-black"/>
                        </div>
                    )}
                 </GlassCard>
              </div>

              {/* ✅✅✅ NEW DEDICATED TORSO ROTATION CARD (BOTTOM) ✅✅✅ */}
              {currentStage === "torso_rotation" && (
                <div className="lg:col-span-12 mt-2">
                    <GlassCard className="border-t-4 border-purple-500">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2">
                                    <Rotate3D className="w-6 h-6"/> Rotation Manager
                                </h3>
                                <p className="text-sm text-gray-400">Configure spawn distance & angles based on calibration.</p>
                            </div>

                            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* LEFT SIDE CONFIG */}
                                <div className="space-y-2 bg-black/20 p-4 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="font-bold text-purple-300">LEFT Target</span>
                                        <span className="text-xs text-gray-400">
                                            Calibrated Max: {calibration?.torsoMaxLeft?.toFixed(0) || 0}°
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Slider 
                                            value={[configLeftAngle]} 
                                            max={90} step={1} 
                                            onValueChange={(v) => setConfigLeftAngle(v[0])} 
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-mono text-xl">{configLeftAngle}°</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Lower angle = Closer Target. Higher angle = Further Target.</p>
                                </div>

                                {/* RIGHT SIDE CONFIG */}
                                <div className="space-y-2 bg-black/20 p-4 rounded-lg">
                                    <div className="flex justify-between">
                                        <span className="font-bold text-blue-300">RIGHT Target</span>
                                        <span className="text-xs text-gray-400">
                                            Calibrated Max: {calibration?.torsoMaxRight?.toFixed(0) || 0}°
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Slider 
                                            value={[configRightAngle]} 
                                            max={90} step={1} 
                                            onValueChange={(v) => setConfigRightAngle(v[0])} 
                                            className="flex-1"
                                        />
                                        <span className="w-12 text-center font-mono text-xl">{configRightAngle}°</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Adjust to challenge patient reach.</p>
                                </div>
                            </div>

                            <Button onClick={pushConfig} size="lg" className="bg-purple-600 hover:bg-purple-500 h-full">
                                Update <br/> Config
                            </Button>
                        </div>
                    </GlassCard>
                </div>
              )}

            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ExerciseMonitor;

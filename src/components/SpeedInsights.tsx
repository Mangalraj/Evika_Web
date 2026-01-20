import { SpeedInsights as VercelSpeedInsights } from "@vercel/speed-insights/react";

/**
 * SpeedInsights component wrapper for Vercel Speed Insights integration
 * 
 * This component integrates Vercel Speed Insights into the application to track
 * performance metrics. Speed Insights measures Core Web Vitals and other
 * important performance metrics automatically.
 * 
 * @see https://vercel.com/docs/speed-insights
 */
export const SpeedInsights = () => {
  return <VercelSpeedInsights />;
};

export default SpeedInsights;

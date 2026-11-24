
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const PolicySection = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-secondary rounded-2xl p-6 md:p-8 shadow-md"
  >
    <h2 className="text-xl md:text-2xl font-bold text-primary mb-5">
      {number}. {title}
    </h2>
    <div className="text-muted-foreground leading-relaxed space-y-4">
      {children}
    </div>
  </motion.section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const VitaVersePrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="py-20 px-6 text-center bg-secondary">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <ShieldCheck className="w-9 h-9 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-primary"
          >
            VitaVerse Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Your privacy and data protection matter to us.
          </motion.p>

          <p className="mt-5 text-sm text-muted-foreground">
            Operated by Evika Innovations
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Effective Date: 24 November 2026
          </p>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl space-y-8">

            {/* 1. Introduction */}
            <PolicySection number="1" title="Introduction">
              <p>
                Evika Innovations ("we", "our", or "us") respects your
                privacy and is committed to protecting the personal
                information of individuals using VitaVerse.
              </p>

              <p>
                VitaVerse is an Extended Reality (XR) based
                rehabilitation application developed for Meta Quest
                headsets. It provides interactive, gamified
                physiotherapy exercises in a virtual environment
                to support rehabilitation activities.
              </p>

              <p>
                The VitaVerse Meta Quest application works alongside
                a separate web-based platform called the VitaVerse
                Dashboard, available at{" "}
                <a
                  href="https://www.vitaverse.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline font-medium"
                >
                  https://vitaverse.in
                </a>
                . The dashboard is used by patients and therapists
                for account management, rehabilitation exercise
                selection, session management and progress monitoring.
              </p>

              <p>
                The Meta Quest application is the product distributed
                through the Meta Horizon Store. The VitaVerse Dashboard
                is a separate companion web service.
              </p>

              <p>
                This Privacy Policy explains what information is
                collected through the VitaVerse application and its
                connected services, how that information is used,
                stored, shared and protected, and how users can
                request access to or deletion of their information.
              </p>
            </PolicySection>

            {/* 2. Information We Collect */}
            <PolicySection
              number="2"
              title="Information We Collect"
            >
              <p>
                Depending on how you use VitaVerse and its connected
                services, we may collect and process the following
                categories of information.
              </p>

              <h3 className="font-semibold text-foreground">
                2.1 Account Information
              </h3>

              <BulletList
                items={[
                  "Name and email address.",
                  "Account authentication information.",
                  "User role, such as patient or therapist.",
                  "Associated therapist or healthcare organization information, where applicable.",
                ]}
              />

              <h3 className="font-semibold text-foreground">
                2.2 Rehabilitation and Exercise Information
              </h3>

              <BulletList
                items={[
                  "Selected rehabilitation exercises.",
                  "Exercise completion and performance records.",
                  "Exercise accuracy, points and timing information.",
                  "Rehabilitation progress and improvement records.",
                  "Exercise calibration and ability-related information.",
                ]}
              />

              <h3 className="font-semibold text-foreground">
                2.3 Session Information
              </h3>

              <BulletList
                items={[
                  "Rehabilitation session IDs.",
                  "Session start and completion information.",
                  "Exercise activity and session duration.",
                  "Session scheduling information and related records.",
                ]}
              />

              <h3 className="font-semibold text-foreground">
                2.4 Therapist Information and Feedback
              </h3>

              <BulletList
                items={[
                  "Therapist account information.",
                  "Exercise assignments and rehabilitation plans.",
                  "Therapist observations and feedback.",
                  "Patient progress reports and session-related notes.",
                ]}
              />

              <h3 className="font-semibold text-foreground">
                2.5 Technical and Application Information
              </h3>

              <BulletList
                items={[
                  "Basic technical information required for application functionality.",
                  "Application connectivity and diagnostic information.",
                  "Information required for authentication, database communication and application performance.",
                ]}
              />
            </PolicySection>

            {/* 3. How We Use Your Information */}
            <PolicySection
              number="3"
              title="How We Use Your Information"
            >
              <p>
                We use the collected information for the following purposes:
              </p>

              <BulletList
                items={[
                  "To provide interactive VR rehabilitation experiences through the Meta Quest application.",
                  "To authenticate users and manage secure application access.",
                  "To connect rehabilitation sessions with the VitaVerse Dashboard.",
                  "To support personalized exercise recommendations through VitaMind.",
                  "To record exercise completion and rehabilitation performance.",
                  "To monitor patient rehabilitation progress.",
                  "To allow authorized therapists to review patient exercise activities.",
                  "To manage rehabilitation sessions and scheduled appointments through connected services.",
                  "To send relevant account and session-related email notifications.",
                  "To maintain, troubleshoot, and improve application functionality.",
                ]}
              />
            </PolicySection>

            {/* 4. Information Sharing and Disclosure */}
            <PolicySection
              number="4"
              title="Information Sharing and Disclosure"
            >
              <p>
                We do not sell users' personal information.
              </p>

              <p>
                Information may be shared or made accessible in
                the following circumstances:
              </p>

              <p>
                <strong className="text-foreground">
                  Authorized Therapists:
                </strong>{" "}
                Patient rehabilitation information, exercise activities
                and progress records may be accessible to therapists
                authorized to manage or monitor the patient's
                rehabilitation.
              </p>

              <p>
                <strong className="text-foreground">
                  Healthcare Organizations:
                </strong>{" "}
                Relevant patient information may be accessible to
                associated healthcare organizations and their
                authorized personnel for rehabilitation management.
              </p>

              <p>
                <strong className="text-foreground">
                  Service Providers:
                </strong>{" "}
                We use third-party infrastructure and services,
                including Google Firebase, for authentication,
                database storage, and application-related functionality.
                These service providers may process information as
                necessary to provide their services.
              </p>

              <p>
                <strong className="text-foreground">
                  Legal Requirements:
                </strong>{" "}
                Information may be disclosed when required by
                applicable laws, regulations, or valid legal requests.
              </p>

              <p>
                We do not share personal information with third
                parties for their independent advertising or
                marketing purposes.
              </p>
            </PolicySection>

            {/* 5. Data Storage and Security */}
            <PolicySection
              number="5"
              title="Data Storage and Security"
            >
              <p>
                VitaVerse uses Google Firebase services, including:
              </p>

              <p>
                <strong className="text-foreground">
                  Firebase Authentication:
                </strong>{" "}
                To support user authentication and account access.
              </p>

              <p>
                <strong className="text-foreground">
                  Firebase Realtime Database:
                </strong>{" "}
                To store and manage application-related information,
                including rehabilitation and session records.
              </p>

              <p>
                Information associated with the Meta Quest application
                and the VitaVerse Dashboard is managed through
                connected backend services.
              </p>

              <p>
                We implement appropriate security measures,
                authentication mechanisms, and access restrictions
                to help protect personal and rehabilitation information
                against unauthorized access, alteration, disclosure,
                or loss.
              </p>

              <p>
                Access to patient information is intended to be
                restricted to authorized users based on their roles
                and permissions.
              </p>

              <p>
                Although we take reasonable steps to protect
                information, no electronic storage or internet
                transmission method can be guaranteed to be
                completely secure.
              </p>
            </PolicySection>

            {/* 6. Meta Quest Device Permissions */}
            <PolicySection
              number="6"
              title="Meta Quest Device Permissions"
            >
              <p>
                The VitaVerse Meta Quest application is designed
                to provide rehabilitation experiences using a
                Meta Quest headset and its controllers.
              </p>

              <p>
                The application uses headset and controller
                interactions to allow users to participate in
                virtual rehabilitation exercises.
              </p>

              <p>
                VitaVerse does not require camera, microphone
                or eye-tracking access for its core rehabilitation
                functionality.
              </p>

              <p>
                Meta may independently collect device and platform
                information according to its own privacy policies
                and settings. Such information is governed by
                Meta's applicable privacy practices.
              </p>
            </PolicySection>

            {/* 7. Data Retention */}
            <PolicySection
              number="7"
              title="Data Retention"
            >
              <p>
                We retain personal information and rehabilitation
                records for as long as necessary to provide
                VitaVerse services, maintain rehabilitation
                progress history, support therapist monitoring
                and fulfill applicable legal or operational
                requirements.
              </p>

              <p>
                When information is no longer required, we will
                take appropriate steps to delete or anonymize it,
                subject to applicable legal requirements and
                necessary backup retention.
              </p>
            </PolicySection>

            {/* 8. User Rights and Data Deletion */}
            <PolicySection
              number="8"
              title="User Rights and Data Deletion"
            >
              <p>
                Users may request access to, correction of or
                deletion of their personal information, subject
                to applicable laws and legitimate record-retention
                requirements.
              </p>

              <p>
                Users who wish to request account or personal
                data deletion can follow these steps:
              </p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Send an email to{" "}
                  <a
                    href="mailto:support@evikainnovations.com"
                    className="text-primary underline font-medium"
                  >
                    support@evikainnovations.com
                  </a>.
                </li>

                <li>
                  Include the registered email address associated
                  with the VitaVerse account.
                </li>

                <li>
                  Clearly mention that the request concerns
                  VitaVerse account or personal data deletion.
                </li>
              </ol>

              <p>
                Our team will review and process the request
                in accordance with applicable requirements.
              </p>

              <p>
                We may request additional information to verify
                the user's identity before processing a request.
              </p>

              <p>
                Where applicable, associated personal information
                will be deleted or anonymized, subject to legal
                and operational retention requirements.
              </p>
            </PolicySection>

            {/* 9. Children's Privacy */}
            <PolicySection
              number="9"
              title="Children's Privacy"
            >
              <p>
                VitaVerse is intended to be used as a rehabilitation
                application under appropriate supervision.
              </p>

              <p>
                Where users are minors, their use of the application
                and the processing of their information should be
                managed with the involvement and consent of a parent,
                guardian or authorized healthcare professional, as
                required by applicable law.
              </p>

              <p>
                We do not knowingly collect children's personal
                information beyond what is necessary and appropriately
                authorized for the intended rehabilitation services.
              </p>
            </PolicySection>

            {/* 10. Third-Party Services and Platforms */}
            <PolicySection
              number="10"
              title="Third-Party Services and Platforms"
            >
              <p>
                VitaVerse relies on third-party services and platforms
                to support its functionality, including:
              </p>

              <p>
                <strong className="text-foreground">
                  Google Firebase:
                </strong>{" "}
                Used for account authentication and application
                database services.
              </p>

              <p>
                <strong className="text-foreground">
                  Meta Horizon Platform:
                </strong>{" "}
                Used for Meta Quest application distribution
                and platform functionality.
              </p>

              <p>
                These third-party services operate under their
                respective privacy policies and terms. Users are
                encouraged to review the applicable third-party
                privacy information.
              </p>
            </PolicySection>

            {/* 11. External Links and Services */}
            <PolicySection
              number="11"
              title="External Links and Services"
            >
              <p>
                The VitaVerse Dashboard and associated services
                may contain links or references to external
                websites or services.
              </p>

              <p>
                Evika Innovations is not responsible for the
                privacy practices of external websites or services
                that are not operated by us. Users are encouraged
                to review the privacy policies of those services
                before providing personal information.
              </p>
            </PolicySection>

            {/* 12. Changes to This Privacy Policy */}
            <PolicySection
              number="12"
              title="Changes to This Privacy Policy"
            >
              <p>
                We may update this Privacy Policy from time to
                time to reflect changes in application functionality,
                data practices, technology or applicable legal
                requirements.
              </p>

              <p>
                Any updated version will be published on our
                official website with a revised effective date.
              </p>

              <p>
                Users are encouraged to review this Privacy
                Policy periodically.
              </p>
            </PolicySection>

            {/* 13. Contact Information */}
            <PolicySection
              number="13"
              title="Contact Information"
            >
              <p>
                For questions, concerns, privacy-related requests
                or personal data deletion requests, please contact:
              </p>

              <div className="space-y-3">
                <p>
                  <strong className="text-foreground">
                    Organization:
                  </strong>{" "}
                  Evika Innovations
                </p>

                <p>
                  <strong className="text-foreground">
                    Application:
                  </strong>{" "}
                  VitaVerse – XR Rehabilitation (Meta Quest)
                </p>

                <p>
                  <strong className="text-foreground">
                    Companion Web Platform:
                  </strong>{" "}
                  VitaVerse Dashboard
                </p>

                <p>
                  <strong className="text-foreground">
                    Website:
                  </strong>{" "}
                  <a
                    href="https://www.vitaverse.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    https://www.vitaverse.in/
                  </a>
                </p>

                <p>
                  <strong className="text-foreground">
                    Support Email:
                  </strong>{" "}
                  <a
                    href="mailto:support@evikainnovations.com"
                    className="text-primary underline"
                  >
                    support@evikainnovations.com
                  </a>
                </p>
              </div>
            </PolicySection>

            {/* Copyright */}
            <div className="text-center pt-6">
              <p className="text-sm text-muted-foreground">
                © 2026 Evika Innovations. All Rights Reserved.
              </p>
            </div>

            {/* Back Button */}
            <div className="flex justify-center pt-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Products
                </Link>
              </Button>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VitaVersePrivacyPolicy;

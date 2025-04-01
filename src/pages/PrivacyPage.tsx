
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-brand-blue flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <Link to="/">
              <Button variant="outline" className="mb-6 border-white/10 text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl font-display font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-300">Last Updated: April 1, 2023</p>
          </div>
          
          <div className="space-y-8 text-gray-200">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                ShapeCoach ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our Service, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information such as name, email address, and phone number.</li>
                <li>Fitness-related information such as height, weight, fitness goals, and workout preferences.</li>
                <li>Usage data including how you interact with our Service.</li>
                <li>Device information such as your IP address, browser type, and operating system.</li>
                <li>Location data if you grant us permission to access your device's location.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing, maintaining, and improving our Service.</li>
                <li>Creating personalized fitness and nutrition plans.</li>
                <li>Tracking and analyzing your fitness progress.</li>
                <li>Communicating with you, including sending updates, security alerts, and support messages.</li>
                <li>Analyzing usage patterns to enhance our Service.</li>
                <li>Protecting against, identifying, and preventing fraud and other illegal activities.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. No method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who perform services on our behalf.</li>
                <li>To comply with legal obligations.</li>
                <li>To protect and defend our rights and property.</li>
                <li>With your consent or at your direction.</li>
              </ul>
              <p className="mt-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties for marketing purposes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Data Protection Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal information.</li>
                <li>The right to rectify inaccurate personal information.</li>
                <li>The right to request deletion of your personal information.</li>
                <li>The right to restrict or object to processing of your personal information.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent at any time.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at privacy@shapecoach.com.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
              <p>
                Our Service is not directed to persons under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you become aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@shapecoach.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;

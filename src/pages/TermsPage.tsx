
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsPage = () => {
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
            
            <h1 className="text-4xl font-display font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-gray-300">Last Updated: April 1, 2023</p>
          </div>
          
          <div className="space-y-8 text-gray-200">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to ShapeCoach ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website and services operated by ShapeCoach.
              </p>
              <p>
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
              <p>
                By creating an account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Description of Service</h2>
              <p className="mb-4">
                ShapeCoach provides an AI-powered fitness coaching platform that offers personalized workout plans, nutrition guidance, and progress tracking ("Service").
              </p>
              <p>
                We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p className="mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of ShapeCoach and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ShapeCoach.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Health Disclaimer</h2>
              <p className="mb-4">
                The content provided through our Service is for informational and educational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="mb-4">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or before beginning any diet or exercise program.
              </p>
              <p>
                Never disregard professional medical advice or delay in seeking it because of something you have read or received through our Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@shapecoach.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;

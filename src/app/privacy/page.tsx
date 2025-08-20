import { Metadata } from "next";
import { generateMetadata } from "../lib/seo";

export const metadata: Metadata = generateMetadata('privacy');

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary mb-6">Last updated: January 2025</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-secondary mb-4">
              We collect information you provide directly to us, such as when you contact us, 
              subscribe to our newsletter, or use our services. This may include your name, 
              email address, phone number, and any other information you choose to provide.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-secondary mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, develop new services, and protect our company and users.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Data Security</h2>
            <p className="text-secondary mb-4">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-secondary mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
            <p className="text-secondary mb-4">
              You have the right to access, update, or delete your personal information. You can 
              also object to or restrict certain processing of your data.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact Us</h2>
            <p className="text-secondary">
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="mailto:privacy@aegontech.dev" className="text-primary hover:underline"> privacy@aegontech.dev</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
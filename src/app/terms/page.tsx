import { Metadata } from "next";
import { generateMetadata } from "../lib/seo";

export const metadata: Metadata = generateMetadata('terms');

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary mb-6">Last updated: January 2025</p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary mb-4">
              By accessing and using AegonTech's services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services</h2>
            <p className="text-secondary mb-4">
              AegonTech provides software development services including web applications, mobile applications, 
              cloud solutions, and consulting services. The specific terms of each project will be outlined 
              in individual service agreements.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-secondary mb-4">
              All intellectual property rights in the software and services provided by AegonTech remain 
              with AegonTech unless otherwise specified in a written agreement. Client-specific customizations 
              may be subject to different terms as outlined in individual contracts.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-secondary mb-4">
              Payment terms will be specified in individual service agreements. Generally, invoices are due 
              within 30 days of receipt unless otherwise agreed upon.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-secondary mb-4">
              AegonTech shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages arising from the use of our services.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Termination</h2>
            <p className="text-secondary mb-4">
              We may terminate or suspend access to our services immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Changes to Terms</h2>
            <p className="text-secondary mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on this page.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Contact</h2>
            <p className="text-secondary">
              For questions about these Terms of Service, please contact us at 
              <a href="mailto:legal@aegontech.dev" className="text-primary hover:underline"> legal@aegontech.dev</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
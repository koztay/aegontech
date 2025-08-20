import { Metadata } from "next";
import { generateMetadata } from "../lib/seo";

export const metadata: Metadata = generateMetadata('support');

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Support</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Technical Support</h2>
              <p className="text-secondary mb-4">
                Get help with technical issues, bugs, or implementation questions. 
                Our support team is available 24/7 to assist you.
              </p>
              <a 
                href="mailto:support@aegontech.dev" 
                className="inline-flex items-center text-primary hover:underline"
              >
                support@aegontech.dev
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Documentation</h2>
              <p className="text-secondary mb-4">
                Access comprehensive documentation, tutorials, and guides for all our services 
                and products.
              </p>
              <a 
                href="/docs" 
                className="inline-flex items-center text-primary hover:underline"
              >
                View Documentation →
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">FAQs</h2>
              <p className="text-secondary mb-4">
                Find answers to frequently asked questions about our services, pricing, 
                and technical requirements.
              </p>
              <a 
                href="/faq" 
                className="inline-flex items-center text-primary hover:underline"
              >
                Browse FAQs →
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Community</h2>
              <p className="text-secondary mb-4">
                Join our community forum to connect with other users, share experiences, 
                and get peer support.
              </p>
              <a 
                href="/community" 
                className="inline-flex items-center text-primary hover:underline"
              >
                Join Community →
              </a>
            </div>
          </div>
          
          <div className="mt-12 bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Support</h2>
            <p className="text-secondary mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:support@aegontech.dev" className="text-primary hover:underline">
                  support@aegontech.dev
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-secondary">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
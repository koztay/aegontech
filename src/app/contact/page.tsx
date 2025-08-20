import { Metadata } from "next";
import { generateMetadata } from "../lib/seo";
import ContactClient from "../components/ContactClient";

export const metadata: Metadata = generateMetadata('contact');

export default function ContactPage() {
  return <ContactClient />;
}
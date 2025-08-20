import { Metadata } from "next";
import { generateMetadata } from "../lib/seo";
import ServicesClient from "../components/ServicesClient";

export const metadata: Metadata = generateMetadata('services');

export default function ServicesPage() {
  return <ServicesClient />;
}
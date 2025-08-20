import { Metadata } from "next";
import { generateMetadata } from "./lib/seo";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = generateMetadata('home');

export default function HomePage() {
  return <HomeClient />;
}

import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Timeline />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
}

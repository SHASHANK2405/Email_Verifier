import HeroSection from "@/components/HeroSection";
import "../styles/globals.css";
import Head from "next/head";
import VerifierUser from "@/components/VerifierUser";
import Working from "@/components/Working";
import AccuracyEmail from "@/components/AccuracyEmail";
import EmailList from "@/components/EmailList";
import Plans from "@/components/Plans";
import WhoUsingVerifier from "@/components/WhoUsingVerifier";
import FAQ from "@/components/FAQ";
import ActionSection from "@/components/ActionSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#09061A] relative overflow-hidden">
      <Head>
        <title>Email Verifier</title>
        <meta name="description" content="A modern landing page" />
      </Head>

      {/* Main Wrapper with Max Width */}
      <div className="max-w-[1280px] w-full mx-auto relative">
        {/* Background Blur Image Above the Dark Background */}
        <div
          className="absolute top-[-321px] w-[1140px] h-[462px] bg-[#505CAD] backdrop-blur-[600px] left-1/2 transform -translate-x-1/2 z-0"
          style={{
            backgroundImage: "url('/assets/background blur.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content Wrapper */}
        <div className="max-w-[1200px] w-full mx-auto flex flex-col bg-[#09061A] relative z-10 gap-10">
          {/* Logo */}
          <div className="w-[150px] h-[40px] my-5">
            <Image src="/assets/Logo.png" alt="Logo" width={150} height={40} />
          </div>

          <HeroSection />
          <VerifierUser />
          <Working />
          <AccuracyEmail />
          <EmailList />
          <Plans />
          <WhoUsingVerifier />
          <FAQ />
          <ActionSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

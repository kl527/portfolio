"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sections } from "./data/sections";
import { handleScroll } from "./utils/scrollUtils";
import Navigation from "./components/Navigation";
import BackButton from "./components/BackButton";

export default function ParasomaticPage() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("overview");
  const [activeSubsection, setActiveSubsection] = useState("");
  const REQUIRED_PASSWORD = "parasomatic";

  useEffect(() => {
    // Prevent background scroll while password required
    if (!authorized) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [authorized]);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(sections, setActiveSection, setActiveSubsection);
    };

    // Call once on mount to set initial state based on current scroll position
    handleScrollEvent();

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === REQUIRED_PASSWORD) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[var(--cream)]" />
      <main className="lato-regular bg-[var(--cream)] text-[var(--charcoal)] w-[70%] ml-auto mr-auto pl-[12px] md:flex flex-row place-content-center mt-8 md:mt-[40px]">
        {/* Left Side - Back Button and Navigation */}
        <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex flex-col">
          <BackButton />
              <Navigation
                sections={sections}
                activeSection={activeSection}
                activeSubsection={activeSubsection}
                onSectionClick={(sectionId: string) => {
                  const element = document.getElementById(sectionId);
                  if (element) {
                    const yOffset = -20;
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                authorized={authorized}
              />
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          {/* Overview Section */}
          <section id="overview" className="mb-16">
            {/* Title Section */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-5 md:mb-9">
              <div className="mb-2 md:mb-5 text-melo-blue font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]">
                PARASOMATIC INTERACTION
              </div>
              <p className="mb-5 md:mb-8 font-bold text-black text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
                Parasomatic Interaction with AI Agents
              </p>
              <div className="w-full md:w-[646px] lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-black" />
            </div>

            {/* Images Grid */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/parasomatic/para1.png"
                  alt="Parasomatic Device - Side View"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/parasomatic/para2.png"
                  alt="Parasomatic Device - Circuit Components"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/parasomatic/para3.png"
                  alt="Parasomatic Device - Top View"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/parasomatic/para4.png"
                  alt="Parasomatic Device - Detail View"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Project Overview */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-4">
              <div className="space-y-8">
                <div>
                  <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                    Overview
                  </h1>
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg leading-6 md:leading-8">
                    This paper explores parasomatic interaction—incorporating
                    synthetic physiological signals into human-AI interaction.
                    We found simulated heartbeat sensations significantly bias
                    human perception of AI agents: elevated heartbeats made
                    participants seven times more likely to distrust an AI,
                    while calm heartbeats increased AI selection as
                    collaborators by 60%. Notably, emotionally stable
                    individuals were most vulnerable to these effects. These
                    findings reveal both opportunities for enhancing human-AI
                    interaction and risks for manipulation, suggesting urgent
                    need for design considerations in somatically embodied AI
                    systems.
                  </p>
                </div>
                
                <div>
                  <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                    Contributions
                  </h1>
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg leading-6 md:leading-8">
                    Led project from conception to publication. Designed
                    experimental protocols and secured IRB approval. Conducted
                    data collection with 39 participants and performed all
                    statistical analyses. Contributed to hardware development
                    and 3D modeling. Wrote substantial portion of paper.
                  </p>
                </div>
                
                <div>
                  <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                    Timeline
                  </h1>
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                    Jan. 2025 - Aug. 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 bg-[var(--charcoal)]" />
          </section>

          {/* Paper Section */}
          <section id="paper" className="mb-24">
            <h2 className="text-xl libre-bodoni-bold md:text-3xl font-bold text-[var(--charcoal)] mb-8">
              Paper
            </h2>

            {authorized && (
              <a
                href="/parasomatic/_I_Feel_It_Nervous__TEI_2026.pdf"
                download="I_Feel_It_Nervous_TEI_2026.pdf"
                className="mt-4 w-[300px] mb-4 mr-auto bg-[var(--charcoal)] mt-4 md:h-[38px] transition-colors duration-500 ease-in-out flex h-10 items-center justify-center gap-2.5 py-[3px] left-0 border-4 border-solid border-[var(--charcoal)]"
              >
                <div className="flex items-center justify-center gap-2">
                  <p className="text-center md:text-[18px] font-bold text-[var(--cream)] text-sm transition-colors duration-300 ease-in-out">
                    Download Paper
                  </p>
                </div>
              </a>
            )}
            
            {authorized ? (
              <div className="w-full max-w-4xl h-[80vh] border border-[var(--charcoal)]/20 shadow-lg">
                <iframe
                  src="/parasomatic/_I_Feel_It_Nervous__TEI_2026.pdf"
                  className="w-full h-full"
                  title="I Feel It Nervous - TEI 2026 Paper"
                />
              </div>
            ) : (
              <div className="w-full max-w-md bg-[var(--cream)] p-6 shadow-xl lato-regular text-[var(--charcoal)] border border-[var(--charcoal)]/20">
                <h2 className="text-lg md:text-xl font-bold mb-2">
                  Password Required
                </h2>
                <p className="text-sm md:text-base mb-6">
                  This is an unpublished paper. Contact{" "}
                  <a href="mailto:kl527@cornell.edu" className="underline">
                    kl527@cornell.edu
                  </a>{" "}
                  for the password.
                </p>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 border border-[var(--charcoal)]/30 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]/30"
                    placeholder="Enter password"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-[var(--charcoal)] px-4 py-2 text-[var(--cream)] hover:opacity-90"
                  >
                    Enter
                  </button>
                </form>
                {error && (
                  <div className="mt-3 text-sm text-red-600">{error}</div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
      {/* Bottom spacer to allow scrolling past the last section so nav can update */}
      <div className="h-24" />

      {/* Password Overlay */}
      {!authorized && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-[var(--charcoal)]/70 backdrop-blur-sm md:backdrop-blur-md" />
          <Link
            href="/"
            aria-label="Back to home"
            className="absolute top-6 left-6 z-50 hover:opacity-90 flex items-center gap-2"
          >
            <Image
              src="/back-cream.svg"
              alt="Back"
              width={24}
              height={24}
              priority
            />
            <span className="lato-bold text-lg text-[var(--cream)]">Back</span>
          </Link>
          <div className="relative z-50 w-[90%] max-w-md bg-[var(--cream)] p-6 shadow-xl lato-regular text-[var(--charcoal)]">
            <h2 className="text-lg md:text-xl font-bold mb-2">
              Password Required
            </h2>
            <p className="text-sm md:text-base mb-6">
              This is an unpublished paper. Contact{" "}
              <a href="mailto:kl527@cornell.edu" className="underline">
                kl527@cornell.edu
              </a>{" "}
              for the password.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 border border-[var(--charcoal)]/30 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--charcoal)]/30"
                placeholder="Enter password"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[var(--charcoal)] px-4 py-2 text-[var(--cream)] hover:opacity-90"
              >
                Enter
              </button>
            </form>
            {error && <div className="mt-3 text-sm text-red-600">{error}</div>}
          </div>
        </div>
      )}
    </>
  );
}

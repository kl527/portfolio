"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export type ProjectItem = {
  title: string;
  description: string;
  date: string;
  category: string;
  href?: string;
  unavailable: boolean;
  imageSrc?: string;
};

interface ProjectsSectionClientProps {
  projectData: ProjectItem[];
  miniProjectData: ProjectItem[];
  splineAnimation: React.ReactNode;
}

export default function ProjectsSectionClient({
  projectData,
  splineAnimation,
  miniProjectData,
}: ProjectsSectionClientProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-[var(--cream)] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:ml-40 md:ml-20 ml-auto mr-auto">
        {/* Intro text and Spline Animation */}
        <div className="lg:mb-30 mb-16 mt-6 flex lg:flex-row flex-col items-start justify-between gap-8">
          <div className="flex flex-col items-start gap-2 max-w-4xl">
            <span className="text-lg text-[var(--charcoal)]">Hi,</span>
            <h2 className="text-xl md:text-5xl leading-tight mb-5 text-[var(--charcoal)]">
            I research <b>Human-AI Interaction</b>, focusing on different interaction modalities with AI.
            </h2>
            <div className="flex flex-col gap-4 pointer-events-auto">
              <button
                onClick={handleAboutClick}
                className="group relative inline-flex overflow-hidden"
              >
                <div className="relative flex items-center gap-2 px-3 py-1">
                  <span className="relative z-10 font-geist-sans text-[#313233] text-lg tracking-tight transition-colors duration-300 group-hover:text-[#fcf8f4]">
                    About me
                  </span>
                  <span className="relative z-10 w-3.5 h-3.5 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300"
                    >
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="#313233"
                        strokeWidth="1.5"
                        className="transition-colors duration-300 group-hover:stroke-[#fcf8f4]"
                      />
                    </svg>
                  </span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#313233] transition-all duration-300 group-hover:h-full"></span>
              </button>
              <a
                href="/resume/Kyung_Sub_Lee-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex overflow-hidden"
              >
                <div className="relative flex items-center gap-2 px-3 py-1">
                  <span className="relative z-10 font-geist-sans text-[#313233] text-lg tracking-tight transition-colors duration-300 group-hover:text-[#fcf8f4]">
                    Resume
                  </span>
                  <span className="relative z-10 w-3.5 h-3.5 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-300"
                    >
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="#313233"
                        strokeWidth="1.5"
                        className="transition-colors duration-300 group-hover:stroke-[#fcf8f4]"
                      />
                    </svg>
                  </span>
                </div>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#313233] transition-all duration-300 group-hover:h-full"></span>
              </a>
            </div>
          </div>

          {/* Spline Animation - appears above text on mobile/tablet, right on lg+ */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[500px] h-full order-first lg:order-none">
            {splineAnimation}
          </div>
        </div>
        {/* Header */}
        <div className="mb-16">
          <h3 className="text-xl md:text-5xl font-bold text-[var(--charcoal)] mb-12">
            Publications
          </h3>
          <div className="mb-12">
            <p className="text-lg text-[var(--charcoal)] max-w-4xl">
              <span className="font-semibold underline">Kyung Sub Lee</span>,
              Aidan Talreja, Asen Ou Kim, & Sang-won Leigh. &quot;I Feel It Is
              Nervous&quot;: Parasomatic Interaction with AI Agents. Manuscript
              submitted for review to the Proceedings of the 20th International
              Conference on Tangible, Embedded, and Embodied Interaction (TEI
              &apos;26).
            </p>
          </div>
        </div>

        {/* Select Projects Header */}
        <div className="mt-20">
          <h3 className="text-xl md:text-5xl font-bold text-[var(--charcoal)] mb-12">
            Select Projects
          </h3>
          <div className="mb-12"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projectData.map((item, index) => {
            const ProjectContent = (
              <div className="group cursor-pointer relative">
                <div
                  className={`flex items-center pr-6 rounded-lg transition-all duration-300 ${
                    index === 0 ? "pb-6" : "py-6"
                  }`}
                >
                  {/* Text Content - 55% width */}
                  <div className="w-[55%] flex flex-col">
                    {/* Category Text */}
                    <div className="mb-2">
                      <span className="text-sm md:text-base text-[var(--charcoal)]">
                        {item.category}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-lg md:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--charcoal)]/80 group-hover:underline transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Fixed Image Container - shows on hover */}
                <div className="fixed top-1/3 right-8 -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={384}
                      height={320}
                      className="max-h-80 max-w-96 object-contain rounded-lg"
                    />
                  )}
                </div>
              </div>
            );

            if (item.unavailable) {
              return (
                <div key={index} className="opacity-60">
                  {ProjectContent}
                </div>
              );
            }

            if (item.href) {
              return (
                <Link key={index} href={item.href}>
                  {ProjectContent}
                </Link>
              );
            }

            return <div key={index}>{ProjectContent}</div>;
          })}
        </div>
        {/* Mini Projects Header */}
        <div className="mt-20">
          <h3 className="text-xl md:text-5xl font-bold text-[var(--charcoal)] mb-12">
            Mini Projects
          </h3>
          <div className="mb-12"></div>
        </div>
        {/* Mini Projects List */}
        <div className="space-y-4">
          {miniProjectData.map((item, index) => {
            const ProjectContent = (
              <div className="group cursor-pointer relative">
                <div
                  className={`flex items-center pr-6 rounded-lg transition-all duration-300 ${
                    index === 0 ? "pb-6" : "py-6"
                  }`}
                >
                  {/* Text Content - 55% width */}
                  <div className="w-[55%] flex flex-col">
                    {/* Category Text */}
                    <div className="mb-2">
                      <span className="text-sm md:text-base text-[var(--charcoal)]">
                        {item.category}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-lg md:text-2xl font-bold text-[var(--charcoal)] group-hover:text-[var(--charcoal)]/80 group-hover:underline transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Fixed Image Container - shows on hover */}
                <div className="fixed top-1/3 right-8 -translate-y-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {item.imageSrc && (
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={384}
                      height={320}
                      className="max-h-80 max-w-96 object-contain rounded-lg"
                    />
                  )}
                </div>
              </div>
            );

            if (item.unavailable) {
              return (
                <div key={index} className="opacity-60">
                  {ProjectContent}
                </div>
              );
            }

            if (item.href) {
              return (
                <Link key={index} href={item.href}>
                  {ProjectContent}
                </Link>
              );
            }

            return <div key={index}>{ProjectContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

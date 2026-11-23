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
}

export default function ProjectsSectionClient({
  projectData,
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
        {/* Intro text */}
        <div className="lg:mb-30 mb-16 mt-6">
          <div className="flex flex-col items-start gap-2 max-w-4xl">
            <span className="text-lg text-[var(--charcoal)]">Hi,</span>
            <h2 className="text-xl md:text-5xl leading-tight mb-5 text-[var(--charcoal)]">
            I&apos;m a <b>data scientist</b> who designs UI/UX on the side.
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

        </div>
        {/* Header */}
        <div className="mb-16">
          <h3 className="text-xl md:text-5xl font-bold text-[var(--charcoal)] mb-12">
            Publications
          </h3>
          <div className="mb-12 space-y-6">
            <p className="text-lg text-[var(--charcoal)] max-w-4xl">
              <span className="font-semibold underline">Kyung Sub Lee</span>,
              Aidan Talreja, Asen Ou, & Sang Leigh. 2026. Somatic Dark
              Patterns: Synthetic Heartbeats Shape Trust in AI Agents. In
              Adjunct Proceedings of the 39th Annual ACM Symposium on User
              Interface Software and Technology (UIST Adjunct &apos;26),
              Detroit, MI, USA.{" "}
              <a
                href="https://doi.org/10.1145/3830397.3841890"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://doi.org/10.1145/3830397.3841890
              </a>
            </p>
            <p className="text-lg text-[var(--charcoal)] max-w-4xl">
              <span className="font-semibold underline">Kyung Sub Lee</span>,
              Aryan Keluskar, & Sang-won Leigh. 2026. No Harvestable Depth
              Redundancy in a Sparse-Mixture-of-Experts Block-Diffusion
              Language Model. In Workshop on Non-Autoregressive Language Models
              for Fast and Flexible Text Generation (NonAR-LM) at COLM 2026,
              San Francisco, CA, USA.{" "}
              <a
                href="https://openreview.net/forum?id=oWKSN9bBaX&referrer=%5Bthe%20profile%20of%20Aryan%20Keluskar%5D(%2Fprofile%3Fid%3D~Aryan_Keluskar1)"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://openreview.net/forum?id=oWKSN9bBaX
              </a>
            </p>
            <p className="text-lg text-[var(--charcoal)] max-w-4xl">
              Aryan Keluskar &{" "}
              <span className="font-semibold underline">Kyung Sub Lee</span>.
              2026. RepairMDM: Verifier-Localized Repair Training for Masked
              Diffusion Language Models. In Workshop on Non-Autoregressive
              Language Models for Fast and Flexible Text Generation (NonAR-LM)
              at COLM 2026, San Francisco, CA, USA.{" "}
              <a
                href="https://openreview.net/forum?id=bEZtn88jzE&referrer=%5Bthe%20profile%20of%20Aryan%20Keluskar%5D(%2Fprofile%3Fid%3D~Aryan_Keluskar1)"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://openreview.net/forum?id=bEZtn88jzE
              </a>
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

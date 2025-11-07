"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { sections } from "./data/sections";
import { handleScroll } from "./utils/scrollUtils";
import Navigation from "./components/Navigation";
import BackButton from "./components/BackButton";
// Removed custom hook import; no highlight behavior is used

export default function SeamlegsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [activeSubsection, setActiveSubsection] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const REQUIRED_PASSWORD = "abc";

  // Refs removed: no highlight animations
  const accuracyRef = useRef<HTMLSpanElement>(null);
  const expensiveRef = useRef<HTMLSpanElement>(null);
  const capacitiveRef = useRef<HTMLSpanElement>(null);
  const tianhongRef = useRef<HTMLSpanElement>(null);
  const threadsRef = useRef<HTMLSpanElement>(null);
  const microcontrollerRef = useRef<HTMLSpanElement>(null);
  const recordingsRef = useRef<HTMLSpanElement>(null);
  const signalsRef = useRef<HTMLSpanElement>(null);
  const sittingRef = useRef<HTMLSpanElement>(null);
  const jumpingRef = useRef<HTMLSpanElement>(null);
  const readingsRef = useRef<HTMLSpanElement>(null);
  const hardwareRef = useRef<HTMLSpanElement>(null);
  const interquartileRef = useRef<HTMLSpanElement>(null);
  const reengineerRef = useRef<HTMLSpanElement>(null);
  const independenceRef = useRef<HTMLSpanElement>(null);

  // InViewPort hooks
  // Disable highlight logic
  const accuracyInViewport = false;
  const expensiveInViewport = false;
  const capacitiveInViewport = false;
  const tianhongInViewport = false;
  const threadsInViewport = false;
  const microcontrollerInViewport = false;
  const recordingsInViewport = false;
  const signalsInViewport = false;
  const sittingInViewport = false;
  const jumpingInViewport = false;
  const readingsInViewport = false;
  const hardwareInViewport = false;
  const interquartileInViewport = false;
  const reengineerInViewport = false;
  const independenceInViewport = false;

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
      {/* Page-scoped background to ensure the top is cream even in dark mode */}
      <div className="fixed inset-0 -z-10 bg-[var(--cream)]" />
      <div className="min-h-screen w-full">
        <main className="lato-regular bg-[var(--cream)] text-[var(--charcoal)] w-[70%] ml-auto mr-auto pl-[12px] md:flex flex-row place-content-center mt-8 md:mt-[40px]">
          {/* Left Side - Back Button and Navigation */}
          <div className="mr-8 md:mr-[80px] lg:mr-[150px] flex flex-col">
            <BackButton />
            <Navigation
              sections={sections}
              activeSection={activeSection}
              activeSubsection={activeSubsection}
              onSectionClick={(sectionId) => {
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
            />
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            {/* Introduction Section */}
            <section id="introduction" className="mb-24">
              {/* Title Section */}
              <div className="w-full md:w-[646px] lg:w-[800px] mb-5 md:mb-9">
                <div className="mb-2 md:mb-5 text-[var(--charcoal)] font-bold text-base md:text-lg tracking-[0] leading-[normal]">
                  SEAMLEGS
                </div>
                <p className="mb-5 md:mb-8 font-bold text-[var(--charcoal)] text-3xl md:text-5xl tracking-[0] leading-tight md:leading-snug">
                  <b>Smart Legwear for Exercise Categorization</b>
                </p>
                <div className="w-full md:w-[646px] lg:w-[800px] lg:h-[7px] md:h-[5px] h-[3px] bg-[var(--charcoal)]" />
              </div>

              {/* Project Overview */}
              <div className="w-full md:w-[646px] lg:w-[800px] mb-16">
                <div className="md:flex flex-row-reverse mb-2 w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5">
                  <div className="md:w-[250px] lg:w-[300px]">
                    <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                      Timeline
                    </h1>
                    <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                      January 2025 - May 2025 (Research ongoing)
                    </p>
                    <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                      Contributions
                    </h1>
                    <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                      Built ML pipeline from scratch. Ran user tests on
                      prototype. Collected data and performed EDA
                    </p>
                  </div>
                  <div className="md:w-[646px] w-full lg:w-[800px] md:hidden h-[2px] mb-3 mt-3 bg-[var(--charcoal)]" />
                  <div className="flex-1">
                    <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                      Important Note
                    </h1>
                    <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                      SeamLegs is an ongoing research. SeamLegs is adapted from{" "}
                      <a
                        href="https://www.researchgate.net/publication/389572345_SeamFit_Towards_Practical_Smart_Clothing_for_Automatic_Exercise_Logging#:~:text=In%20SeamFit%2C%20we%20demonstrate%20washable%2C%20fits%2C%20and%20wash%20cycles."
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SeamFit: Towards Practical Smart Clothing for Automatic
                        Exercise Logging for lower leg exercises
                      </a>
                      .
                    </p>
                    <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                      Project Snapshot
                    </h1>
                    <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                      SeamLegs is smart pants woven with eight capacitive-thread
                      sensors that identify 12 lower-body exercises. Multiple
                      classifiers were tested with our best model reaching 89%
                      accuracy on 150 annotated trials, proving that textile
                      sensing can rival bulkier wearables while remaining
                      comfortable.
                    </p>
                  </div>
                </div>

                {/* Approach Section */}
                <div className="mb-10">
                  <h1 className="font-bold mb-8 text-[var(--charcoal)] text-lg md:text-xl">
                    Approach
                  </h1>
                  <div className="md:flex w-full md:w-[646px] lg:w-[800px] md:gap-[100px] lg:gap-[130px]">
                    <div className="">
                      <h1 className="font-normal underline md:mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                        System Design
                      </h1>
                      <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                        motivation <br />
                        hardware
                      </p>
                    </div>
                    <div className="">
                      <h1 className="font-normal underline md:mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                        Machine Learning
                      </h1>
                      <div className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                        data collection <br />
                        EDA <br />
                        data pre-processing <br />
                        feature engineering <br />
                        models
                      </div>
                    </div>
                    <div className="">
                      <h1 className="font-normal underline md:mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                        Next Steps
                      </h1>
                      <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                        research in progress
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 bg-black" />
              </div>
            </section>

            {/* Password Authentication Section */}
            <section id="password-auth" className="mb-24">
              {authorized ? (
                <div className="w-full md:w-[646px] lg:w-[800px]">
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                    You are now authorized to view the research content below.
                  </p>
                </div>
              ) : (
                <div className="w-full max-w-md bg-[var(--cream)] p-6 shadow-xl lato-regular text-[var(--charcoal)] border border-[var(--charcoal)]/20">
                  <h2 className="text-lg md:text-xl font-bold mb-2">
                    Password Required
                  </h2>
                  <p className="text-sm md:text-base mb-4">
                    As this is ongoing research, you need a password to view this case
                    study.
                  </p>
                  <p className="text-sm md:text-base mb-6">
                    Please email{" "}
                    <a href="mailto:kl527@cornell.edu" className="underline">
                      kl527@cornell.edu
                    </a>{" "}
                    for the password!
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
              )}
            </section>

            {/* Content Sections */}
            {authorized && (
            <div className="w-full md:w-[646px] lg:w-[800px]">
              {/* System Design Section */}
              <section id="system-design" className="mb-24">
                <h2 className="text-xl libre-bodoni-bold md:text-3xl font-bold text-[var(--charcoal)] mb-8">
                  System Design
                </h2>

                {/* Motivation Subsection */}
                <div id="motivation" className="mb-12 md:mb-16">
                  <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    Motivation
                  </h3>
                  <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                    Current motion tracking solutions are either{" "}
                    <span
                      ref={expensiveRef}
                      className={`highlight ${
                        expensiveInViewport ? "shown" : ""
                      }`}
                    >
                      too expensive (think specialized labs) or too intrusive
                      (bulky IMU sensors strapped to your body).
                    </span>{" "}
                    SeamLegs solves this by integrating{" "}
                    <span
                      ref={capacitiveRef}
                      className={`highlight ${
                        capacitiveInViewport ? "shown" : ""
                      }`}
                    >
                      capacitive sensing threads into normal leggings
                    </span>
                    , giving you accurate full-body motion data without any of
                    the usual drawbacks.
                  </p>
                </div>

                {/* Hardware Subsection */}
                <div id="hardware" className="mb-12 md:mb-16">
                  <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    Hardware
                  </h3>
                  <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                    Hardware was provided by{" "}
                    <span
                      ref={tianhongRef}
                      className={`highlight ${
                        tianhongInViewport ? "shown" : ""
                      }`}
                    >
                      Tianhong Catherine Yu
                    </span>
                    , the first name author of SeamFit.
                  </p>

                  <div className="mb-5">
                    <Image
                      src="/seampants/hardware.jpg"
                      alt="SeamLegs Hardware Setup"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                    <span
                      ref={threadsRef}
                      className={`highlight ${
                        threadsInViewport ? "shown" : ""
                      }`}
                    >
                      Eight insulated capacitive threads
                    </span>{" "}
                    are stitched along outer seams and around key joints,
                    connected to a{" "}
                    <span
                      ref={microcontrollerRef}
                      className={`highlight ${
                        microcontrollerInViewport ? "shown" : ""
                      }`}
                    >
                      Seeed XIAO nRF52840 microcontroller and dual TI FDC2214
                      converters sampling at 30 Hz.
                    </span>
                  </p>
                </div>
              </section>

              {/* Machine Learning Section */}
              <section id="machine-learning" className="mb-24">
                <h2 className="text-xl md:text-3xl libre-bodoni-bold font-bold text-[var(--charcoal)] mb-8">
                  Machine Learning
                </h2>

                {/* Data Collection Subsection */}
                <div id="data-collection" className="mb-12 md:mb-16">
                  <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    Data Collection
                  </h3>
                  <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                    Three participants performed five rounds of each exercise,{" "}
                    <span
                      ref={recordingsRef}
                      className={`highlight ${
                        recordingsInViewport ? "shown" : ""
                      }`}
                    >
                      yielding 150 one-minute recordings aligned with video for
                      ground-truth labeling through Vidat.
                    </span>
                  </p>

                  {/* Participant Images */}
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <Image
                      src="/seampants/par1.jpg"
                      alt="Participant 1"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                    <Image
                      src="/seampants/par2.jpg"
                      alt="Participant 2"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                    <Image
                      src="/seampants/par3.jpg"
                      alt="Participant 3"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Exercise GIFs Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-8">
                      {/* Walking */}
                      <div>
                        <h4 className="mb-4 text-[var(--charcoal)] text-base md:text-lg font-normal">
                          Walking
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          <Image
                            src="/seampants/walking/1.gif"
                            alt="Walking 1"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                            loading="lazy"
                            priority={false}
                            quality={50}
                            unoptimized={true}
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                          <Image
                            src="/seampants/walking/2.gif"
                            alt="Walking 2"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                            loading="lazy"
                            priority={false}
                            quality={50}
                            unoptimized={true}
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                          <Image
                            src="/seampants/walking/3.gif"
                            alt="Walking 3"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                            loading="lazy"
                            priority={false}
                            quality={50}
                            unoptimized={true}
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-8">
                      {/* Lunges */}
                      <div>
                        <h4 className="mb-4 text-[var(--charcoal)] text-base md:text-lg font-normal">
                          Lunges
                        </h4>
                        <div className="grid grid-cols-3 gap-4">
                          <Image
                            src="/seampants/lunges/1.gif"
                            alt="Lunges 1"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                            loading="lazy"
                            priority={false}
                            quality={50}
                            unoptimized={true}
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                          <Image
                            src="/seampants/lunges/2.gif"
                            alt="Lunges 2"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                            loading="lazy"
                            priority={false}
                            quality={50}
                            unoptimized={true}
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                          <Image
                            src="/seampants/lunges/3.gif"
                            alt="Lunges 3"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                            loading="lazy"
                            priority={false}
                            quality={50}
                            unoptimized={true}
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EDA Subsection */}
                <div id="eda" className="mb-12 md:mb-16">
                  <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    EDA
                  </h3>
                  <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                    We looked at the{" "}
                    <span
                      ref={signalsRef}
                      className={`highlight ${
                        signalsInViewport ? "shown" : ""
                      }`}
                    >
                      raw capacitive thread signals through the naked eye
                    </span>
                    , recognizing patterns.
                  </p>

                  <div className="mb-5">
                    <Image
                      src="/seampants/eda.jpg"
                      alt="Exploratory Data Analysis"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-lg md:text-xl font-normal">
                        Clear patterns:
                      </h4>
                      <div className="ml-4 border-l-2 border-melo-blue pl-4">
                        <ul>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Walking up & down stairs
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Squatting
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Side Shuffles
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Sitting Down
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-lg md:text-xl font-normal">
                        Contrary to what we expected:
                      </h4>
                      <div className="ml-4 border-l-2 border-melo-blue pl-4">
                        <ul>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Squats were very different from{" "}
                            <span
                              ref={sittingRef}
                              className={`highlight ${
                                sittingInViewport ? "shown" : ""
                              }`}
                            >
                              sitting down
                            </span>
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            <span
                              ref={jumpingRef}
                              className={`highlight ${
                                jumpingInViewport ? "shown" : ""
                              }`}
                            >
                              Jumping jacks, walking, and jogging
                            </span>{" "}
                            produce similar patterns
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Pre-processing Subsection */}
                <div id="data-preprocessing" className="mb-12 md:mb-16">
                  <h3 className="underline mb-4 text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    Data Pre-processing
                  </h3>
                  <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                    Recognized that we were getting{" "}
                    <span
                      ref={readingsRef}
                      className={`highlight ${
                        readingsInViewport ? "shown" : ""
                      }`}
                    >
                      incorrect readings
                    </span>{" "}
                    because of a{" "}
                    <span
                      ref={hardwareRef}
                      className={`highlight ${
                        hardwareInViewport ? "shown" : ""
                      }`}
                    >
                      hardware issue
                    </span>
                    .
                  </p>

                  <div className="mb-5">
                    <Image
                      src="/seampants/pre1.jpg"
                      alt="Data Pre-processing Issue"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>

                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-lg md:text-xl font-normal">
                    Filtering:
                  </h4>
                  <div className="ml-4 border-l-2 border-melo-blue pl-4">
                    <ul>
                      <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                        We tried a moving average filter, but it only
                        &ldquo;smudged&rdquo; the outliers, not get rid of them.
                      </li>
                      <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                        We ended up using an{" "}
                        <span
                          ref={interquartileRef}
                          className={`highlight ${
                            interquartileInViewport ? "shown" : ""
                          }`}
                        >
                          interquartile range
                        </span>{" "}
                        to remove outliers
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5">
                    <Image
                      src="/seampants/pre.jpg"
                      alt="Data Pre-processing Solution"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Feature Engineering Subsection */}
                <div id="feature-engineering" className="mb-12 md:mb-16">
                  <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    Feature Engineering
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-lg md:text-xl font-normal">
                        Windowing:
                      </h4>
                      <div className="ml-4 border-l-2 border-melo-blue pl-4">
                        <ul>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            1s windows at 30 Hz with 50% overlap to preserve
                            temporal detail while boosting sample count.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-lg md:text-xl font-normal">
                        Per-sensor statistics (11 x 8 = 88 features):
                      </h4>
                      <div className="ml-4 border-l-2 border-melo-blue pl-4">
                        <ul>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Central tendency & spread: mean, std, variance,
                            median, range
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Extrema: max, min, absolute-max
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Dynamics: zero-crossing count, mean absolute first
                            difference
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Intensity pattern: smoothed peak count (captures
                            bursty motions)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-lg md:text-xl font-normal">
                        Label-aware selection pipeline:
                      </h4>
                      <div className="ml-4 border-l-2 border-melo-blue pl-4">
                        <ul>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Top-20 by ANOVA F-score
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Top-20 by mutual information
                          </li>
                          <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                            Top-20 via Recursive Feature Elimination with a
                            100-tree Random Forest
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Models Subsection */}
                <div id="models" className="mb-12 md:mb-16">
                  <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    Models
                  </h3>

                  <div className="mb-5">
                    <Image
                      src="/seampants/model.jpg"
                      alt="Model Results"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                    <span
                      ref={accuracyRef}
                      className={`highlight ${
                        accuracyInViewport ? "shown" : ""
                      }`}
                    >
                      The Random Forest model performed the best at 88.6%
                      overall accuracy, with a macro-F1 of 0.87 using 10-fold
                      cross validation.
                    </span>
                  </p>
                </div>
              </section>

              {/* Next Steps Section */}
              <section id="next-steps" className="mb-24">
                <h2 className="text-xl md:text-3xl libre-bodoni-bold font-bold text-[var(--charcoal)] mb-8">
                  Next Steps
                </h2>

                {/* Research in Progress Subsection */}
                <div id="research-in-progress" className="mb-12 md:mb-16">
                  <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">
                    Research in Progress
                  </h3>
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-lg md:text-xl font-normal">
                    There&apos;s a few more things we&apos;re working on:
                  </h4>
                  <div className="ml-4 border-l-2 border-melo-blue pl-4">
                    <ul>
                      <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                        <span
                          ref={reengineerRef}
                          className={`highlight ${
                            reengineerInViewport ? "shown" : ""
                          }`}
                        >
                          Re-engineer SeamLegs
                        </span>{" "}
                        to start the sensor from the back panel, reducing
                        connection issues
                      </li>
                      <li className="ml-4 list-disc font-normal mb-5 text-black md:text-[20px] text-base tracking-[0] leading-7">
                        Record new datasets with the updated design, ensuring{" "}
                        <span
                          ref={independenceRef}
                          className={`highlight ${
                            independenceInViewport ? "shown" : ""
                          }`}
                        >
                          user-independence and session-independence
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            )}
          </div>
        </main>
        {/* Bottom spacer to allow scrolling past the last section so nav can update */}
        <div className="h-24" />
      </div>
    </>
  );
}

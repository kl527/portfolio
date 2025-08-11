"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutTrackRef = useRef<HTMLDivElement>(null);
  const aboutTimelineRef = useRef<HTMLDivElement>(null);
  const [aboutProgress, setAboutProgress] = useState(0);
  const ticking = useRef(false);

  const years = useMemo(() => ["2025", "2024", "2023", "2022", "2021"], []);

  const roles = useMemo(() => ([
    {
      id: "mit",
      title: "Research Intern @ MIT Media Lab",
      dates: "Jun. 2025 - Aug. 2025",
      ranges: [{ start: "2025", end: "2025" }],
    },
    {
      id: "mp",
      title: "Research Assistant @ Machine Poetics Lab",
      dates: "Jan. 2025 - Present",
      ranges: [{ start: "2025", end: "2025" }],
    },
    {
      id: "arl",
      title: "Research Assistant @ Architectural Robotics Lab",
      dates: "Jan.  2024 - Jun. 2025",
      ranges: [{ start: "2024", end: "2025" }],
    },
    {
      id: "finch",
      title: "UI/UX Design Intern @ Finch",
      dates: "Aug. 2024 - Dec. 2024",
      ranges: [{ start: "2024", end: "2024" }],
    },
    {
      id: "innovatev",
      title: "Systems Engineer Intern @ InnovatEV Global",
      dates: "Jun. 2024 - Aug. 2024",
      ranges: [{ start: "2024", end: "2024" }],
    },
    {
      id: "melo",
      title: "CEO & Co-Founder @ Melo-Tomorrow",
      dates: "Dec. 2021 - Dec. 20233",
      ranges: [{ start: "2021", end: "2023" }],
    },
    {
      id: "roka",
      title: "Sniper @ Republic of Korea Army",
      dates: "Dec. 2021 - Jun. 2023",
      ranges: [{ start: "2021", end: "2023" }],
    },
  ]), []);

  const aboutHeightVh = Math.max(180, 120 + years.length * 60);

  const yearToEntries = useMemo(() => {
    const mapping: Record<
      string,
      { id: string; title: string; dates: string }[]
    > = {};
    years.forEach((y) => (mapping[y] = []));
    roles.forEach((role) => {
      role.ranges.forEach((r) => {
        const startIdx = years.indexOf(r.start);
        const endIdx = years.indexOf(r.end);
        if (startIdx === -1 || endIdx === -1) return;
        const [a, b] = [Math.min(startIdx, endIdx), Math.max(startIdx, endIdx)];
        for (let i = a; i <= b; i++) {
          mapping[years[i]].push({
            id: role.id,
            title: role.title,
            dates: role.dates,
          });
        }
      });
    });
    // Keep a global order so rows align visually across years
    const order = roles.map((r) => r.id);
    years.forEach((y) => {
      mapping[y].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
    });
    return mapping;
  }, [roles, years]);

  // reserved for future layout tuning
  // const rowHeightPx = 80;
  // const headerOffsetPx = 56;

  const updateProgress = useCallback(() => {
    if (aboutRef.current) {
      const rect = aboutRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight))
      );
      setAboutProgress(scrollProgress);
      if (aboutTrackRef.current && aboutTimelineRef.current) {
        const itemCount = years.length + 1; // include Education column
        const maxTranslate = Math.max(20, (itemCount - 1) * 20);
        const translateValue = scrollProgress * -maxTranslate;
        const transform = `translateX(calc(50% + ${translateValue}%))`;
        aboutTrackRef.current.style.transform = transform;
        aboutTimelineRef.current.style.transform = transform;
      }
    }
    ticking.current = false;
  }, [years.length]);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateProgress);
      ticking.current = true;
    }
  }, [updateProgress]);

  const handleScroll = useCallback(() => requestTick(), [requestTick]);
  const handleResize = useCallback(() => requestTick(), [requestTick]);

  useEffect(() => {
    updateProgress();
    const opts = { passive: true } as const;
    window.addEventListener("scroll", handleScroll, opts);
    window.addEventListener("resize", handleResize, opts);
    const handleWheel = () => requestTick();
    window.addEventListener("wheel", handleWheel, opts);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleScroll, handleResize, requestTick, updateProgress]);

  return (
    <section className="relative" style={{ height: `${aboutHeightVh}vh` }}>
      <div className="sticky top-0 h-screen bg-[var(--cream)] overflow-hidden flex items-center justify-center">
        {/* Timeline above content (About) */}
        <div className="absolute top-20 left-0 right-0 flex items-center justify-center pointer-events-none">
          <div
            ref={aboutTimelineRef}
            className="flex gap-[4vmin] relative justify-center"
            style={{ transform: "translateX(50%)", willChange: "transform" }}
          >
            {/* Spacer to align with leading in-track label (width matches label: 8vmin) */}
            <div
              className="flex-shrink-0"
              style={{ width: "8vmin" }}
              aria-hidden
            />
            {/* Education column heading (no connecting line) */}
            <div
              className="relative flex justify-center z-10"
              style={{ width: "45vmin" }}
            >
              <div className="bg-[var(--cream)] px-3 py-1 rounded relative z-10">
                <span className="lato-regular text-[var(--charcoal)] text-lg">
                  Education
                </span>
              </div>
            </div>
            {years.map((year, idx) => (
              <div
                key={year}
                className="relative flex justify-center z-10"
                style={{ width: "45vmin" }}
              >
                <div className="bg-[var(--cream)] px-3 py-1 rounded relative z-10">
                  <span className="lato-regular text-[var(--charcoal)] text-lg">
                    {year}
                  </span>
                </div>
                {idx < years.length - 1 && (
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-px bg-[var(--charcoal)] z-0"
                    style={{
                      left: "calc(50% + 1.5rem)",
                      width: "calc(45vmin + 4vmin - 3rem)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* About horizontal content track */}
        <div
          ref={aboutTrackRef}
          className="flex gap-[4vmin] relative"
          style={{ transform: "translateX(50%)", willChange: "transform" }}
        >
          {/* In-track horizontal label so it scrolls with content */}
          <div
            className="relative flex-shrink-0 pointer-events-none"
            aria-hidden="true"
            style={{ width: "8vmin", height: "40vmin" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="block -rotate-90 origin-center uppercase tracking-[0.35em] lato-regular text-[var(--charcoal)]/70 text-[11px] md:text-sm">
                EXPERIENCES
              </span>
            </div>
          </div>
          {/* Education content column */}
          <div
            className="relative flex-shrink-0 z-10"
            style={{ width: "45vmin", minHeight: "40vmin" }}
          >
            <div className="w-full h-full p-6">
              <div className="flex flex-col justify-center h-full translate-y-2 md:translate-y-4">
                <div className="text-xl sm:text-2xl md:text-5xl lato-regular text-[var(--charcoal)]">
                  {(() => {
                    const [pre, post] =
                      "Information Science @ Cornell University".split(" @ ");
                    return (
                      <>
                        <span>{pre}</span>
                        {post ? " @ " : ""}
                        {post && <span className="font-bold">{post}</span>}
                      </>
                    );
                  })()}
                </div>
                <div className="text-sm sm:text-base md:text-xl italic lato-regular text-[var(--charcoal)]/80 mt-2">
                  May. 2026
                </div>
              </div>
            </div>
          </div>
          {/* Year columns with roles per year - no background cards, no per-column year label, no connectors */}
          {years.map((year) => (
            <div
              key={year}
              className="relative flex-shrink-0 z-10"
              style={{ width: "45vmin", minHeight: "40vmin" }}
            >
              <div className="w-full h-full p-6">
                <div className="flex flex-col gap-6 sm:gap-6 md:gap-8">
                  {yearToEntries[year].map((entry) => (
                    <div
                      key={`${year}-${entry.id}`}
                      className="h-20 md:h-20 flex flex-col justify-center"
                    >
                      <div className="text-sm sm:text-base md:text-lg lato-regular text-[var(--charcoal)]">
                        {(() => {
                          const [pre, post] = entry.title.split(" @ ");
                          return (
                            <>
                              <span>{pre}</span>
                              {post ? " @ " : ""}
                              {post && (
                                <span className="font-bold">{post}</span>
                              )}
                            </>
                          );
                        })()}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base italic lato-regular text-[var(--charcoal)]/80">
                        {entry.dates}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator (About) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-32 h-1 bg-[var(--charcoal)]/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--charcoal)] transition-all duration-300"
              style={{ width: `${aboutProgress * 100}%` }}
            />
          </div>
          <span className="text-sm lato-regular text-[var(--charcoal)]">
            {aboutProgress >= 0.99
              ? "Thank you for looking through my portfolio"
              : "Scroll to explore experiences"}
          </span>
        </div>
      </div>
      <div ref={aboutRef} className="absolute inset-0 pointer-events-none" />
    </section>
  );
}

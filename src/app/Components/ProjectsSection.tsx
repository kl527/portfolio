"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [parallaxOffsets, setParallaxOffsets] = useState<number[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);
  const lastDragTime = useRef<number>(0);
  const [unavailableIndex, setUnavailableIndex] = useState<number | null>(null);

  type ProjectCard = {
    image: string;
    hoverText: string;
    date: string | null;
    showDate: boolean;
    href?: string;
    unavailable: boolean;
  };

  const projectData: ProjectCard[] = [
    { image: "/cards_para.png", hoverText: "Parasomatic Interaction with AI Agents", date: "2025", showDate: true, href: "/parasomatic", unavailable: false },
    { image: "/cards_sprout.jpg", hoverText: "AI-powered Mirror Therapy Robot", date: null, showDate: false, href: "/sprout", unavailable: false },
    { image: "/cards_seam.jpg", hoverText: "Capacitive Threaded Smart Pants", date: null, showDate: false, href: "/seamlegs", unavailable: false },
    { image: "/cards_mt.jpg", hoverText: "Tactile sensitive clothing project", date: "2023", showDate: true, href: "/melotomorrow", unavailable: false },
    { image: "/cards_truscoop.jpg", hoverText: "News app that predicts political orientation of articles.", date: null, showDate: false, href: undefined, unavailable: true },
    { image: "/cards_journal.jpg", hoverText: "AI Journal App", date: "2022", showDate: true, href: undefined, unavailable: true },
  ];

  const projectsHeightVh = Math.max(250, 150 + projectData.length * 60);

  const setCardRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    if (el) cardRefs.current.set(index, el);
    else cardRefs.current.delete(index);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const calculateParallaxOffsets = useCallback(() => {
    if (prefersReducedMotion || !trackRef.current) {
      setParallaxOffsets([]);
      return;
    }
    const newOffsets: number[] = [];
    cardRefs.current.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distanceFromCenter = (cardCenter - viewportCenter) / window.innerWidth;
      newOffsets[index] = distanceFromCenter * 80;
    });
    setParallaxOffsets(newOffsets);
  }, [prefersReducedMotion]);

  const updateProgress = useCallback(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      setProgress(scrollProgress);
      if (trackRef.current) {
        const cardCount = projectData.length;
        const maxTranslate = Math.max(30, (cardCount - 1) * 20);
        const translateValue = scrollProgress * -maxTranslate;
        const transform = `translateX(calc(50% + ${translateValue}%))`;
        trackRef.current.style.transform = transform;
        if (timelineRef.current) timelineRef.current.style.transform = transform;
      }
      calculateParallaxOffsets();
    }
    ticking.current = false;
  }, [calculateParallaxOffsets, projectData.length]);

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
    const scrollOptions = { passive: true } as const;
    window.addEventListener('scroll', handleScroll, scrollOptions);
    window.addEventListener('resize', handleResize, scrollOptions);
    const handleWheel = () => requestTick();
    window.addEventListener('wheel', handleWheel, scrollOptions);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleScroll, handleResize, requestTick, updateProgress]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.transition = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
    const now = Date.now();
    if (now - lastDragTime.current > 16) {
      calculateParallaxOffsets();
      lastDragTime.current = now;
    }
  }, [isDragging, startX, scrollLeft, calculateParallaxOffsets]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging && trackRef.current) trackRef.current.style.transition = '';
    setIsDragging(false);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (trackRef.current) trackRef.current.style.transition = '';
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.transition = 'none';
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
    const now = Date.now();
    if (now - lastDragTime.current > 16) {
      calculateParallaxOffsets();
      lastDragTime.current = now;
    }
  }, [isDragging, startX, scrollLeft, calculateParallaxOffsets]);

  const handleTouchEnd = useCallback(() => {
    if (trackRef.current) trackRef.current.style.transition = '';
    setIsDragging(false);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${projectsHeightVh}vh` }}
    >
      <div className="sticky top-0 h-screen bg-[var(--cream)] overflow-hidden flex items-center justify-center">
        {/* Timeline above cards */}
        <div className="absolute top-20 left-0 right-0 flex items-center justify-center pointer-events-none">
          <div
            ref={timelineRef}
            className="flex gap-[4vmin] relative justify-center"
            style={{ transform: 'translateX(50%)', willChange: 'transform' }}
          >
            {/* Spacer to align with leading in-track label (width matches label: 8vmin) */}
            <div className="flex-shrink-0" style={{ width: '8vmin' }} aria-hidden />
            {projectData.map((item, index) => {
              const showDateCards = projectData.filter(p => p.showDate);
              const isLastDate = item.showDate && showDateCards.indexOf(item) === showDateCards.length - 1;
              const hasNextDate = !isLastDate && projectData.slice(index + 1).some(p => p.showDate);
              return (
                <div key={index} className="relative flex justify-center z-10" style={{ width: '45vmin' }}>
                  {item.showDate && (
                    <>
                      <div className="bg-[var(--cream)] px-3 py-1 rounded relative z-10">
                        <span className="lato-regular text-[var(--charcoal)] text-lg">{item.date}</span>
                      </div>
                      {hasNextDate && (
                        <div className="absolute top-1/2 -translate-y-1/2 h-px bg-[var(--charcoal)] z-0" style={{ left: 'calc(50% + 1.5rem)', width: `calc(${projectData.slice(index + 1).findIndex(p => p.showDate) + 1} * (45vmin + 4vmin) - 3rem)` }} />
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel wrapper */}
        <div className="flex items-center justify-center w-full">
          {/* Intro overlay to the left of the cards, fades out on scroll */}
          <div
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{ opacity: Math.max(0, 1 - progress * 10), transition: 'opacity 500ms ease' }}
          >
            <div className="flex flex-col items-start gap-2 max-w-[45%] md:max-w-lg">
              <span className="text-md lato-regular text-[var(--charcoal)]">Hi,</span>
              <h2 className="text-xl md:text-5xl leading-tight lato-regular text-[var(--charcoal)]">I am a researcher exploring <b>Human-AI Interaction</b></h2>
              <p className="text-sm md:text-md italic lato-regular text-[var(--charcoal)] mb-6">Scroll as you normally would</p>
              <div className="flex flex-col gap-4 pointer-events-auto">
                <button 
                  onClick={() => {
                    const aboutSection = document.querySelector('[style*="height: "][style*="vh"]:last-of-type');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
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

          <div
            ref={trackRef}
            className="flex gap-[4vmin] cursor-grab active:cursor-grabbing select-none"
            style={{ willChange: 'transform' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* In-track vertical label so it scrolls with cards */}
            <div className="relative flex-shrink-0 pointer-events-none" aria-hidden="true" style={{ width: '8vmin', height: '65vmin' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="block -rotate-90 origin-center uppercase tracking-[0.35em] lato-regular text-[var(--charcoal)]/70 text-[11px] md:text-sm">PROJECTS</span>
              </div>
            </div>

            {projectData.map((item, index) => {
              const CardInner = (
                <div
                  ref={setCardRef(index)}
                  className="relative flex-shrink-0 overflow-hidden rounded-lg cursor-pointer"
                  style={{ width: '45vmin', height: '65vmin' }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover"
                      style={{
                        objectPosition: prefersReducedMotion ? '50% 50%' : `${50 - (parallaxOffsets[index] || 0)}% 50%`,
                        willChange: isDragging ? 'object-position' : 'auto',
                      }}
                      sizes="(max-width: 1024px) 80vw, 60vmin"
                      priority={index < 3}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  </div>

                  <div className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="lato-regular text-[var(--cream)] text-xl text-center px-4">{item.hoverText}</h3>
                  </div>

                  {item.unavailable && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className={`bg-black/80 text-[var(--cream)] lato-regular text-center px-4 py-2 rounded transform transition-all duration-300 ${unavailableIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Not available
                      </div>
                    </div>
                  )}
                </div>
              );

              if (item.unavailable) {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setUnavailableIndex(prev => (prev === index ? null : index))}
                    className="relative flex-shrink-0 border-0 p-0 bg-transparent"
                    style={{ width: '45vmin', height: '65vmin' }}
                  >
                    {CardInner}
                  </button>
                );
              }

              const href = item.href ?? '#';
              return (
                <Link key={index} href={href} className="relative flex-shrink-0" style={{ width: '45vmin', height: '65vmin' }}>
                  {CardInner}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator (Projects) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-32 h-1 bg-[var(--charcoal)]/30 rounded-full overflow-hidden">
            <div className="h-full bg-[var(--charcoal)] transition-all duration-300" style={{ width: `${progress * 100}%` }} />
          </div>
          <span className="text-sm lato-regular text-[var(--charcoal)]">{progress >= 0.99 ? 'Scroll to continue' : 'Scroll to explore projects'}</span>
        </div>
      </div>
    </section>
  );
}



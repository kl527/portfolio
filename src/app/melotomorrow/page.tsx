"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { sections } from './data/sections'
import { handleScroll } from './utils/scrollUtils'
import Navigation from './components/Navigation'
import BackButton from './components/BackButton'
import CarouselClothing from './components/CarouselClothing'
import ResponsiveGrid from './components/ResponsiveGrid'

export default function MeloTomorrowPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [activeSubsection, setActiveSubsection] = useState('')

  // No highlight refs used in this portfolio

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll(sections, setActiveSection, setActiveSubsection);
    };

    // Call once on mount to set initial state based on current scroll position
    handleScrollEvent();

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

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
            onSectionClick={(sectionId) => {
              const element = document.getElementById(sectionId)
              if (element) {
                const yOffset = -20
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                window.scrollTo({ top: y, behavior: 'smooth' })
              }
            }}
          />
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          {/* Introduction Section */}
          <section id="introduction" className="mb-16">
            {/* Title Section */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-5 md:mb-9">
              <div className="mb-2 md:mb-5 text-[var(--charcoal)] font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]">
                MELO TOMORROW
              </div>
              <p className="mb-5 md:mb-8 libre-bodoni-bold font-normal text-[var(--charcoal)] text-[32px] md:text-[56px] tracking-[0] leading-[35px] md:leading-[55px]">
                <b>Clothing brand for people with hypersensitivity</b>
              </p>
              <div className="w-full md:w-[646px] lg:w-[800px] lg:h-[7px] md:h-[5px] h-[4px] bg-[var(--charcoal)]" />
            </div>

            {/* Carousel */}
            <ResponsiveGrid />

            {/* Project Overview */}
            <div className="w-full md:w-[646px] lg:w-[800px] mb-16">
              <div className="md:flex flex-row-reverse mb-2 w-full md:w-[646px] lg:w-[800px] md:flex md:gap-5">
                <div className="md:w-[300px]">
                  <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                    Timeline
                  </h1>
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                    Dec. 2021 - Present
                  </p>
                  <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                    Tools
                  </h1>
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg">
                    Figma, Next.js, Illustrator, Photoshop, After Effects
                  </p>
                </div>
                <div className="md:w-[646px] w-full lg:w-[800px] md:hidden h-[2px] mb-3 mt-3 bg-[var(--charcoal)]" />
                <div className="md:w-[346px] lg:w-[500px]">
                  <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                    Problem
                  </h1>
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg leading-6 md:leading-8">
                    While working at a welfare center for the disabled, a friend with autism seemed to be more sensitive to certain inputs, particularly in terms of tactile and visual stimuli.
                  </p>
                  <h1 className="font-bold mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                    Solution
                  </h1>
                  <p className="lato-regular mb-8 text-[var(--charcoal)] text-base md:text-lg leading-6 md:leading-8">
                    We crafted clothes featuring reduced-contact stitching, strategically positioned labels in pockets, optimized shapes, and low-luminance fabrics.
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
                      Research
                    </h1>
                    <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                      literature review <br /> competitor analysis <br /> interviews <br /> affinity mapping
                    </p>
                  </div>
                  <div className="">
                    <h1 className="font-normal underline md:mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                      Design
                    </h1>
                    <div className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                      informed brainstorming <br /> user flow <br /> sketches <br /> wireframes <br /> user testing
                    </div>
                  </div>
                  <div className="">
                    <h1 className="font-normal underline md:mb-4 text-[var(--charcoal)] text-lg md:text-xl">
                      Evaluate
                    </h1>
                    <p className="lato-regular mb-5 text-[var(--charcoal)] text-base md:text-lg">
                      reflections <br /> next steps
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 bg-[var(--charcoal)]" />
            </div>
          </section>

          {/* Content Sections */}
          <div className="w-full md:w-[646px] lg:w-[800px]">
            {/* Research Section */}
            <section id="research" className="mb-16">
              <h2 className="text-xl libre-bodoni-bold md:text-3xl font-bold text-[var(--charcoal)] mb-8">
                Research
              </h2>
              
              {/* Literature Review Subsection */}
              <div id="literature-review" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Literature Review</h3>
                <h3 className="text-[var(--charcoal)] md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">Main Findings:</h3>
                <ul>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    35% of people with autism spectrum disorder (ASD) report hyper reactivity to tactile sensitivity <a className="underline underline-offset-2" href="https://pubmed.ncbi.nlm.nih.gov/27475418/">(Green et al. 2016)</a>
                  </li>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    People with ASD reported highly negatively to fabric labels - one participant of a study said &quot;the labels are just there to make you feel bad.&quot; <a className="underline underline-offset-2" href="https://link.springer.com/article/10.1007/s10803-021-05140-3">(Kyriacou et al. 2021).</a>
                  </li>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Boys with ASD are significantly less likely to prefer the color yellow than boys under typical development <a className="underline underline-offset-2" href="https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01976/full">(Grandgeorge and Masataka 2016).</a>
                  </li>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Color phobias, strong preferences for some colors are due to hypersensitivity in individuals with ASD. <a className="underline underline-offset-2" href="https://www.tandfonline.com/doi/abs/10.1080/13554794.2013.770880">(Ludlow et al. 2013)</a>
                  </li>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Abnormal sensitivity to visual cues are present in the majority of children with ASD. <a className="underline underline-offset-2" href="https://link.springer.com/article/10.1023/A:1025850431170">(O&apos;Neill and Jones 1997)</a>
                  </li>
                </ul>
              </div>

              {/* Competitor Analysis Subsection */}
              <div id="competitor-analysis" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Competitor Analysis</h3>
                <p className="lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">Korea has historically ranked poorly in terms of mental health. As a result, there are not many Korean companies that make clothing for people with autism. We looked at three major companies: Target&apos;s Cat and Jack, Kohl&apos;s, and Better Basic.</p>
                <h3 className="text-[var(--charcoal)] md:mb-4 font-normal text-lg md:text-[21px] tracking-[0] leading-[normal]">Main Findings:</h3>
                <ul>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Existing clothing companies for ASD target younger children who often exhibit a heightened sensitivity to sensory stimuli
                  </li>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Offered clothing for ASD focus on tactile hypersensitivity
                  </li>
                  <li className="ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Clothing companies for ASD make their websites for caregivers&apos; ease of use, not for the children themselves.
                  </li>
                </ul>
              </div>

              {/* Interviews Subsection */}
              <div id="interviews" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Interviews</h3>
                <div className="w-full md:w-[646px] lg:w-[800px]">
                  <picture className="w-full md:w-[646px] lg:w-[800px]">
                    <source media="(max-width: 767px)" srcSet="/affinity-mobile.png" />
                    <source media="(min-width: 768px)" srcSet="/affinity.png" />
                    <Image src="/affinity.png" alt="affinity map" width={800} height={400}/>
                  </picture>
                </div>
              </div>

              {/* User Personas Subsection */}
              <div id="user-personas" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">User Personas</h3>
                <div>
                  <Image src="/persona1.png" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="caretaker persona" width={800} height={400}/>
                  <Image src="/persona2.png" className="w-full md:w-[646px] lg:w-[800px]" alt="child persona" width={800} height={400}/>
                </div>
              </div>

              {/* Key Points Subsection */}
              <div id="key-points" className="mb-16">
                <h3 id="keyPoints" className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Key Points</h3>
                <p className="lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">Based on the literature review, competitor analyses, and user interviews, we gained a better understanding of what we should be making. <br /> <br /> We decided to focus our efforts on three key points:</p>
                <div className=''>
                  <h3 className='mb-3 text-[var(--charcoal)] font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Limited Availability of Visually Sensory-Friendly Clothing
                  </h3>
                  <p className="mb-3 lato-regular font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Individuals with ASD often experience visual hypersensitivity, making them extremely sensitive to certain colors and patterns. This results in discomfort and challenges in wearing conventional clothing, leading to a reliance on a limited selection of visually comfortable garments.
                  </p>
                  <h4 className='font-bold text-[16px] md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h4>
                  <ul className="mb-8">
                    <li className="italic ml-4 list-disc lato-regular lato-regular font-normal mb-5 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-[var(--charcoal)]">Choose low luminance fabric colors and avoid yellow</em> <br />
                      People with ASD don&apos;t like high luminance fabric colors (literature review) <br />
                      Boys with ASD don&apos;t like the color yellow (literature review) <br />
                      Interview participants tended to like colors blue and white (Interviews)
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <h3 className='mb-3 text-[var(--charcoal)] font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Inadequate Accommodations for Tactile Hypersensitivity
                  </h3>
                  <p className="mb-3 lato-regular font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Individuals with hypersensitivity often experience discomfort from certain textures and materials, making it difficult to wear conventional clothing comfortably. This issue can result in significant distress and a limited wardrobe.
                  </p>
                  <h4 className='font-bold text-lg md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h4>
                  <ul className="mb-7">
                    <li className="italic ml-4 list-disc lato-regular font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-[var(--charcoal)]">Remove tags</em> <br />
                      People with ASD don&apos;t like fabric labels (literature review)<br />
                      Interview participants reported that they remove fabric labels when they purchase new clothes (Interviews)
                    </li>
                    <li className="italic ml-4 list-disc lato-regular font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-[var(--charcoal)]">Change stitching/get rid of stitching</em> <br />
                      Interview participants reported that they don&apos;t wear clothes that have uneven/protruding stitching (interviews)<br />
                      Current adaptive clothing in Korea don&apos;t accommodate for stitching (Competitor Analysis)
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <h3 className='mb-3 text-[var(--charcoal)] font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Insufficient Age-Appropriate Clothing Options
                  </h3>
                  <p className="mb-3 lato-regular font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Many existing clothing lines for individuals with ASD focus on younger children and lack options for teenagers and adults.</p>
                  <h4 className='font-bold text-lg md:text-[18px] tracking-[0] leading-[normal]'>Things I learned:</h4>
                  <ul className="mb-7">
                    <li className="italic ml-4 list-disc lato-regular font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      <em className="text-[var(--charcoal)]">Target older population</em> <br />
                      Current adaptive clothing for people with ASD market is directed towards children (competitor analysis)
                    </li>
                  </ul>
                </div>
                <div className="md:w-[646px] w-full lg:w-[800px] h-[2px] mb-5 bg-[var(--charcoal)]" />
              </div>
            </section>

            {/* Design Section */}
            <section id="design" className="mb-16">
              <h2 className="text-xl libre-bodoni-bold md:text-3xl font-bold text-[var(--charcoal)] mb-8">
                Design
              </h2>
              
              {/* Clothing Designs Section */}
              <div id="clothing-designs" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Clothing Designs</h3>
                
                {/* Design Ideation */}
                <div className="mb-8">
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-base md:text-lg font-semibold tracking-[0] leading-[normal]">Design Ideation</h4>
                  <p className="lato-regular lato-regular font-normal mb-1 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">Based on the key pain points we identified during our research, we brainstormed potential solutions.</p>
                  <div>
                    <Image src="/brainstorm.jpg" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Ideation" width={800} height={400} />
                  </div>
                </div>

                {/* Low Fidelity Sketches */}
                <div className="mb-8">
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-base md:text-lg font-semibold tracking-[0] leading-[normal]">Low Fidelity Sketches</h4>
                  <p className="lato-regular lato-regular font-normal mb-1 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">I was new to clothing design, so I visited Dongdaemun (clothing market in South Korea) to understand the feasibility behind our ideas. Combining what I learned in the clothing market and our prior research, I sketched out possible adaptive clothing designs.</p>
                  <div>
                    <Image src="/clothingLow.jpg" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Clothing Low Fidelity" width={800} height={400} />
                  </div>
                </div>

                {/* Final Clothing Product */}
                <div>
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-base md:text-lg font-semibold tracking-[0] leading-[normal]">Final Clothing Product</h4>
                  <p className="lato-regular font-normal mb-2 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    To be fully transparent, I did not have the funds to create multiple clothing pieces for user testing. I had to proceed with my first iteration.</p>
                  
                  <p className="lato-regular font-normal mb-1 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    In consideration of how participants during the interview talked mostly of outerwear, I decided to focus on the sweater and the hoodie design.
                    The clothing features reduced-contact stitching, strategically positioned labels in pockets, optimized shapes, and low-luminance fabrics.
                  </p>
                  <CarouselClothing />
                </div>
              </div>

              {/* Website Designs Section */}
              <div id="website-designs" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Website Designs</h3>

                {/* User Flow */}
                <div className="mb-8">
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-base md:text-lg font-semibold tracking-[0] leading-[normal]">User Flow</h4>
                  <p className="lato-regular lato-regular font-normal mb-1 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">I mapped out the user flow for an individual with ASD looking to purchase clothing from the website. Notably, this flow intentionally omits the standard login process to streamline purchasing and order tracking.</p>
                  <Image src="/flow.jpg" className="w-full md:w-[646px] lg:w-[800px]" alt="User Flow" width={800} height={400} />
                </div>

                {/* Low Fidelity Sketches */}
                <div className="mb-8">
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-base md:text-lg font-semibold tracking-[0] leading-[normal]">Low Fidelity Sketches</h4>
                  <p className="lato-regular lato-regular font-normal mb-3 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">After discussing the user flow with the team, we quickly sketched out some product feature ideas.
                    Our main focus was to make the design as accessible as possible, carefully rationalizing every component.</p>
                  <picture className="w-full md:w-[646px] lg:w-[800px]">
                    <source media="(max-width: 767px)" srcSet="/lowfi_website.jpg" />
                    <source media="(min-width: 768px)" srcSet="/lowfi_desktop.png" />
                    <Image src="/lowfi_desktop.png" alt="Low Fidelity Website" width={800} height={400}/>
                  </picture>
                </div>

                {/* Mid Fidelity Wireframes */}
                <div className="mb-8">
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-base md:text-lg font-semibold tracking-[0] leading-[normal]">Mid Fidelity Wireframes</h4>
                  <p className="lato-regular font-normal mb-1 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    While the team worked on finding a way to contact payment gateway services (due to Korea&apos;s strict regulations on payments), I focused on creating mid-fidelity wireframes with the discussed low fidelity concepts.</p>
                  <div>
                    <Image src="/midfis.jpg" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Mid Fidelity Wireframes" width={800} height={400} />
                  </div>
                </div>

                {/* High Fidelity Designs + User Feedback */}
                <div>
                  <h4 className="mb-4 mt-4 text-[var(--charcoal)] text-base md:text-lg font-semibold tracking-[0] leading-[normal]">High Fidelity Designs + User Feedback</h4>
                  <p className="lato-regular lato-regular font-normal mb-1 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">Based on the mid-fidelity wireframes, we developed high-fidelity designs to present to users. We created multiple iterations based on the feedback we received. Here are some of the feedback notes and the corresponding iterations we created:</p>
                  <Image src="/hifi.jpg" className="mb-2 w-full md:w-[646px] lg:w-[800px]" alt="High Fidelity Designs" width={800} height={400} />
                  <Image src="/hifi-more.jpg" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="More High Fidelity Designs" width={800} height={400} />
                </div>
              </div>

              {/* Design Solution Section */}
              <div id="design-overview" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Design Solution</h3>
                <p className="lato-regular font-normal mb-1 text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">The following summary outlines the design solution. Please refer to the preceding research to understand the process behind this solution.</p>
                <Image src="/designSolution.png" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
                <Image src="/designSolution1.png" className="w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
                <Image src="/designSolution2.png" className="mb-3 w-full md:w-[646px] lg:w-[800px]" alt="Design Solution Cover" width={800} height={400} />
              </div>
            </section>

            {/* Evaluate Section */}
            <section id="evaluate" className="mb-16">
              <h2 className="text-xl libre-bodoni-bold md:text-3xl font-bold text-[var(--charcoal)] mb-8">
                Evaluate
              </h2>
              
              {/* Reflections Subsection */}
              <div id="reflections" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Reflections</h3>
                <div className=''>
                  <h4 className='mb-3 text-[var(--charcoal)] font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Clothing Design Reflection
                  </h4>
                  <p className="mb-3 font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    We did not have sufficient funds to create multiple iterations of the clothing. After the first iteration, a few significant issues are noted below.
                  </p>
                  <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      Logo stitching on the inside is too rough - could cause irritation
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      Logo is too big - could be too much visual stimulation
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      Was not able to user test the first iteration - we don&apos;t know if our customers will like the product
                    </li>
                    <li className="italic ml-4 list-disc font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      Production costs were too expensive - our next collection will need to reduce costs by prioritizing functions
                    </li>
                  </ul>
                </div>
                <div className=''>
                  <h4 className='mb-3 text-[var(--charcoal)] font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                    Website Design Reflection
                  </h4>
                  <p className="mb-3 font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                    Although more research was conducted for the website than for the clothing, there was a lack of differentiating features in functionality between our website and other online shopping malls, except for the streamlining aspect. Here are a list of things we could have done better:
                  </p>
                  <ul className="mb-8">
                    <li className="italic ml-4 list-disc font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      Conducting more interviews with individuals with ASD about the website over their hypersensitivities would have helped.</li>
                    <li className="italic ml-4 list-disc font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      More interviews could have been conducted with caregivers of individuals with ASD to better understand what motivates them to make purchases for those in their care.</li>
                    <li className="italic ml-4 list-disc font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      User tests focused too much on the design principles and not enough on the functionality of the website
                    </li>
                  </ul>
                </div>
              </div>

              {/* Next Steps Subsection */}
              <div id="next-steps" className="mb-16">
                <h3 className="mb-4 underline text-[var(--charcoal)] text-lg md:text-xl font-bold">Next Steps</h3>
                <div className="md:flex flex-row-reverse">
                  <Image src="/nextSteps.png" className="mb-3 w-3/4 ml-auto mr-auto md:w-[300px] lg:w-[250px]" alt="caretaker persona" width={800} height={400} />
                  <div className=''>
                    <h4 className='mb-1 text-[var(--charcoal)] font-bold text-lg md:text-[21px] tracking-[0] leading-[normal]'>
                      Adaptive Clothing for Wheelchair Users
                    </h4>
                    <p className="mb-3 font-normal text-[var(--charcoal)] md:text-[20px] text-base tracking-[0] leading-7">
                      We are developing our next collection specifically for wheelchair users, emphasizing easy wear and removal of clothing to accommodate individuals with limited mobility.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
} 
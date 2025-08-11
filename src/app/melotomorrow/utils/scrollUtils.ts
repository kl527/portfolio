export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const yOffset = -20;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const handleScroll = (
  sections: { id: string; subsections?: { id: string }[] }[],
  setActiveSection: (sectionId: string) => void,
  setActiveSubsection: (subsectionId: string) => void
) => {
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.3; // 30% of viewport height

  let activeSection = sections[0].id; // Default to first section
  let activeSubsection = ''; // Default to no subsection

  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // If the element is in the upper portion of the viewport
      if (elementTop <= threshold && elementBottom > 0) {
        activeSection = section.id;
        
        // Check subsections if they exist
        if (section.subsections) {
          for (const subsection of section.subsections) {
            const subElement = document.getElementById(subsection.id);
            if (subElement) {
              const subRect = subElement.getBoundingClientRect();
              if (subRect.top <= threshold && subRect.bottom > 0) {
                activeSubsection = subsection.id;
                break;
              }
            }
          }
        }
        break;
      }
    }
  }

  setActiveSection(activeSection);
  setActiveSubsection(activeSubsection);
}; 
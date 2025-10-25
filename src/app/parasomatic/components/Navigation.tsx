import { NavigationProps } from '../types';

const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  activeSubsection,
  onSectionClick,
  authorized,
}) => {
  return (
    <div className="hidden md:block sticky top-32 w-[200px] md:w-[250px] lato-regular text-[var(--charcoal)]">
      <nav>
        <ul className="space-y-6">
          {sections.map((section) => (
            <li key={section.id} className="space-y-2">
              {/* Main Section */}
              <div className="flex items-center">
                {activeSection === section.id && (
                  <span className="inline-block w-3 h-3 rounded-sm bg-[var(--charcoal)] mr-2" />
                )}
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`text-left text-base md:text-lg transition-all duration-200 w-full truncate font-bold ${
                    activeSection === section.id
                      ? "text-[var(--charcoal)]"
                      : "text-[#9aa0a3] hover:text-[var(--charcoal)]"
                  }`}
                >
                  {section.title}
                </button>
              </div>

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <ul className="ml-4 space-y-2">
                  {section.subsections.map((subsection) => (
                    <li key={subsection.id} className="flex items-center">
                      {activeSubsection === subsection.id && (
                        <span className="inline-block w-2 h-2 rounded-sm bg-[var(--charcoal)] mr-2" />
                      )}
                      <button
                        onClick={() => onSectionClick(subsection.id)}
                        className={`text-left text-sm md:text-base transition-all duration-200 w-full truncate ${
                          activeSubsection === subsection.id
                            ? "text-[var(--charcoal)] font-bold"
                            : "text-[#9aa0a3] font-normal hover:text-[var(--charcoal)]"
                        }`}
                      >
                        {subsection.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {authorized && (
        <a
          href="/parasomatic/_I_Feel_It_Nervous__TEI_2026.pdf"
          download="I_Feel_It_Nervous_TEI_2026.pdf"
          className="mt-16 w-full bg-[var(--charcoal)] md:h-[38px] transition-colors duration-500 ease-in-out flex h-10 items-center justify-center gap-2.5 py-[3px] left-0 border-4 border-solid border-[var(--charcoal)]"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="text-center md:text-[18px] font-bold text-[var(--cream)] text-sm transition-colors duration-300 ease-in-out">
              Download Paper
            </p>
          </div>
        </a>
      )}
    </div>
  );
};

export default Navigation;

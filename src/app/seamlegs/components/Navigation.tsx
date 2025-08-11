import { NavigationProps } from '../types';

const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  activeSubsection,
  onSectionClick,
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
                      ? 'text-[var(--charcoal)]'
                      : 'text-[#9aa0a3] hover:text-[var(--charcoal)]'
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
                            ? 'text-[var(--charcoal)] font-bold'
                            : 'text-[#9aa0a3] font-normal hover:text-[var(--charcoal)]'
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
    </div>
  );
};

export default Navigation; 
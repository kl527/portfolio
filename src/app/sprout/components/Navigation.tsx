import { NavigationProps } from "../types";

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

      <a
        href="https://github.com/kl527/emotion_robot"
        className="mt-16 w-full bg-[var(--charcoal)] md:h-[38px] transition-colors duration-500 ease-in-out flex h-10 items-center justify-center gap-2.5 py-[3px] left-0 border-4 border-solid border-[var(--charcoal)]"
      >
        <div className="flex items-center justify-center gap-2">
          <p className="text-center md:text-[18px] font-bold text-[var(--cream)] text-sm transition-colors duration-300 ease-in-out">
            See the code
          </p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M11.5 0C8.76927 0.000113234 6.12772 0.971874 4.04796 2.74141C1.96821 4.51094 0.585953 6.96277 0.148534 9.65819C-0.288886 12.3536 0.24707 15.1167 1.6605 17.4531C3.07394 19.7896 5.27261 21.5468 7.86312 22.4105C8.43812 22.5111 8.65374 22.1661 8.65374 21.8642C8.65374 21.5911 8.63936 20.6855 8.63936 19.7224C5.74999 20.2542 5.0025 19.018 4.7725 18.3712C4.51729 17.742 4.11272 17.1845 3.59376 16.7468C3.19126 16.5311 2.61626 15.9993 3.57937 15.9849C3.94712 16.0248 4.29984 16.1528 4.60762 16.358C4.91541 16.5632 5.1692 16.8395 5.34749 17.1636C5.50478 17.4462 5.71627 17.6949 5.96986 17.8956C6.22344 18.0963 6.51413 18.2449 6.82527 18.3331C7.13641 18.4212 7.46188 18.4471 7.78304 18.4092C8.10419 18.3713 8.41472 18.2705 8.69682 18.1124C8.74661 17.5277 9.00716 16.9811 9.42996 16.5743C6.87123 16.2868 4.1975 15.2949 4.1975 10.8962C4.18134 9.75328 4.60309 8.64749 5.37624 7.8056C5.02467 6.81226 5.06581 5.72215 5.49124 4.75813C5.49124 4.75813 6.45433 4.45624 8.65372 5.93687C10.5354 5.41934 12.522 5.41934 14.4037 5.93687C16.603 4.44188 17.5662 4.75813 17.5662 4.75813C17.9917 5.72213 18.0328 6.81227 17.6812 7.8056C18.4566 8.64605 18.8788 9.75281 18.8599 10.8962C18.8599 15.3093 16.1718 16.2868 13.6131 16.5743C13.8875 16.8525 14.0989 17.1864 14.2328 17.5535C14.3668 17.9206 14.4201 18.3122 14.3893 18.7018C14.3893 20.2399 14.3749 21.4761 14.3749 21.8643C14.3749 22.1661 14.5905 22.5255 15.1655 22.4105C17.7515 21.5398 19.9438 19.7784 21.3513 17.4408C22.7587 15.1032 23.2895 12.3415 22.8491 9.6487C22.4086 6.95589 21.0255 4.50725 18.9467 2.73987C16.8678 0.972491 14.2285 0.00142013 11.5 0Z"
                fill="var(--cream)"
              />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navigation;

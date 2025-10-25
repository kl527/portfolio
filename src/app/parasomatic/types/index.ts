export interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
}

export interface NavigationProps {
  sections: Section[];
  activeSection: string;
  activeSubsection: string;
  onSectionClick: (sectionId: string) => void;
  authorized: boolean;
}

export interface ContentSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

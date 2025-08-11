export interface Section {
  id: string;
  title: string;
  subsections?: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface NavigationProps {
  sections: Section[];
  activeSection: string;
  activeSubsection: string;
  onSectionClick: (sectionId: string) => void;
} 
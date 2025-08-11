import { Section } from '../types';

export const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    subsections: []
  },
  {
    id: 'research',
    title: 'Research',
    subsections: [
      { id: 'literature-review', title: 'Literature Review' },
      { id: 'competitor-analysis', title: 'Competitor Analysis' },
      { id: 'interviews', title: 'Interviews' },
      { id: 'user-personas', title: 'User Personas' },
      { id: 'key-points', title: 'Key Points' }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    subsections: [
      { id: 'clothing-designs', title: 'Clothing Designs' },
      { id: 'website-designs', title: 'Website Designs' },
      { id: 'design-overview', title: 'Design Solution' }
    ]
  },
  {
    id: 'evaluate',
    title: 'Evaluate',
    subsections: [
      { id: 'reflections', title: 'Reflections' },
      { id: 'next-steps', title: 'Next Steps' }
    ]
  }
]; 
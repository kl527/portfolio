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
      { id: 'cultural-experience', title: 'Cultural Experience' },
      { id: 'literature-review', title: 'Related Works/Literature Review' },
      { id: 'design-goals', title: 'Design Goals' }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    subsections: [
      { id: 'sketches', title: 'Sketches' },
      { id: 'low-fi', title: 'Low Fi' },
      { id: 'mid-fi', title: 'Mid Fi' },
      { id: 'final-prototype', title: 'Final Prototype' }
    ]
  },
  {
    id: 'evaluate',
    title: 'Evaluate',
    subsections: []
  }
]; 
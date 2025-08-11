import { Section } from '../types';

export const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    subsections: []
  },
  {
    id: 'system-design',
    title: 'System Design',
    subsections: [
      { id: 'motivation', title: 'Motivation' },
      { id: 'hardware', title: 'Hardware' }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    subsections: [
      { id: 'data-collection', title: 'Data Collection' },
      { id: 'eda', title: 'EDA' },
      { id: 'data-preprocessing', title: 'Data pre-processing' },
      { id: 'feature-engineering', title: 'Feature engineering' },
      { id: 'models', title: 'Models' }
    ]
  },
  {
    id: 'next-steps',
    title: 'Next Steps',
    subsections: [
      { id: 'research-in-progress', title: 'Research in Progress' }
    ]
  }
]; 
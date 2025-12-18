
import { BuildImage, NavItem, ProcessStep } from './types';
import portfolio1 from './portfolio1.webp';
import portfolio2 from './portfolio2.webp';
import portfolio3 from './portfolio3.webp';
import portfolio4 from './portfolio4.webp';
import portfolio5 from './portfolio5.webp';
import portfolio6 from './portfolio6.webp';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Legacy', href: '#legacy' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
];

export const GALLERY_IMAGES: BuildImage[] = [
  { id: '1', url: portfolio1, title: 'Modern Desert Oasis', category: 'Exterior' },
  { id: '2', url: portfolio2, title: 'Luxury Kitchen Suite', category: 'Interior' },
  { id: '3', url: portfolio3, title: 'Mountain View Terrace', category: 'Exterior' },
  { id: '4', url: portfolio4, title: 'Minimalist Great Room', category: 'Interior' },
  { id: '5', url: portfolio5, title: 'Sunset Courtyard', category: 'Exterior' },
  { id: '6', url: portfolio6, title: 'Primary Suite Sanctuary', category: 'Interior' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'The Vision', description: 'Collaborative conceptual design where your dreams meet our architectural intuition.' },
  { number: '02', title: 'Architectural Planning', description: 'Precision engineering and detailed blueprints that honor the Southern Utah landscape.' },
  { number: '03', title: 'The Build', description: 'Daily management and artisan craftsmanship. Terry Spinks is on-site, every single day.' },
  { number: '04', title: 'The Reveal', description: 'The final walk-through and handing over the keys to your new family sanctuary.' },
];

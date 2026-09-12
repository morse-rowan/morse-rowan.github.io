export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  source: string;
  writeup?: string;
  detailUrl?: string;
  demo?: string;
  awards?: string[];
}

// Add an entry here to add a homepage row. Keep published slugs stable.
export const projects: Project[] = [
  {
    slug: 'highlight-reel-generator', title: 'Automatic Highlight Reel Generator',
    category: 'Internship project / AWS Cloud Innovation Center',
    description: 'Amazon Web Services Cloud Innovation Center: Vision-language powered pipeline that detects events in long training recordings and auto-builds highlight reels via AWS event-driven orchestration.',
    image: '/cic/HighlightProcessorDiagram.png',
    tags: ['AWS Lambda', 'Amazon ECS', 'Amazon CDK', 'Vision-Language', 'PyTorch', 'Cloud Infrastructure'],
    source: 'https://github.com/pitt-cic/automatic-highlight-reel-generator/tree/main',
    detailUrl: 'https://www.digital.pitt.edu/news/success-stories/dive-revolutionizing-coaching-automated-highlight-reels',
  },
  {
    slug: 'sat_diffusion', title: 'Satellite Image Generator', category: 'Personal project / Diffusion',
    description: 'Diffusion from scratch (DDIM/DDPM) to generate 64×64 synthetic Sentinel-2 imagery.',
    image: '/sat_diffusion/sd_results.png', tags: ['PyTorch', 'Diffusion', 'DDPM', 'DDIM'],
    source: 'https://github.com/morse-rowan/satellite_diffusion', writeup: '/sat_diffusion/sat_diffusion.md',
  },
  {
    slug: 'safenet', title: 'SafeNet', category: 'Personal project / Computer vision',
    description: 'A lightweight ConvNet architecture for edge-based UAV navigation in disaster zones.',
    image: '/safenet.png', tags: ['TensorFlow', 'Computer Vision', 'Google Cloud', 'MatPlot', 'scikit-learn'],
    source: 'https://github.com/morse-rowan/SafeNet', writeup: '/projects/safenet.md',
  },
  {
    slug: 'dreamcatcher', title: 'DreamCatcher', category: 'Hackathon / TartanHacks 2025',
    description: 'A creative AI-powered platform for generating and sharing dream-inspired artwork.',
    image: '/dreamcatcher.png', tags: ['PyTorch', 'Vision-Language', 'CLIP', 'Diffusion', 'React', 'Node.js'],
    source: 'https://github.com/morse-rowan/DreamCatcher', demo: 'https://tinyurl.com/38ms8t4x',
    awards: ['1st place · MLH Best Use of Generative AI, CMU TartanHacks 2025', '2nd place · AppLovin Best Content Creation Challenge ($3,000), CMU TartanHacks 2025'],
  },
];

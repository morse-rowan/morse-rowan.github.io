export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  imageSize?: [number, number];
  tags: string[];
  source: string;
  sourceLabel?: string;
  writeup?: string;
  detailUrl?: string;
  demo?: string;
  awards?: string[];
  period?: string;
  // Latest project month (YYYY-MM), or year when the month is unresolved.
  sortDate: string;
}

// Add an entry here to add a homepage row. Keep published slugs stable.
export const projects: Project[] = [
  {
    slug: 'highlight-reel-generator', title: 'Automatic Highlight Reel Generator',
    category: 'Internship project / AWS Cloud Innovation Center',
    period: 'Jul–Aug 2025', sortDate: '2025-08',
    description: 'A vision-language pipeline that detects, clips, and assembles Pitt diving practice footage into highlight reels. Achieved 97.1% recall, eliminating 20+ hours of weekly manual video review.',
    image: '/cic/HighlightProcessorDiagram.png', imageSize: [2680, 730],
    tags: ['AWS Lambda', 'Amazon ECS', 'Amazon CDK', 'Vision-Language', 'PyTorch', 'Cloud Infrastructure'],
    source: 'https://github.com/pitt-cic/automatic-highlight-reel-generator/tree/main',
    detailUrl: 'https://www.digital.pitt.edu/news/success-stories/dive-revolutionizing-coaching-automated-highlight-reels',
  },
  {
    slug: 'sat_diffusion', title: 'Satellite Image Generator', category: 'Personal project / Diffusion',
    period: 'Dec 2025', sortDate: '2025-12',
    description: 'Diffusion from scratch (DDIM/DDPM) to generate 64×64 synthetic Sentinel-2 imagery.',
    image: '/sat_diffusion/sd_results.png', imageSize: [1259, 1252], tags: ['PyTorch', 'Diffusion', 'DDPM', 'DDIM'],
    source: 'https://github.com/morse-rowan/satellite_diffusion', writeup: '/sat_diffusion/sat_diffusion.md',
  },
  {
    slug: 'safenet', title: 'SafeNet', category: 'Personal project / Computer vision',
    period: 'Dec 2024–Jan 2025', sortDate: '2025-01',
    description: 'A lightweight CNN prototype for identifying safe and unsafe drone landing regions. Reached 96.5% unsafe-region test recall with roughly one-second CPU inference.',
    image: '/safenet.png', imageSize: [1111, 538], tags: ['TensorFlow', 'Computer Vision', 'Google Cloud', 'MatPlot', 'scikit-learn'],
    source: 'https://github.com/morse-rowan/SafeNet', writeup: '/projects/safenet.md',
  },
  {
    slug: 'dreamcatcher', title: 'DreamCatcher', category: 'Hackathon / TartanHacks 2025',
    period: 'Feb 2025', sortDate: '2025-02',
    description: 'A social platform that turns EEG activity into short-form videos, aligning EEG representations with CLIP’s image embeddings to guide pretrained Stable Diffusion.',
    image: '/dreamcatcher.png', imageSize: [1641, 908], tags: ['PyTorch', 'Vision-Language', 'CLIP', 'Diffusion', 'React', 'Node.js'],
    source: 'https://github.com/morse-rowan/DreamCatcher', demo: 'https://tinyurl.com/38ms8t4x',
    awards: ['1st place · MLH Best Use of Generative AI, CMU TartanHacks 2025', '2nd place · AppLovin Best Content Creation Challenge, CMU TartanHacks 2025 · $3,000 team prize'],
  },
  {
    slug: 'perforated-backpropagation', title: 'Exploring Perforated Backpropagation',
    category: 'Hackathon / Efficient computer vision',
    // Resume and paper disagree on the event month; retain year-only precision.
    period: 'Feb 2025', sortDate: '2025-02',
    description: 'Coauthored an arXiv preprint on Perforated Backpropagation, including MobileNetV3 compression experiments.',
    tags: ['MobileNetV3', 'Model Compression', 'CIFAR-10'],
    source: 'https://arxiv.org/abs/2506.00356', sourceLabel: 'Read paper',
    awards: ['3rd place · CMU Perforated AI Hackathon 2025 · $1,000 team prize'],
  },
];

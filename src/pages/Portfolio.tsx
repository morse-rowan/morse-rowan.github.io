// src/pages/Portfolio.tsx
import { ExternalLink, Github, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the award type
interface Award {
  id: number;
  icon: string; // Path to clipart image
  name: string;
  description: string;
}

// Update the project type to include awards and hasDetails flag
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string; // URL-friendly identifier for the project
  hasDetails?: boolean; // Flag to indicate if this project has a detailed write-up
  awards?: Award[]; // Optional awards array
  liveLink?: string;
  githubLink?: string;
  detailUrl?: string; // Optional external detail link
}

interface Publication {
  id: number;
  title: string;
  authors: string[];
  publisher: string;
  url: string;
}

const Portfolio = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "Exploring the Performance of Perforated Backpropagation through Further Experiments",
      authors: [
        "Rorry Brenner",
        "Evan Davis",
        "Rushi Chaudhari",
        "Rowan Morse",
        "Jingyao Chen",
        "Xirui Liu",
        "Zhaoyi You",
        "Laurent Itti",
      ],
      publisher: "Perforated AI, $1000 award",
      url: "https://arxiv.org/abs/2506.00356",
    },
  ];

  const internships: Project[] = [
    {
      id: 2,
      title: "Automatic Highlight Reel Generator",
      description: "Amazon Web Services Cloud Innovation Center: Vision-language powered pipeline that detects events in long training recordings and auto-builds highlight reels via AWS event-driven orchestration.",
      image: "/cic/HighlightProcessorDiagram.png",
      slug: "highlight-reel-generator",
      tags: ["AWS Lambda", "Amazon ECS", "Amazon CDK", "Vision-Language", "PyTorch", "Cloud Infrastructure"],
      detailUrl: "https://www.digital.pitt.edu/news/success-stories/dive-revolutionizing-coaching-automated-highlight-reels",
      githubLink: "https://github.com/pitt-cic/automatic-highlight-reel-generator/tree/main"
    },
  ];

  // Sample projects with awards
  const projects: Project[] = [
    {
      id: 3,
      title: "SafeNet",
      description: "A lightweight ConvNet architecture for edge-based UAV navigation in disaster zones.",
      image: "/safenet.png",
      slug: "safenet",
      hasDetails: true, // This project has detailed markdown
      tags: ["TensorFlow", "Computer Vision", "Google Cloud", "MatPlot", "scikit-learn"],
      githubLink: "https://github.com/morse-rowan/SafeNet"
    },
    {
      id: 1,
      title: "Satellite Image Generator 🛰️",
      description: "Diffusion from scratch (DDIM/DDPM) to generate 64x64 synthetic Sentinel-2  imagery.",
      image: "/sat_diffusion/sd_results.png",
      slug: "sat_diffusion",
      hasDetails: true,
      tags: ["PyTorch", "Diffusion", "DDPM", "DDIM"],
      githubLink: "https://github.com/morse-rowan/satellite_diffusion"
    },
    {
      id: 4,
      title: "DreamCatcher",
      description: "A creative AI-powered platform for generating and sharing dream-inspired artwork.",
      image: "/dreamcatcher.png",
      slug: "dreamcatcher",
      hasDetails: false,
      tags: ["PyTorch", "Vision-Language", "CLIP", "Diffusion", "React", "Node.js"],
      awards: [
        {
          id: 1,
          icon: "/mlh.png", 
          name: "🥇 1st Place",
          description: "MLH - Best Use of Generative AI @CMU TartanHacks 2025"
        },
        {
          id: 2,
          icon: "/applovin.png", 
          name: "🥈 2nd Place",
          description: "AppLovin's Best Content Creation Challenge ($3,000) @CMU TartanHacks 2025"
        }
      ],
      liveLink: "https://tinyurl.com/38ms8t4x",
      githubLink: "https://github.com/morse-rowan/DreamCatcher"
    },
    // Add more projects as needed
  ];

  interface DetailLink {
    url: string;
    external: boolean;
  }

  const getDetailLink = (project: Project): DetailLink | null => {
    if (project.hasDetails) {
      return { url: `/portfolio/${project.slug}`, external: false };
    }

    if (project.detailUrl) {
      return { url: project.detailUrl, external: true };
    }

    return null;
  };

  const renderProjectCard = (project: Project) => {
    const detailLink = getDetailLink(project);

    return (
      <div 
        key={project.id} 
        className="bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
      >
        <div className="aspect-w-16 aspect-h-9 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover"
          />
          {detailLink && (
            detailLink.external ? (
              <a 
                href={detailLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white font-medium px-4 py-2 rounded-lg bg-[hsl(251,40.2%,54.1%)] hover:bg-[hsl(251,84.6%,74.5%)]">
                  View Details
                </span>
              </a>
            ) : (
              <Link 
                to={detailLink.url}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white font-medium px-4 py-2 rounded-lg bg-[hsl(251,40.2%,54.1%)] hover:bg-[hsl(251,84.6%,74.5%)]">
                  View Details
                </span>
              </Link>
            )
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
            {detailLink ? (
              detailLink.external ? (
                <a 
                  href={detailLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(251,84.6%,74.5%)]"
                >
                  {project.title}
                </a>
              ) : (
                <Link to={detailLink.url} className="hover:text-[hsl(251,84.6%,74.5%)]">
                  {project.title}
                </Link>
              )
            ) : (
              project.title
            )}
          </h3>
          
          {/* Awards section - only render if project has awards */}
          {project.awards && project.awards.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center mb-1">
                <Award size={16} className="mr-1 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Awards</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {project.awards.map((award) => (
                  <div key={award.id} className="group relative">
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
                      <img 
                        src={award.icon} 
                        alt={award.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="absolute left-0 bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <p className="font-bold">{award.name}</p>
                      <p>{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm h-24 overflow-y-auto">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-[hsl(251,84.6%,74.5%)] hover:text-[hsl(251,40.2%,54.1%)] transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span className="text-sm">Source Code</span>
              </a>
            )}
            
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-[#d97757] hover:text-[#b6613c] transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                <span className="text-sm">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const sortedPublications = [...publications].sort((a, b) => a.id - b.id);
  const sortedInternships = [...internships].sort((a, b) => a.id - b.id);
  const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white tracking-tight">Portfolio</h1>

        <section className="mb-10">
          <div className="rounded-2xl bg-gray-50 dark:bg-[hsl(250,25.3%,16.5%)] border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-end justify-between gap-4 mb-5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Publications</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="space-y-4">
              {sortedPublications.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-lg p-5"
                >
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-gray-800 dark:text-white hover:text-[hsl(251,84.6%,74.5%)] hover:underline underline-offset-4 transition-colors"
                  >
                    {pub.title}
                  </a>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <div>
                      {pub.authors.map((author, index) => (
                        <span key={`${author}-${index}`}>
                          {author === 'Rowan Morse' ? (
                            <span className="font-semibold underline decoration-[hsl(251,84.6%,74.5%)] decoration-2">
                              {author}
                            </span>
                          ) : (
                            author
                          )}
                          {index < pub.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    <div className="mt-1 text-[hsl(251,84.6%,74.5%)]">{pub.publisher}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="rounded-2xl bg-gray-50 dark:bg-[hsl(250,25.3%,16.5%)] border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-end justify-between gap-4 mb-5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Internship Projects</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedInternships.map(renderProjectCard)}
            </div>
          </div>
        </section>

        <section>
          <div className="rounded-2xl bg-gray-50 dark:bg-[hsl(250,25.3%,16.5%)] border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-end justify-between gap-4 mb-5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Personal Projects and Hackathons</h2>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.map(renderProjectCard)}
            </div>
          </div>
        </section>
        
        {/* Template for adding new entries */}
        {/* 
        Add new entries by updating the arrays near the top of this file:

        1) publications: Publication[]
        2) internships: Project[]
        3) projects: Project[]

        For internships/projects, use the Project shape:
        {
          id: [UNIQUE_ID],
          title: "[PROJECT_TITLE]",
          description: "[PROJECT_DESCRIPTION]",
          image: "[IMAGE_URL]", // Replace with actual image path
          slug: "[PROJECT_SLUG]", // URL-friendly identifier
          hasDetails: true/false, // Does this project have a markdown writeup?
          detailUrl: "[EXTERNAL_DETAIL_URL]", // Optional: external blog/paper link (used when hasDetails is false)
          tags: ["[TAG1]", "[TAG2]", ...],
          awards: [ // Optional
            {
              id: [AWARD_ID],
              icon: "[CLIPART_IMAGE_PATH]", // Path to your clipart image
              name: "[AWARD_NAME]",
              description: "[AWARD_DESCRIPTION]"
            },
            // More awards...
          ],
          liveLink: "[LIVE_DEMO_URL]", // Optional
          githubLink: "[GITHUB_REPO_URL]", // Optional
        }
        */}
      </div>
    </div>
  );
};

export default Portfolio;

// src/pages/About.tsx
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Sample markdown content - you can replace this with your own
const sampleMarkdown = `
## About Me
> To be updated

### My Interests

- Computer Vision
- Machine Learning
- Vision-Language Models
- Diffusion Techniques
- Artificial Intelligence
`;

const About = () => {
  const [markdown] = useState(sampleMarkdown);

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row items-center">
          {/* Profile Picture */}
          <div className="mb-4 md:mb-0 md:mr-8">
            <div className="loading-lazy w-[150px] h-[150px] rounded-full overflow-hidden">
              <img 
                src="/headshot.jpg" 
                alt="Rowan Morse" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">Rowan Morse</h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>rowan.morse16@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>Expected Graduation: April 2027</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Pittsburgh, PA</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://github.com/morse-rowan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[hsl(251,84.6%,74.5%)] dark:hover:bg-[#d97757] hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rowan-morse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-[hsl(251,84.6%,74.5%)] dark:hover:bg-[#d97757] hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Highlights</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong className="text-black dark:text-white">[July 2025]</strong> Following our win at the TartanHacks, AppLovin invited my team and me to their Palo Alto headquarters to present our project, DreamCatcher, to their CTO and engineering team.
            </li>
            <li>
              <strong className="text-black dark:text-white">[June 2025]</strong> I began my internship as an AI/ML Engineer for the AWS Cloud Innovation Center at the University of Pittsburgh's.
            </li>
            <li>
              <strong className="text-black dark:text-white">[February 2025]</strong> My team was awarded 3rd Place ($1,000) at the CMU Perforated AI Hackathon and I co-authored "Exploring the Performance of Perforated Backpropagation".
            </li>
            <li>
              <strong className="text-black dark:text-white">[February 2025]</strong> I began working as a Computer Vision Research Assistant at the University of Pittsburgh, where I engineered a novel data fusion pipeline.
            </li>
            <li>
              <strong className="text-black dark:text-white">[February 2025]</strong> My project, Dream Catcher, won 1st Place for Best Use of Generative AI and 2nd Place for Best Content Creation Hack ($3,000) at the CMU Tartan Hacks Hackathon.
            </li>
            <li>
              <strong className="text-black dark:text-white">[December 2024]</strong> I completed the SafeNet project, engineering a custom CNN for real-time hazard detection that achieved 96.5% recall.
            </li>
          </ul>
        </div>

        {/* Markdown Content */}
        <div className="bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6">
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

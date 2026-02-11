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

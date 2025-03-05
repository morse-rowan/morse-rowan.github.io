// src/pages/About.tsx
import { useState } from 'react';
import {Github, Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Sample markdown content - you can replace this with your own
const sampleMarkdown = `
## About Me
I'm Rowan Morse, a passionate first-year Computer Science & Data Science student at the University of Pittsburgh. I’m deeply committed to exploring computer vision and deep learning—fields that extend far beyond my classroom studies. Whether through independent projects or hands-on research, I thrive on learning and pushing the boundaries of innovative technology.

### My Interests

- Computer Vision
- Machine Learning
- Vision-Language Models
- Diffusion Techniques
- Artificial Intelligence

### My Background

Currently, I serve as a Computer Vision Research Assistant at Pitt, where I work on integrating advanced models with real-world applications. Alongside my academic work, I've pursued personal projects such as SafeNet—a lightweight convolutional neural network designed for UAV navigation in disaster zones—which demonstrates my commitment to applying research to solve practical challenges. I am driven by a desire to contribute to academic research and innovate beyond conventional industry roles.

### What I'm Working On

Right now, I am focused on expanding the capabilities of computer vision systems through research that adapts object understanding and integrates satellite data with vision-language and diffusion models. My projects, like SafeNet, not only showcase my technical skills in TensorFlow and Python but also reflect my ambition to develop robust AI systems for real-time hazard detection and edge deployment. I'm eager to learn from experienced researchers and contribute to groundbreaking work in the field.

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
                <Phone size={16} className="mr-2" />
                <span>(978) 243-7266</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>Graduating: May 2027</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>
                  Boston, MA <br/>
                  Pittsburgh, PA
                </span>
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
                href="https://www.linkedin.com/in/rowan-morse/" 
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

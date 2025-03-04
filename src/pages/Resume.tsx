// src/pages/Resume.tsx
import { useState } from 'react';
import { Download, GraduationCap, BookOpen } from 'lucide-react';

const Resume = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Resume</h1>
          
          <a 
            href="/public/Rowan_Morse_Resume.pdf" 
            download
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              isHovering 
                ? 'bg-[#d97757] text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Download size={16} className="mr-2" />
            Download a Copy
          </a>
        </div>
        
         {/* Education Section */}
         <section className="mb-8 bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <GraduationCap size={24} className="mr-2 text-[hsl(251,84.6%,74.5%)]" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h2>
          </div>
          <div className="pl-8 border-l-2 border-gray-200 dark:border-gray-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                B.S. in Computer Science, Data Science
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                University of Pittsburgh, Pittsburgh, PA
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Expected Graduation: April 2027
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                GPA: 3.73/4.00
                <br />
                Coursework: Data Structures &amp; Algorithms, Discrete Structures, Linear Algebra, Regression, Calculus 2
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8 bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen size={24} className="mr-2 text-[hsl(251,84.6%,74.5%)]" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Experience</h2>
          </div>
          <div className="pl-8 border-l-2 border-gray-200 dark:border-gray-600">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Computer Vision Research Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                University of Pittsburgh, Pittsburgh, PA
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Febuary 2025 – Present
              </p>
              <ul className="list-disc list-outside mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  Adapting object understanding capabilities of vision-language models improving usability around the world.
                </li>
                <li>
                  Engineered pipeline integrating satellite data with vision-language and diffusion models by aligning satellite-derived geographic context with detection frameworks and supplying geological context for diffusion and recognition, improving AI robustness under diverse regional conditions.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Software Engineer &amp; Consultant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Medpath, Pittsburgh, PA
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                January 2025 – Present
              </p>
              <ul className="list-disc list-outside mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  Developed full-stack medical education platform benefiting staff and trainees, leveraging Scrum sprints, Next.js, and TypeScript to streamline knowledge-sharing pipeline and optimize release cycles.
                </li>
                <li>
                  Built backend system powering role-based schemas, APIs, and secure user access, ensuring scalable data architecture using TypeScript, Supabase, and PostgreSQL.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-8 bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen size={24} className="mr-2 text-[hsl(251,84.6%,74.5%)]" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Awards</h2>
          </div>
          <div className="pl-8 border-l-2 border-gray-200 dark:border-gray-600">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                CMU Tartan Hacks Hackathon – Dream Catcher
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pittsburgh, PA | February 2025
              </p>
              <ul className="list-disc list-outside mt-2 text-gray-600 dark:text-gray-300">
                <li>1st – Best Use of Generative AI, 2nd – Best Content Creation Hack ($3,000)</li>
                <li>Won first place among 775 competitors and 176 projects from 37 colleges.</li>
                <li>
                  Developed an innovative pipeline to capture dream images using robust EEG encoding, fine-tuning diffusion model, and CLIP-based alignment.
                </li>
                <li>
                  Integrated a video synthesis module to convert static images into dynamic, TikTok-style videos, and built a user-centric front-end featuring social sharing and a dream journal.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8 bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen size={24} className="mr-2 text-[hsl(251,84.6%,74.5%)]" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Projects</h2>
          </div>
          <div className="pl-8 border-l-2 border-gray-200 dark:border-gray-600">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Botify
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Technologies: Python, Flask, OpenAI API, Spotify API, React, OAuth2, Spotipy, AWS
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                December 2024 – January 2025
              </p>
              <ul className="list-disc list-outside mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  Created an AI-driven music assistant by integrating OpenAI, Spotify, and Spotipy, resulting in personalized playlists and real-time recommendations.
                </li>
                <li>
                  Engineered a function-calling framework by defining structured endpoints for OpenAI, enabling advanced interactions with Spotify’s API.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                SafeNet
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Technologies: Python, TensorFlow, TensorBoard, Google Cloud, Keras, Sklearn
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                October 2024 – December 2024
              </p>
              <ul className="list-disc list-outside mt-2 text-gray-600 dark:text-gray-300">
                <li>
                  Achieved real-time hazard detection by training a CNN on a 2,343-image FloodNet pipeline with 5x data expansion, achieving 96.5% recall and 78.4% F1.
                </li>
                <li>
                  Expanded training data 5x by building a data pipeline with the FloodNet dataset for robust hazard detection.
                </li>
                <li>
                  Optimized model safety with weighted binary cross-entropy loss, reducing false negatives and enhancing recall for drone landing zone detection across various hazards.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-8 bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen size={24} className="mr-2 text-[hsl(251,84.6%,74.5%)]" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h2>
          </div>
          <div className="pl-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Languages</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Java, Python, R, SQL, HTML, CSS, JavaScript, LaTeX, Markdown, TypeScript
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Developer Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Google Cloud Platform, Azure, AWS, Hugging Face, Docker, Git, Supabase
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Libraries/Frameworks</h3>
              <p className="text-gray-600 dark:text-gray-300">
                TensorFlow, PyTorch, JUnit, Keras, Pandas, NumPy, Matplotlib, Flask, scikit-learn, React
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Certifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced Learning Algorithms (Stanford University, Coursera), Convolutional Neural Networks (Stanford University, Coursera), Regression and Classification (Stanford University, Coursera)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;

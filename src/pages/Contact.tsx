import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Get In Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <div className="bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Details</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mt-1 mr-4 text-[hsl(251,84.6%,74.5%)]" size={20} />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Email</p>
                  <a 
                    href="mailto:email@example.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-[hsl(251,84.6%,74.5%)] transition-colors"
                  >
                    rowan.morse16@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mt-1 mr-4 text-[hsl(251,84.6%,74.5%)]" size={20} />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Boston, MA<br />
                    Pittsburgh, PA
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connect Card */}
          <div className="bg-white dark:bg-[hsl(250,25.3%,19.4%)] rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Connect With Me</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/morse-rowan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-[hsl(251,84.6%,74.5%)] dark:hover:bg-[#d97757] hover:text-white transition-colors"
              >
                <Github size={24} className="mr-3" />
                <span className="font-medium">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rowan-morse/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-[hsl(251,84.6%,74.5%)] dark:hover:bg-[#d97757] hover:text-white transition-colors"
              >
                <Linkedin size={24} className="mr-3" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 text-center">
                <span className="font-medium">Preferred contact method:</span> Email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
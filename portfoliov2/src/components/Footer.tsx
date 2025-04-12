
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-navy py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/DavidBatoDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/david-bato-bato-1b6a8b288/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/debb.__.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram size={20} />
            </a>
          </div>
          
          {/* <div className="text-center">
            <div className="font-mono text-tech-teal text-sm mb-2 flex items-center justify-center">
              <div className="h-px w-8 bg-tech-teal/30 mr-4"></div>
              Tech Stack
              <div className="h-px w-8 bg-tech-teal/30 ml-4"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="tech-badge">React</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">lucide-react</span>
            </div>
          </div> */}
          
          <p className="text-tech-slate text-sm">
            &copy; {currentYear} David E. Bato-bato. All rights reserved.
          </p>
          
          <div className="mt-4 font-mono text-xs text-tech-slate/60 flex items-center">
            <span className="mr-2">Designed & Built by David E. bato-bato</span>
            <ExternalLink size={12} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

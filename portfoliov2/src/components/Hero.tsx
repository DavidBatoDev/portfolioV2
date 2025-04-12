'use client';
import { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "Software Developer | AI Engineer | Cloud Enthusiast";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section className="min-h-screen flex items-center bg-grid-pattern bg-grid relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-navy to-background z-[-1]"></div>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="animate-fade-in space-y-5">
          <p className="font-mono text-tech-teal">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-tech-lightest">
            David E. Bato-bato
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tech-light">
            <span className="cursor">{typedText}</span>
          </h2>
          <p className="max-w-md text-tech-slate py-3">
            I am a highly motivated Software and aspiring AI Engineer, with a deep passion for technology and innovation. At 20 years old, my enthusiasm for software development, cloud technologies and artificial intelligence drives me to constantly seek new knowledge and skills, aiming to contribute meaningfully to the tech industry in the future
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-tech-teal hover:text-tech-teal/80">
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Code } from 'lucide-react';
import ProfileImage from '../assets/images/profile-image.jpg'

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-tech-light">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 text-xs font-mono opacity-50">about-me.json</span>
            </div>
            
            <div className="code-block">
              <pre>
                <span className="text-purple-400">const</span> <span className="text-blue-400">aboutDavid</span> <span className="text-white">=</span> <span className="text-yellow-300">{"{"}</span>
                {"\n"}  <span className="text-green-400">"name"</span><span className="text-white">:</span> <span className="text-orange-300">"David Enriquez Bato-bato"</span><span className="text-white">,</span>
                {"\n"}  <span className="text-green-400">"currentRole"</span><span className="text-white">:</span> <span className="text-orange-300">"Software Developer"</span><span className="text-white">,</span>
                {"\n"}  <span className="text-green-400">"education"</span><span className="text-white">:</span> <span className="text-orange-300">"Computer Engineering, PUP Sta. Mesa"</span><span className="text-white">,</span>
                {"\n"}  <span className="text-green-400">"interests"</span><span className="text-white">:</span> <span className="text-yellow-300">[</span>
                {"\n"}    <span className="text-orange-300">"Web/App Development"</span><span className="text-white">,</span>
                {"\n"}    <span className="text-orange-300">"AI Engineering"</span><span className="text-white">,</span>
                {"\n"}    <span className="text-orange-300">"Data Engineering and Devops"</span>
                {"\n"}    <span className="text-orange-300">"Cloud Technologies"</span><span className="text-white">,</span>
                {"\n"}    <span className="text-orange-300">"Internet of Things"</span><span className="text-white">,</span>
                {"\n"}  <span className="text-yellow-300">]</span><span className="text-white">,</span>
                {"\n"}  <span className="text-green-400">"bio"</span><span className="text-white">:</span> <span className="text-orange-300">"Upskill, upskill until it pays off!"</span>
                {"\n"}<span className="text-yellow-300">{"}"}</span><span className="text-white">;</span>
              </pre>
            </div>
            
            <p className="py-4">
              I'm a motivated and self-taught developer with 2 years of experience in software development,
              currently expanding my horizons in AI Engineering and Cloud Technologies and Data Engineering.
            </p>
            
            <p className="py-2">
                As the Software Development Co-Lead for Google Developer Students Club - PUP,
                I'm dedicated to fostering tech communities and sharing knowledge.
            </p>
            
            <p className="py-2">
              When I'm not coding or studying, you can find me exploring new technologies, contributing to open-source projects, and continuously expanding my technical skills to stay at the forefront of innovation.
            </p>
            
            <div className="flex items-center mt-6">
              <Code className="text-tech-teal mr-2" />
              <p className="text-tech-teal font-mono text-sm">Currently building the future, one line of code at a time.</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-tech-teal/30 to-purple-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background rounded-lg ring-1 ring-tech-slate/20 overflow-hidden h-full flex items-center justify-center">
              <div className="bg-tech-navy/80 p-6 text-center">
                <div className="w-64 h-64 mx-auto relative">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-tech-teal/30 flex items-center justify-center rotate-3 animate-pulse">
                    <img
                      src={ProfileImage.src}
                      alt="Profile Image"
                      className="rounded-full w-60 h-60 object-cover"
                      width={240}
                      height={240}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-tech-teal text-tech-navy font-mono text-xs px-2 py-1 rounded">
                    Your Coder!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

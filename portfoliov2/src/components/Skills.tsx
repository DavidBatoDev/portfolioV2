import { Card } from "@/components/ui/card";

// Grouped skill data
const groupedSkills = {
  "Frontend": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML5 Logo",
      label: "HTML5"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS3 Logo",
      label: "CSS3"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS Logo",
      label: "Tailwind"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      alt: "Bootstrap Logo",
      label: "Bootstrap"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript Logo",
      label: "JavaScript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript Logo",
      label: "TypeScript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React Logo",
      label: "React"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "NextJS Logo",
      label: "NextJS"
    },
  ],
  "Backend": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      alt: "Node.js Logo",
      label: "Node.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      alt: "Express Logo",
      label: "Express"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      alt: "Flask Logo",
      label: "Flask"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      alt: "Laravel Logo",
      label: "Laravel"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      alt: "PHP Logo",
      label: "PHP"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python Logo",
      label: "Python"
    },
    // postman
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      alt: "Postman Logo",
      label: "Postman"
    },
    // insomnia
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
      alt: "Insomnia Logo",
      label: "Insomnia"
    },
  ],
  "Database & Cloud": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      alt: "MySQL Logo",
      label: "MySQL"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB Logo",
      label: "MongoDB"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      alt: "Firebase Logo",
      label: "Firebase"
    },
    // Supabase
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      alt: "Supabase Logo",
      label: "Supabase"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      alt: "Google Cloud Logo",
      label: "Google Cloud"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      alt: "Docker Logo",
      label: "Docker"
    },
    // Ubuntu
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
      alt: "Ubuntu Logo",
      label: "Ubuntu"
    },
  ],
  "AI & Data Science": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      alt: "Jupyter Notebook Logo",
      label: "Jupyter Notebook"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      alt: "Pytorch Logo",
      label: "Pytorch"
    },
    // Gemini
    {
      src: "https://brandlogos.net/wp-content/uploads/2024/04/gemini-logo_brandlogos.net_fwajr-512x512.png",
      alt: "Gemini Logo",
      label: "Gemini"
    },
    // Hugging Face
    {
      src: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
      alt: "Hugging Face Logo",
      label: "Hugging Face"
    },
  ],
  "Version Control": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git Logo",
      label: "Git"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "GitHub Logo",
      label: "GitHub"
    },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary/50 dark:bg-secondary/20">
      <div className="container py-20 px-4 mx-auto">
      <h2 className="section-title">Techs</h2>
        
        <div className="space-y-10">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {skills.map((skill) => (
                  <div key={skill.label} className="group">
                    <Card className="p-4 flex flex-col items-center justify-center h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-card/50 backdrop-blur-sm border border-border/50">
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <img 
                          src={skill.src} 
                          alt={skill.alt} 
                          className="w-full h-auto object-contain transition-transform group-hover:scale-110" 
                        />
                      </div>
                      <span className="text-xs text-center font-medium">{skill.label}</span>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

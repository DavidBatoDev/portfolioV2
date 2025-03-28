import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AppsIcon from '@mui/icons-material/Apps';

const skillsData = [
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
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "Python Logo",
    label: "Python"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    alt: "PHP Logo",
    label: "PHP"
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
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker Logo",
    label: "Docker"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    alt: "Google Cloud Logo",
    label: "Google Cloud"
  }
];

export const Skills = () => {
  const [listMode, setListMode] = useState(false);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn relative">
              <h2>Tools & Technologies</h2>
              <p>
                Technologies and stacks I have utilized and am comfortable and familiar working with.
              </p>

              <button onClick={() => setListMode(!listMode)} className="toggle-btn">
                {!listMode ? <AppsIcon /> : <ViewCarouselIcon />}
              </button>
              
              {/* Carousel view */}
              <div className={listMode ? "skill-slider hide" : "skill-slider"}>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme">
                  {skillsData.map((skill, index) => (
                    <div className="item" key={index}>
                      <img src={skill.src} alt={skill.alt} />
                      <h5>{skill.label}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>
              
              {/* List view */}
              <div className={listMode ? "list-skills" : "list-skills hide"}>
                <ul>
                  {skillsData.map((skill, index) => (
                    <li key={index}>
                      <img src={skill.src} alt={skill.alt} />
                      <span>{skill.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

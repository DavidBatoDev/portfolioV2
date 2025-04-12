'use client'
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

import AlertechMobile from "../assets/project-images/AlertechMobile.png";
import AlertechWeb from "../assets/project-images/AlertechWeb.png";
import ArduinoDay from "../assets/project-images/ArduinoDay.png";
import AstralOrbs from "../assets/project-images/AstralOrbs.png";
import CaliforniaEDA from "../assets/project-images/CaliforniaEDA.png";
import DavidsEstate from "../assets/project-images/DavidsEstate.png";
import DSA from "../assets/project-images/DSA.png";
import DSAMario from "../assets/project-images/DSAMario.png";
import Ecommerce from "../assets/project-images/Ecommerce.png";
import ElectriFAIApp from "../assets/project-images/ElectriFAIApp.png";
import ElectrifAIWeb from "../assets/project-images/ElectrifAIWeb.png";
import emailSpamClassifier from "../assets/project-images/emailSpamClassifier.png";
import GDGXSparky from "../assets/project-images/GDGXSparky.png";
import IskoChat from "../assets/project-images/IskoChatAI.png";
import ObjectDetectionCV from "../assets/project-images/ObjectDetectionCV.png";
import PUPPortal from "../assets/project-images/PUPPortal.png";
import ScamApp from "../assets/project-images/ScamApp.png";
import TechnoQuatro from "../assets/project-images/TechnoQuatro.png";
import weChat from "../assets/project-images/weChat.png";

const projects = [
    {
        title: "ElectrifAI Solutions PH Website",
        description: "Corporate site for ElectrifAI showcasing AI-powered electricity solutions. Built with React, TypeScript, and responsive design for all devices.",
        imgUrl: ElectrifAIWeb,
        link: "https://electrifai.tech/",
        technologies: ["React", "TypeScript", "Responsive Design"]
    },
    {
      title: "ElectrifAI Solutions PH Mobile App",
      description: "Mobile app for tracking electricity usage, built with React Native and Supabase. Features real-time sync and user-friendly analytics dashboard.",
      imgUrl: ElectriFAIApp,
      link: "",
      technologies: ["React Native", "Supabase", "Electricity Consumption Management", "Groq API", "ESP32"]
    },
    {
        title: "PUP Alumni Portal For Graduates (PUPGS)",
        description: "An alumni portal built with React and Laravel that handles graduate Profiles Data, Events, Discussions, Surveys, and real-time alerts via WebSockets.",
        imgUrl: PUPPortal,
        link: "https://github.com/DavidBatoDev/pup_alumni_portal",
        technologies: ["React", "PHP", "Laravel", "MySQL", "WebSockets", "GoDaddy"]
    },
    {
        title: "Arduino Day PH 2025 Website",
        description: "Official Arduino Day PH 2025 site built with NextJS and TypeScript. Features event registration, dynamic program flow, and smooth animations",
        imgUrl: ArduinoDay,
      link: "https://github.com/DavidBatoDev/arduino-ph-2025",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "ShadCN"]
    },
    {
      title: "IskoChatAI",
      description: "A scholarship Filipino Chatbot leveraging Retrieval-Augmented Generation (RAG) using Google's Custom Search API. Built with NextJS and Gemini API to deliver real-time, accurate answers based on live web content.",
      imgUrl: IskoChat,
      link: "https://github.com/DavidBatoDev/iskochatai",
      technologies: ["NextJS", "TypeScript", "Gemini API", "TailwindCSS"]
    },
    {
      title: "Alertech Smart Fire Alert System (Mobile App)",
      description: "React Native app for real-time fire alerts using Firebase and ESP32 integration. Push notifications enabled via FCM (Firebase) for instant emergency updates in both foreground and background.",
      imgUrl: AlertechMobile,
      link: "https://github.com/DavidBatoDev/alertech-mobile-app",
      technologies: ["React Native", "Firebase", "FCM", "ESP32", "IoT"]
    },
    {
      title: "Alertech Smart Fire Alert System (Website)",
      description: "Web dashboard for Fire Authority for live fire sensor monitoring and IoT device management. Built with React and Firebase for real-time data sync and remote configuration.",
      imgUrl: AlertechWeb,
      link: "https://github.com/geraldsberongoy/Arduino-Hackathon-Web",
      technologies: ["React", "Firebase", "Realtime Database", "IoT Integration"]
    },
    {
      title: "We Chat Application AI (Chat Application)",
      description: "Real-time MERN chat app with integrated sentiment analysis to detect emotional tone. Includes user authentication and live messaging using Socket.io.",
      imgUrl: weChat,
      link: "https://github.com/DavidBatoDev/chat-app-sentimentAI",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Sentiment Analysis AI", "Firebase Storage"]
    },
    {
      title: "Astral Orbs Visualizer",
      description: "Two LED Orbs that lights up in sync even when separated by distance. Built with ESP32 and Firebase for real-time data sync and control.",
      imgUrl: AstralOrbs,
      link: "",
      technologies: ["C++", "ESP32", "FirebaseClient", "IoT"]
    },
    {
      title: "California EDA",
      description: "An exploratory data analysis project focusing on California's housing market. It utilizes Python libraries for data manipulation and visualization, providing insights into trends and patterns of the price.",
      imgUrl: CaliforniaEDA,
      link: "",
      technologies: ["Python", "Pytorch", "Matplotlib", "Pandas"]
    },
    {
      title: "David's Estate",
      description: "A real estate portal showcasing property listings with advanced search and filtering. This project emphasizes a clean UI and robust database integration.",
      imgUrl: DavidsEstate,
      link: "",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Data Structures & Algorithms (DSA) Hub",
      description: "An educational platform focusing on data structures and algorithm Visualizer. Built using React D3.js for interactive visualizations, enhancing learning through engaging graphics.",
      imgUrl: DSA,
      link: "",
      technologies: ["React", "Educational Tech", "Algorithms"]
    },
    {
      title: "DSA Mario Theme",
      description: "A gamified Data Structure Algorithm Visualizer in Mario Theme using React and D3.js. It provides an interactive way to learn algorithms through a fun and engaging interface.",
      imgUrl: DSAMario,
      link: "",
      technologies: ["React", "Game Development", "Algorithms"]
    },
    {
      title: "Ecommerce Platform",
      description: "A full-featured eCommerce platform with product listings, shopping cart, and secure checkout process. It features dynamic product displays and user authentication.",
      imgUrl: Ecommerce,
      link: "",
      technologies: ["React", "Node.js", "MySql", "Express"]
    },
    {
      title: "Email Spam Classifier",
      description: "A machine learning project that classifies emails as spam or not using natural language processing techniques and a robust training dataset.",
      imgUrl: emailSpamClassifier,
      link: "",
      technologies: ["Python", "Pytorch", "NLP"]
    },
    {
      title: "GDGXSparky Points Tracker",
      description: "A webserver that automates Students participations of workshops in Google Developer Clubs - PUP Web Department.",
      imgUrl: GDGXSparky,
      link: "",
      technologies: ["React", "Flask API", "Python", "Google Sheets", "Google Calssrom"]
    },
    {
      title: "Object Detection with CV",
      description: "A computer vision project that implements object detection using state-of-the-art algorithms. Ideal for monitoring and security applications.",
      imgUrl: ObjectDetectionCV,
      link: "",
      technologies: ["Python", "OpenCV", "Pre-trained Models"]
    },
    {
      title: "Student Curricular Activity Manager",
      description: "All-in-one desktop productivity app featuring real-time collaborative note sharing via Socket.io, flashcards, and task tracking. Built using Tkinter for the interface, Flask for backend, and SQLite for data storage—developed to fulfill an OOP project requirement.",
      imgUrl: ScamApp,
      link: "",
      technologies: ["Tkinter", "Flask", "SQLite", "Socket.io"]
    },
    {
      title: "Techno Quatro",
      description: "A Information webiste project offering innovative software solutions. It features a sleek design and modern web technologies to streamline business operations.",
      imgUrl: TechnoQuatro,
      link: "",
      technologies: ["React", "Tailwind", "Materials UI", "Firebase"]
    }
  ];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setProjectsPerPage(window.innerWidth >= 1280 ? 6 : 4);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-small-white/[0.1] dark:bg-grid-small-white/[0.03] bg-repeat z-0"></div>
      <div className="container px-4 mx-auto relative z-10">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.imgUrl.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors transform hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.link && project.link.startsWith("http") && !project.link.includes("github.com") && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors transform hover:scale-110"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-tech-light bg-accent/10 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-primary/10  text-tech-light text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Page {currentPage + 1} of {totalPages}
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="group"
            >
              <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" /> Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="group"
            >
              Next <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

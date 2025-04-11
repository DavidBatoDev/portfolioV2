'use client'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "We Chat Application AI (Chat Application)",
    description: "A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) that incorporates sentiment analysis AI to analyze the emotional tone of chat messages. The app features user authentication, real-time messaging with Socket.io, and provides sentiment feedback to improve communication.",
    imgUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000",
    link: "https://github.com/DavidBatoDev/chat-app-sentimentAI",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Sentiment Analysis"]
  },
  {
    title: "PUP Alumni Portal For Graduates (PUPGS)",
    description: "A comprehensive portal for PUP alumni graduates built with React frontend and Laravel backend. The system manages alumni profiles, job opportunities, event registrations, and community engagement with features like real-time notifications via WebSockets and secure document management using MySQL for data persistence.",
    imgUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000",
    link: "https://github.com/DavidBatoDev/pup_alumni_portal",
    technologies: ["React", "Laravel", "MySQL", "WebSockets"]
  },
  {
    title: "Arduino Day PH 2025 Website",
    description: "The official website for Arduino Day Philippines 2025 developed using NextJS with TypeScript. The site features dynamic event information, registration capabilities, showcase of past events, and smooth animations using Framer Motion to create an engaging user experience for Arduino enthusiasts and event participants.",
    imgUrl: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1000",
    link: "https://github.com/DavidBatoDev/arduino-ph-2025",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "IskoChatAI",
    description: "A specialized chatbot built with NextJS and TypeScript that leverages Google's Gemini API to provide accurate and helpful information about scholarship opportunities in the Philippines. The application helps students navigate available scholarships, application requirements, and deadlines through a natural language interface.",
    imgUrl: "https://images.unsplash.com/photo-1607746747627-8f2311dfa22f?q=80&w=1000",
    link: "https://github.com/DavidBatoDev/iskochatai",
    technologies: ["NextJS", "TypeScript", "Gemini API", "TailwindCSS"]
  },
  {
    title: "Alertech Smart Fire Alert System (Mobile App)",
    description: "A React Native mobile application that provides real-time fire alerts and monitoring. Connected to a Firebase backend with Firebase Cloud Messaging for notifications, the app interfaces with ESP32 microcontrollers to detect fire incidents and alert users immediately, potentially saving lives and property through early detection.",
    imgUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1000",
    link: "https://github.com/DavidBatoDev/alertech-mobile-app",
    technologies: ["React Native", "Firebase", "FCM", "ESP32", "IoT"]
  },
  {
    title: "Alertech Smart Fire Alert System (Website)",
    description: "A React web application providing real-time monitoring and management interface for the Alertech fire alert system. The website displays fire sensor data, alert history, and system status through an intuitive dashboard. Administrators can configure alert thresholds and manage connected IoT devices remotely.",
    imgUrl: "https://images.unsplash.com/photo-1586765677067-f8659977647b?q=80&w=1000",
    link: "https://github.com/geraldsberongoy/Arduino-Hackathon-Web",
    technologies: ["React", "Firebase", "Realtime Database", "IoT Integration"]
  },
  {
    title: "ElectrifAI Solutions PH Website",
    description: "A corporate website built with React TypeScript for ElectrifAI Solutions PH. The site showcases the company's services in electricity management and AI solutions with modern design, responsive layouts, and optimized performance. Features include service listings, team profiles, and contact information integration.",
    imgUrl: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1000",
    link: "https://electrifai.tech/",
    technologies: ["React", "TypeScript", "Responsive Design"]
  },
  {
    title: "ElectrifAI Solutions PH Mobile App",
    description: "A React Native application with Supabase integration designed to help users manage electricity consumption details. The app enables users to track usage patterns, set usage alerts, receive optimization suggestions, and manage payment information through a streamlined mobile interface with real-time data synchronization.",
    imgUrl: "https://images.unsplash.com/photo-1662024929226-8fd51f196fd5?q=80&w=1000",
    link: "",
    technologies: ["React Native", "Supabase", "Electricity Consumption Management"]
  },
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = window.innerWidth >= 1280 ? 6 : 4; // Display 6 on large screens, 4 on smaller
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
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
                  src={project.imgUrl}
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
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-primary/10 text-primary-foreground text-xs rounded-full">
                      +{project.technologies.length - 3} more
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
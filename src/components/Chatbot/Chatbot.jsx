import React, { useState, useRef, useEffect, useCallback  } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageSquare, Send, X, Paperclip, Smile } from "lucide-react";
import "./Chatbot.css";


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

// Concise system prompt to fit within Gemini's limits
const DAVID_RESUME_INFO = `
David E. Bato-bato is a motivated software developer with 2 years of experience.

Contact: (+63) 9944345742, batobatodavid20@gmail.com
Profiles: GitHub, LinkedIn, Portfolio

Education: 
BS Computer Engineering at Polytechnic University of the Philippines (2023-Present)
Achievements: President Lister, CHED Merit Scholar, Part of College of Engineering Student Council

Experience:
- Software Developer at ElectrifAI (Oct 2024-Present): Developed a web/mobile app for monitoring electricity consumption using React, TypeScript, React Native, and IoT with ESP32.
- Software Development Co-Lead at Google Developer Students Club (Sep 2024-Present): Led web department, created website/backend, mentored 300+ students.
- Full-Stack Developer at PUP ICTO (Aug 2024-Feb 2025): Built PUP alumni portal with PHP, Laravel, MySQL.

Skills: HTML, CSS, JavaScript, TypeScript, Python, PHP, C++, React, Node, Express, Flask, Laravel, NextJS, Firebase, MySQL, MongoDB, Supabase, Docker, PyTorch, Google Cloud, Git/GitHub

Projects:
- Alertech Technologies: Fire detection system with IoT using React Native, Firebase, ESP32 with sensors
- Chat Application with Sentiment Analysis: MERN stack app with real-time messaging and AI emotion detection
- GDG XParky Points Backend: Flask API with Google Cloud integration
- Arduino Day PH 2025 Website: NextJS, TypeScript, Vercel
- We Chat Application: MERN stack, Socket.io for real-time chat functionality
- PUP Alumni Portal For Graduates (PUPGS): React, PHP Laravel, MySQL, Websocket
- ElectrifAI Solutions PH Website: React TypeScript
- ElectrifAI Solutions PH Mobile App: React Native, Supabase
- Real-estate Website (DavidEstate): React, Express, MongoDB, JWT, Redux
- Blog Website (Technoquatro): React, Firebase
- E-commerce Website (Ecom): MySQL, Express, React, Node.js
- Student Curicullar Activity Manager (SCAM): Tkinter, Flask, SQLAlchemy, Websocket
- Email Spam Classifier: PyTorch, MLP, Flask API
- California Housing Price Prediction EDA: Python, Pandas, NumPy, Matplotlib, Seaborn
- Object Detection (OpenCV): OpenCV with existing model
- Data Structure Algorithm Visualizer: React, Framer for animations
- Data Structure Algorithm Visualizer (Mario Theme): React, Framer
- Constellation Orb ESP32 Firebase: ESP32 Arduino IoT, Firebase Real-time Database

Certifications: AWS Cloud Practitioner, Generative AI with LLMs (DeepLearning.AI), Python Programmer Bootcamp

Availability: I'm always available for new opportunities and discussions.
`;

// Project repository links
const PROJECT_LINKS = {
  "we chat": "https://github.com/DavidBatoDev/chat-application-mongodb",
  "chat application": "https://github.com/DavidBatoDev/chat-application-mongodb",
  "pup alumni": "https://github.com/DavidBatoDev/pup_alumni_portal",
  "pupgs": "https://github.com/DavidBatoDev/pup_alumni_portal",
  "arduino day": "https://github.com/DavidBatoDev/arduino-ph-2025",
  "alertech mobile": "https://github.com/DavidBatoDev/alertech-mobile-app",
  "alertech web": "https://github.com/geraldsberongoy/Arduino-Hackathon-Web",
  "electrifai website": "https://electrifai.tech/",
  "gdg xparky": "https://github.com/DavidBatoDev/gdg-web-development-classroom-api",
  "real-estate": "https://github.com/DavidBatoDev/real-estate-mongodb",
  "davidestate": "https://github.com/DavidBatoDev/real-estate-mongodb",
  "blog": "https://github.com/DavidBatoDev/technoquatro-firebase",
  "technoquatro": "https://github.com/DavidBatoDev/technoquatro-firebase",
  "e-commerce": "https://github.com/DavidBatoDev/ecommerce-mysql",
  "ecom": "https://github.com/DavidBatoDev/ecommerce-mysql",
  "scam": "https://github.com/DavidBatoDev/oop-scam-app",
  "student curicullar": "https://github.com/DavidBatoDev/oop-scam-app",
  "email spam": "https://github.com/DavidBatoDev/email_spam_classifier_pytorch",
  "california housing": "https://github.com/DavidBatoDev/house-price-prediction-pytorch",
  "object detection": "https://github.com/DavidBatoDev/object-detection-opencv",
  "data structure": "https://github.com/DavidBatoDev/data-structure-algo-visualization",
  "mario theme": "https://github.com/DavidBatoDev/data-structure-algo-mario-theme",
  "constellation orb": "https://github.com/DavidBatoDev/orblink-esp32-firebase"
};

// Structured data for detailed information
const DAVID_RESUME = {
  personal: {
    name: "David E. Bato-bato",
    contact: "(+63) 9944345742",
    email: "batobatodavid20@gmail.com",
    profiles: "GitHub, LinkedIn, Portfolio"
  },
  education: {
    institution: "Polytechnic University of the Philippines - Sta. Mesa, Manila",
    program: "Bachelor of Science in Computer Engineering",
    duration: "August 2023-Present",
    achievements: [
      "Consistent President Lister",
      "Awarded and currently holding Ched Merit Scholarship – HSSP",
      "Part of College of Engineering Student Council Special Projects and Academic Affairs A.Y. 2023-2024"
    ]
  },
  experience: [
    {
      title: "Software Developer | CCDO",
      company: "ElectrifAI- Manila, National Capital Region",
      duration: "October 2024–Present",
      responsibilities: [
        "Developed a comprehensive web and mobile application for monitoring household electricity consumption in real-time",
        "Built web app using React and TypeScript, mobile app with React Native",
        "Connected app with IoT device (ESP32) to collect kWh data from household electrical systems",
        "Implemented real-time data updates to Supabase database"
      ]
    },
    {
      title: "Software Development Co-Lead",
      organization: "Google Developer Students Club, Polytechnic University of the Philippines",
      duration: "September 2024–Present",
      responsibilities: [
        "Led web department in implementing web technologies",
        "Created organization's primary website and backend to automate tasks",
        "Mentored 300+ students in software development",
        "Facilitated discussions and fostered collaboration among students"
      ]
    },
    {
      title: "Full-Stack Developer",
      organization: "PUP ICTO- Sta. Mesa, Manila",
      duration: "August 2024–February 2025",
      responsibilities: [
        "Developed custom-built PUP alumni portal web application",
        "Worked on design and backend infrastructure",
        "Used PHP, Laravel, MySQL, and GoDaddy CI/CD Pipelines"
      ]
    }
  ],
  skills: {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "PHP", "C++"],
    frameworks: ["React", "Vite", "Tailwind", "Bootstrap", "Node", "Express", "Flask", "Laravel", "NextJS", "Firebase", "Materials UI", "SqlAlchemy", "Eloquent ORM", "Web Sockets", "Socket.IO"],
    databases: ["SQL", "NoSQL", "MySQL", "SQLite3", "Supabase", "MongoDB", "Firestore"],
    other: ["Docker", "PyTorch", "Google Cloud"],
    versionControl: ["Git", "GitHub"]
  },
  projects: [
    {
      name: "Alertech Technologies",
      technologies: "React Native CLI, React, Firebase, ESP32 with DHT22 & MQ-2 Sensors",
      description: [
        "Integrated fire detection and alert system (mobile app, web dashboard, IoT device)",
        "Engineered IoT firmware on ESP32 for environmental monitoring",
        "Implemented mobile alerts via Firebase Cloud Messaging",
        "Created responsive web dashboard for real-time monitoring",
        "Developed Bayanihan (Neighbor Alert System) feature for community safety"
      ]
    },
    {
      name: "Chat Application with Sentiment Analysis AI",
      technologies: "MongoDB, Express, React, Node.js, Socket.io, Firebase, Hugging Face Transformers",
      description: [
        "Full-featured chat app with real-time messaging, user authentication, group chats",
        "Integrated sentiment analysis using pretrained transformer model",
        "Implemented image uploads and JWT authentication",
        "Used WebSockets for real-time updates",
        "Added emotion-based message styling"
      ]
    },
    {
      name: "GDG X GDG XParky Points Backend",
      technologies: "Python Flask, Google Cloud (Classroom, Sheets)",
      description: [
        "RESTful API to automate student participation points tracking",
        "Integrated Google Classroom API for real-time class data",
        "Used Google Sheets as dynamic database",
        "Automated activity logging system"
      ]
    },
    {
      name: "Arduino Day PH 2025 Website",
      technologies: "NextJS TypeScript, React Libraries, Vercel",
      description: [
        "Contributed to official Arduino Day PH 2025 website",
        "Assisted in website deployment to Arduino Philippines site"
      ]
    }
  ],
  certifications: [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      date: "March 2025",
      description: "Fundamentals of AWS cloud computing, architecture, and services"
    },
    {
      name: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "March 2025",
      description: "LLM development, optimization, fine-tuning, reinforcement learning, AI applications"
    },
    {
      name: "Python Programmer Bootcamp",
      issuer: "365 Data Science",
      description: "Python fundamentals to advanced concepts, including NumPy, Pandas, and Matplotlib"
    }
  ]
};

// Check if query is asking about a specific project to provide repository link
const checkForProjectLink = (query) => {
  query = query.toLowerCase();
  
  for (const [keyword, link] of Object.entries(PROJECT_LINKS)) {
    if (query.includes(keyword)) {
      return `Here's the link to that project: ${link}`;
    }
  }
  
  return null;
};

// Helper function to get additional details based on query
const getAdditionalDetails = (query) => {
  query = query.toLowerCase();
  let details = "";
  
  // Check for project link first
  const projectLink = checkForProjectLink(query);
  if (projectLink) {
    return projectLink;
  }
  
  if (query.includes("project") || query.includes("alertech") || query.includes("arduino") || query.includes("fire") || query.includes("chat")) {
    const relevantProjects = DAVID_RESUME.projects.filter(p => 
      query.includes(p.name.toLowerCase()) || 
      p.technologies.toLowerCase().split(", ").some(tech => query.includes(tech.toLowerCase()))
    );
    
    if (relevantProjects.length > 0) {
      details += "\n\nProject details:";
      relevantProjects.forEach(project => {
        details += `\n${project.name} (${project.technologies}):\n- ${project.description.join("\n- ")}`;
      });
    } else {
      details += "\n\nProjects overview:";
      DAVID_RESUME.projects.forEach(project => {
        details += `\n- ${project.name}: ${project.description[0]}`;
      });
    }
  }
  
  if (query.includes("experience") || query.includes("work") || query.includes("job") || query.includes("electrif") || query.includes("gdsc") || query.includes("pup")) {
    const relevantExperience = DAVID_RESUME.experience.filter(e => 
      (e.company && query.includes(e.company.toLowerCase())) || 
      (e.organization && query.includes(e.organization.toLowerCase())) ||
      query.includes(e.title.toLowerCase())
    );
    
    if (relevantExperience.length > 0) {
      details += "\n\nExperience details:";
      relevantExperience.forEach(exp => {
        details += `\n${exp.title} at ${exp.company || exp.organization} (${exp.duration}):\n- ${exp.responsibilities.join("\n- ")}`;
      });
    }
  }
  
  if (query.includes("skill") || query.includes("technology") || query.includes("language") || query.includes("framework")) {
    details += "\n\nSkills breakdown:";
    details += `\n- Languages: ${DAVID_RESUME.skills.languages.join(", ")}`;
    details += `\n- Frameworks/Libraries: ${DAVID_RESUME.skills.frameworks.join(", ")}`;
    details += `\n- Databases: ${DAVID_RESUME.skills.databases.join(", ")}`;
    details += `\n- Other technologies: ${DAVID_RESUME.skills.other.join(", ")}`;
  }
  
  if (query.includes("available") || query.includes("hire") || query.includes("contact") || query.includes("reach")) {
    details += "\n\nDavid is always available for new opportunities and discussions. You can reach him at batobatodavid20@gmail.com or (+63) 9944345742.";
  }
  
  return details;
};

export const Chatbot = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  


  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const [conversationHistory, setConversationHistory] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea as content grows
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = 
        Math.min(textareaRef.current.scrollHeight, 100) + "px";
    }
  }, [input]);

    // Function to check if device is mobile
    const checkMobile = useCallback(() => {
      setIsMobile(window.innerWidth <= 768);
      setViewportHeight(window.innerHeight);
    }, []);
  
     // Add this useEffect to handle screen resize
     useEffect(() => {
      // Initial check
      checkMobile();
      
      // Add event listener
      window.addEventListener('resize', checkMobile);
      
      // Clean up
      return () => window.removeEventListener('resize', checkMobile);
    }, [checkMobile]);
  
    // Improve the auto-resize function for textarea
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        const maxHeight = isMobile ? 80 : 100; // Lower max height on mobile
        textareaRef.current.style.height = 
          Math.min(textareaRef.current.scrollHeight, maxHeight) + "px";
      }
    }, [input, isMobile]);

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input, time: formatTime() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      // Check for specific project link first
      const projectLink = checkForProjectLink(input);
      
      if (projectLink) {
        // If it's a project query, respond with the link
        setMessages(prev => [
          ...prev, 
          { 
            type: "bot", 
            text: projectLink, 
            time: formatTime() 
          }
        ]);
      } else {
        // Get additional details relevant to the query
        const additionalDetails = getAdditionalDetails(input);
        
        // Create the context for this interaction
        const contextMessage = `You are David's assistant. Answer as if you're representing David based on his resume information. 
        If you don't know the answer, tell them to contact David directly at batobatodavid20@gmail.com.
        If they ask about availability, emphasize that David is always free and provide his contact information.
        ${DAVID_RESUME_INFO}${additionalDetails}`;
        
        // Update conversation history for context
        const updatedHistory = [
          ...conversationHistory,
          { role: "user", parts: [{ text: input }] }
        ];
        setConversationHistory(updatedHistory);
        
        // Initialize the model
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        
        // Generate content with proper formatting for Gemini API
        const result = await model.generateContent({
          contents: [{ role: "user", parts: [{ text: contextMessage + "\n\nUser question: " + input }] }]
        });
        
        const response = await result.response;
        const text = response.text();

        // Update messages state with the response
        setMessages(prev => [
          ...prev, 
          { type: "bot", text, time: formatTime() }
        ]);
        
        // Update conversation history with the response
        setConversationHistory([
          ...updatedHistory,
          { role: "model", parts: [{ text }] }
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [
        ...prev, 
        { 
          type: "bot", 
          text: "Sorry, I encountered an error. Please contact David directly at batobatodavid20@gmail.com.", 
          time: formatTime() 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageText = (text) => {
    return text.split('\n').map((line, i) => (
      <p key={i}>{line || <br />}</p>
    ));
  };

    // Function to handle fullscreen in mobile
    const handleChatToggle = () => {
      setIsOpen(true);
      
      // For mobile devices, make sure keyboard doesn't push content up
      if (isMobile) {
        document.body.style.overflow = 'hidden';
        
        // For iOS, ensure viewport adjusts properly
        if (/iPhone|iPad|iPod/.test(navigator.platform)) {
          document.documentElement.style.height = '100%';
          document.body.style.height = '100%';
        }
      }
    };
  
    // Function to handle closing chat on mobile
    const handleCloseChat = () => {
      setIsOpen(false);
      
      // Reset body styles
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
    };

  return (
    <>
      {!isOpen && (
        <button 
          className="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div 
        className={`chatbot-container ${isMobile ? 'mobile-view' : ''}`}
        style={isMobile ? {height: `${viewportHeight}px`} : {}}
        >
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <div className="avatar-img">D</div>
                <div className="online-indicator"></div>
              </div>
              <div className="chatbot-info">
                <h3>David AI Assistant</h3>
                <span className="status">Online</span>
              </div>
            </div>
            <button className="close-button" onClick={handleCloseChat}>
            <X size={18} />
          </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="welcome-message">
                <div className="welcome-avatar">
                  <div className="welcome-img">D</div>
                </div>
                <div className="welcome-text">
                  <h3>Hi, I'm David's Assistant</h3>
                  <p>👋 Hello! I can tell you about David's skills, experience, projects, and qualifications. How can I help you today?</p>
                </div>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.type === "bot" && (
                  <div className="message-avatar">
                    <div className="avatar-img">D</div>
                  </div>
                )}
                <div className="message-content">
                  <div className={`message-bubble ${msg.type}`}>
                    {formatMessageText(msg.text)}
                  </div>
                  <div className="message-info">
                    <span className="message-time">{msg.time}</span>
                    {msg.type === "user" && (
                      <span className="message-status">✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message bot">
                <div className="message-avatar">
                  <div className="avatar-img">D</div>
                </div>
                <div className="message-content">
                  <div className="message-bubble bot typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-footer">
            <div className="chatbot-input-wrapper">
              <button className="attachment-button">
                <Paperclip size={18} />
              </button>
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about David's experience, projects, or skills..."
                rows="1"
              />
              <button className="emoji-button">
                <Smile size={18} />
              </button>
            </div>
            <button 
              className="send-button"
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
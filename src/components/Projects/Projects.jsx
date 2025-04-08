import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/proj1.png";
import projImg2 from "../../assets/img/proj2.png";
import projImg3 from "../../assets/img/proj3.png";
import projImg4 from "../../assets/img/proj4.png";
import projImg5 from "../../assets/img/proj5.png";
import projImg6 from "../../assets/img/proj6.png";
import projImg7 from "../../assets/img/proj7.png";
import projImg8 from "../../assets/img/proj8.png";
import projImg9 from "../../assets/img/proj9.png";
import projImg10 from "../../assets/img/proj10.png";
import projImg11 from "../../assets/img/proj11.png";
import projImg12 from "../../assets/img/proj12.png";
import projImg13 from "../../assets/img/proj13.png";
import projImg14 from "../../assets/img/proj14.png";
import projImg15 from "../../assets/img/proj15.png";
import projImg16 from "../../assets/img/proj16.png";
import projImg17 from "../../assets/img/proj17.png";
import projImg18 from "../../assets/img/proj18.png";
import projImg19 from "../../assets/img/proj19.png";
import projImg20 from "../../assets/img/proj20.png";
import './Projects.css';

export const Projects = () => {

  const projects = [
    {
      title: "We Chat Application AI (Chat Application)",
      description: "MERN stack app with real-time chat and sentiment analysis AI for chat messages.",
      imgUrl: projImg1,
      link: "https://github.com/DavidBatoDev/chat-app-sentimentAI",
    },
    {
      title: "PUP Alumni Portal For Graduates (PUPGS)",
      description: "React frontend, Laravel backend, MySQL, and WebSocket notifications. For PUP Alumni Graduates.",
      imgUrl: projImg7,
      link: "https://github.com/DavidBatoDev/pup_alumni_portal"
    },
    {
      title: "Arduino Day PH 2025 Website",
      description: "Official ArduionoPH 2025 Website built using NextJS site with TailwindCSS and animations.",
      imgUrl: projImg16,
      link: "https://github.com/DavidBatoDev/arduino-ph-2025"
    },
    {
      title: "IskoChatAI",
      description: "NextJS Typescript chatbot with Gemini API LLM for Philippines scholarship oppurtunities.",
      imgUrl: projImg20,
      link: "https://github.com/DavidBatoDev/iskochatai"
    },
    {
      title: "Alertech Smart Fire Alert System (Mobile App)",
      description: "React Native app with Firebase backend and FCM, and ESP32 for fire alerts.",
      imgUrl: projImg19,
      link: "https://github.com/DavidBatoDev/alertech-mobile-app"
    },
    {
      title: "Alertech Smart Fire Alert System (Website)",
      description: "React web app for real-time fire monitoring with IoT.",
      imgUrl: projImg18,
      link: "https://github.com/geraldsberongoy/Arduino-Hackathon-Web"
    },
    {
      title: "ElectrifAI Solutions PH Website",
      description: "React TypeScript company Info website.",
      imgUrl: projImg6,
      link: "https://electrifai.tech/"
    },
    {
      title: "ElectrifAI Solutions PH Mobile App",
      description: "React Native app with Supabase integration to manage electricity user details and electricity consumption.",
      imgUrl: projImg8,
      link: ""
    },
    {
      title: "GDG XParky Points API",
      description: "Flask API with Google Classroom and Sheets integration to track 200+ students participation and experience points.",
      imgUrl: projImg9,
      link: "https://github.com/DavidBatoDev/gdg-web-development-classroom-api"
    },
    {
      title: "Real-estate Website (DavidEstate)",
      description: "React, Express, MongoDB, JWT, and Redux for managing a mock up real estate website.",
      imgUrl: projImg2,
      link: "https://github.com/DavidBatoDev/real-estate-mongodb"
    },
    {
      title: "Blog Website (Technoquatro)",
      description: "React app with Firebase for storage and authentication for the Technoquatro students.",
      imgUrl: projImg3,
      link: "https://github.com/DavidBatoDev/technoquatro-firebase"
    },
    {
      title: "E-commerce Website (Ecom)",
      description: "MySQL, Express, React, and Node.js for a mock up e-commerce website.",
      imgUrl: projImg4,
      link: "https://github.com/DavidBatoDev/ecommerce-mysql"
    },
    {
      title: "Student Curricular Activity Manager (SCAM)",
      description: "Tkinter, Flask, and SQLAlchemy for real-time notes. An all in 1 productivity and collaboration app.",
      imgUrl: projImg5,
      link: "https://github.com/DavidBatoDev/oop-scam-app"
    },
    {
      title: "Email Spam Classifier Pytorch",
      description: "MLP-based spam classifier built from scratch with Flask API. To detect email spams.",
      imgUrl: projImg10,
      link: "https://github.com/DavidBatoDev/email_spam_classifier_pytorch"
    },
    {
      title: "California Housing Price Prediction EDA",
      description: "Python EDA with Pandas, NumPy, and Matplotlib for california housing datasets.",
      imgUrl: projImg12,
      link: "https://github.com/DavidBatoDev/house-price-prediction-pytorch"
    },
    {
      title: "Object Detection (OpenCV)",
      description: "Object detection using OpenCV and pretrained models that detects 100+ objects real time.",
      imgUrl: projImg11,
      link: "https://github.com/DavidBatoDev/object-detection-opencv"
    },
    {
      title: "Data Structure and Algorithm Visualizer",
      description: "React app with Framer animations for basic Data Strcuture and algorithm visualization.",
      imgUrl: projImg13,
      link: "https://github.com/DavidBatoDev/data-structure-algo-visualization"
    },
    {
      title: "Data Structure and Algorithm Visualizer (Mario Theme)",
      description: "Mario-themed React app with Framer animations for basic Data Strcuture and algorithm visualization.",
      imgUrl: projImg14,
      link: "https://github.com/DavidBatoDev/data-structure-algo-mario-theme"
    },
    {
      title: "Constellation Orb ESP32 Firebase",
      description: "ESP32 IoT with Firebase real-time database that connects two orbs even from afar. Perfect for long distance couples.",
      imgUrl: projImg15,
      link: "https://github.com/DavidBatoDev/orblink-esp32-firebase"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="projects-section">
              <h2>Projects</h2>
              <p>
                I've gained hands-on experience in full stack web development and other fields in tech, working on various projects that showcase my skills across the entire development spectrum. To explore more of my work, feel free to visit my GitHub: <a href="https://github.com/DavidBatoDev?tab=repositories">DavidBatoDev</a>, 
                where you can see a range of projects I've contributed to and developed.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="section">
                    <p>Frontend projects will be listed here.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Backend projects will be listed here.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

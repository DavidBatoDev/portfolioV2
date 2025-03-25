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
import './Projects.css';

export const Projects = () => {

  const projects = [
    
    {
      title: "We Chat Application (Chat Application)",
      description: "Built using MERN stack, uses Socket.io for real-time chat functionality",
      imgUrl: projImg1,
      link: "https://github.com/DavidBatoDev/chat-application-mongodb"
    },
    {
      title: "PUP Alumni Portal For Graduates (PUPGS)",
      description: "Built using React as a Frontend, Uses PHP Laravel, MySql for Database, Websocket for real-time notification",
      imgUrl: projImg7,
      link: "https://github.com/DavidBatoDev/pup_alumni_portal"
    },
    {
      title: "Arduino Day PH 2025 Website",
      description: "Built using NextJS for client and server side rendering and uses tailwindcss and shadcn for styling and animations",
      imgUrl: projImg16,
      link: "https://github.com/DavidBatoDev/arduino-ph-2025"
    },
    {
      title: "Alertech Smart Fire Alert System (Mobile App)",
      description: "Developed a Smart Fire Alert System mobile app using React Native, Firebase FCM, Firestore, and ESP32 Arduino for real-time fire detection and alerts.",
      imgUrl: projImg19,
      link: "https://github.com/DavidBatoDev/alertech-mobile-app"
    },
    {
      title: "Alertech Smart Fire Alert System (Website)",
      description: "Created a companion web app for Fire Authorithy for the Smart Fire Alert System using React and Firebase Firestore, providing real-time monitoring alongside the mobile app and IoT integration",
      imgUrl: projImg18,
      link: "https://github.com/geraldsberongoy/Arduino-Hackathon-Web"
    },
    {
      title: "Real-estate Website (DavidEstate)",
      description: "Built using React as a Frontend, Express as a Backend, MongoDB for Database, JWT for Authentication, Redux for State Management",
      imgUrl: projImg2,
      link: "https://github.com/DavidBatoDev/real-estate-mongodb"
    },
    {
      title: "Blog Website (Technoquatro)",
      description: "Built using React as a Frontend, Uses Firebase Storage, Database and Athentication",
      imgUrl: projImg3,
      link: "https://github.com/DavidBatoDev/technoquatro-firebase"
    },
    {
      title: "E-commerce Website (Ecom)",
      description: "Built using MySQL, Express, React, Node.js, polishing my skills in state management",
      imgUrl: projImg4,
      link: "https://github.com/DavidBatoDev/ecommerce-mysql"
    },
    {
      title: "Student Curicullar Activity Manager (SCAM)",
      description: "Contributing to build it using Tkinter as a Frontend, Uses Flask Blueprint Structure, SQLAlchemy for Database, Websocket for real-time notes",
      imgUrl: projImg5,
      link: "https://github.com/DavidBatoDev/oop-scam-app"
    },
    {
      title: "ElectrifAI Solutions PH Website",
      description: "Contributing to the developement of the company website using react typescript",
      imgUrl: projImg6,
      link: "https://electrifai.tech/"
    },
    {
      title: "ElectrifAI Solutions PH Mobile App",
      description: "Contributing to the developement of the company main mobile application using react-native and supabase",
      imgUrl: projImg8,
      link: ""
    },
    {
      title: "GDG XParky Points API",
      description: "Built using Flask as Backend, uses Google API for classroom and sheets integration",
      imgUrl: projImg9,
      link: "https://github.com/DavidBatoDev/gdg-web-development-classroom-api"
    },
    {
      title: "Email Spam Classifier Pytorch",
      description: "Built using Pytorch, uses MLP for classification, uses Flask for API",
      imgUrl: projImg10,
      link: "https://github.com/DavidBatoDev/email_spam_classifier_pytorch"
    },
    {
      title: "California Housing Price Prediction EDA",
      description: "Built using Python, uses Pandas, Numpy, Matplotlib, Seaborn for EDA",
      imgUrl: projImg12,
      link: "https://github.com/DavidBatoDev/house-price-prediction-pytorch"
    },
    {
      title: "Object Detection (OpenCV)",
      description: "Built an OpenCV and leverage an existing model for object detection",
      imgUrl: projImg11,
      link: "https://github.com/DavidBatoDev/object-detection-opencv"
    },
    {
      title: "Data Structure and Algorithm Visualizer",
      description: "Built using React as a Frontend, uses framer for animation for visualizing data structures and algorithms",
      imgUrl: projImg13,
      link: "https://github.com/DavidBatoDev/data-structure-algo-visualization"
    },
    {
      title: "Data Structure and Algorithm Visualizer (Mario Theme)",
      description: "Built using React as a Frontend, uses framer for animation for visualizing data structures and algorithms",
      imgUrl: projImg14,
      link: "https://github.com/DavidBatoDev/data-structure-algo-mario-theme"
    },
    {
      title: "Constellation Orb ESP32 Firebase",
      description: "Uses ESP32 Arduino for IoT, Firebase Real time Database for Backend",
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

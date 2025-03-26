import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import './AboutMe.css';

export const AboutMe = () => {
  return (
    <section className="about-me"  id="about">
      <Container>
        <Row>
          {/* Education Section */}
          <Col md={6} className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                <h3>College</h3>
                  <p><strong>University: </strong>Polytechnic University of the Philippines - Manila</p>
                  <p><strong>Course: </strong>Bachelor of Science in Computer Engineering (BSCpE)</p>
                  <p><strong>Year: </strong> 2023 - Present</p>
                  <p className="description">
                    CHED Merit Scholar and was consistent President Lister for the freshmen year
                </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                    <h3>Senior High School</h3>
                    <p><strong>School: </strong>Rosario Institute</p>
                    <p><strong>Course: </strong>Accountancy Business and Management (ABM)</p>
                    <p><strong>Year: </strong> 2021 - 2023</p>
                    <p className="description">
                        Graduated with high honors with proficiency in Business Finance
                    </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                    <h3>Junior High School</h3>
                    <p><strong>School: </strong>Bagbag National High School</p>
                    <p><strong>Year: </strong> 2017 - 2021</p>
                    <p className="description">
                        Graduated with honors and was a consistent top student in the class
                    </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Experience Section */}
          <Col md={6} className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-timeline">
            <div className="experience-item">
                <FaLaptopCode className="experience-icon" />
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>ElectrifAI Sol'n PH</Card.Title>
                    <Card.Subtitle className="mb-2 text-gray ">Product Head | Software Developer</Card.Subtitle>
                    <Card.Text><strong>Time:</strong> July 2024 - Present</Card.Text>
                    <Card.Text>
                        Contributing to the developement of the company mobile application and website using react based technologies
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            <div className="experience-item">
                <FaUserGraduate className="experience-icon" />
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>GDG On Campus PUP</Card.Title>
                    <Card.Subtitle className="mb-2 text-gray ">Web Development Co-Lead</Card.Subtitle>
                    <Card.Text><strong>Time:</strong> October 2024 - Present</Card.Text>
                    <Card.Text>
                      Conducted workshops and seminars for 300+ students and developed web applications for the organization 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="experience-item">
                <FaBriefcase className="experience-icon" />
                <Card className="experience-card">
                  <Card.Body>
                    <Card.Title>PUP - ICTO</Card.Title>
                    <Card.Subtitle className="mb-2 text-gray">Full Stack Developer</Card.Subtitle>
                    <Card.Text><strong>Time:</strong> September 2024 - February 2025</Card.Text>
                    <Card.Text>
                      Created and maintained the university's website and developed web applications for PUP Alumni Gradutes for DAP tracker reasearch.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

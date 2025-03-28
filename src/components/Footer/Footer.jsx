import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-start">
            <p>Designed by <a href="https://github.com/DavidBatoDev" target="_blank" rel="noreferrer">DavidBatoDev</a></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/david-bato-bato-1b6a8b288/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/dream.achiever46"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/david_enriquezbato/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

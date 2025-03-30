import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../../assets/img/header-img.jpg'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // Fixed initial delta value - more consistent and faster typing
  const [delta, setDelta] = useState(200);
  const toRotate = ["Software Developer", "AI Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      // Make deletion faster
      setDelta(100);
    } else {
      // Make typing faster and more consistent
      setDelta(200);
    }

    if (!isDeleting && updatedText === fullText) {
      // Pause before starting to delete
      setIsDeleting(true);
      setDelta(period / 4);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // Reset to faster typing for the next word
      setDelta(200);
    }
  }

  // download pdf
  const download = () => {
    window.open("https://drive.google.com/drive/u/0/folders/1_T6X1m2Uq3cOP7ul9Os-JPdKabDEsqQp", "_blank");
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 style={{height: '80px'}} className="header-title">{`Hi! I'm David, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "AI enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p> 
                  I am a highly motivated Software and aspiring AI Engineer, with a deep passion for technology and innovation. At 20 years old, my enthusiasm for software development, cloud technologies and artificial intelligence drives me to constantly seek new knowledge and skills, aiming to contribute meaningfully to the tech industry in the future
                  </p>
                  <button onClick={download}>See CV <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "flex" : "flex"}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
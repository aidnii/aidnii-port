import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
//import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ " Smart Contracts Engineer", "Blockchain Developer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect(() => {
      let ticker = setInterval(() => {
          tick();
      },delta)
      
      return () => { clearInterval(ticker)};
  }, [delta, text, tick])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) => 
                  <div className={ isVisible ? "animated__animated animate_fadeIn" : ""}>
                    <span className="tagline">welcome to my portfolio</span>
                    <h2>{`hey! i'm kryptic lady `}</h2>
                    <h1><span className="wrap">{text}</span></h1>
                    <p>A self-taught Blockchain Developer that's been exploring this space for the last year!</p>
                    <a href="https://drive.google.com/file/d/1fya00Sb61xpY393cUS2SCI8UxQRzd4iq/view?usp=sharing" className="btn">download CV</a>
                    
                    {/* <button src={IHResume} className="btn-cv">Download CV </button> */}
                  </div>}
                </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
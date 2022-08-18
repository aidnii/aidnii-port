import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>my projects</h2>
                <p>here's a list of projects i've worked on. enjoy!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">dApps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">smart contracts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">DAOs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        
                        <div className="container portfolio__container">
                          <article className="portfolio__item">
                            <div className="portfolio__item-image">
                              <img src={projImg1} alt=""></img>
                            </div>
                            <h4>NFT Minting Website (RoboPunksNFT)</h4>
                            <div className="portfolio__item-cta">
                              <a href="https://github.com/aidnii/nft-mint-website" className='btn' target='_blank'>Github</a>
                              <a href="https://github.com/aidnii" className='btn btn-primary' target='_blank'>Demo</a>
                            </div>
                          </article>
                          <article className="portfolio__item">
                          <div className="portfolio__item-image">
                            <img src={projImg1} alt=""></img>
                          </div>
                          <h4>My Wave Portal</h4>
                          <div className="portfolio__item-cta">
                            <a href="https://github.com/aidnii/my-wave-portal" className='btn' target='_blank'>Github</a>
                            <a href="https://github.com/aidnii" className='btn btn-primary' target='_blank'>Demo</a>
                          </div>
                        </article>
                        <article className="portfolio__item">
                          <div className="portfolio__item-image">
                            <img src={projImg1} alt=""></img>
                          </div>
                          <h4>NFT Marketplace</h4>
                          <div className="portfolio__item-cta">
                            <a href="https://github.com" className='btn' target='_blank'>Github</a>
                            <a href="https://github.com/aidnii" className='btn btn-primary' target='_blank'>Demo</a>
                          </div>
                        </article>
                        </div>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        <div className="container portfolio__container">
                          <article className="portfolio__item">
                            <div className="portfolio__item-image">
                              
                            </div>
                            <h4>Contract</h4>
                            <div className="portfolio__item-cta">
                              <a href="https://github.com/aidnii/nft-mint-website" className='btn' target='_blank'>Github</a>
                              <a href="https://github.com/aidnii" className='btn btn-primary' target='_blank'>Deployed Contract</a>
                            </div>
                          </article>
                          <article className="portfolio__item">
                          <div className="portfolio__item-image">
                            
                          </div>
                          <h4>Contract</h4>
                          <div className="portfolio__item-cta">
                            <a href="https://github.com/aidnii/my-wave-portal" className='btn' target='_blank'>Github</a>
                            <a href="https://github.com/aidnii" className='btn btn-primary' target='_blank'>Deployed Contract</a>
                          </div>
                        </article>
                        <article className="portfolio__item">
                          <div className="portfolio__item-image">
                            
                          </div>
                          <h4>Contract</h4>
                          <div className="portfolio__item-cta">
                            <a href="https://github.com" className='btn' target='_blank'>Github</a>
                            <a href="https://github.com/aidnii" className='btn btn-primary' target='_blank'>Deployed Contract</a>
                          </div>
                        </article>
                        </div>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>coming soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
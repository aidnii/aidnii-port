import { Row, Container, Col } from 'react-bootstrap';

import 'react-multi-carousel/lib/styles.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skills" id="skills">
            <h2>my skills</h2>
            <p>here's what i can do.</p>
            <div className="container skills__container">
                
                <div className="skills-skillset">
                    
                    <div className="skills-content">
                        <article className="skills-details">
                            <BsFillCheckCircleFill />
                            <div>
                                <h5>Solidity</h5>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills-details">
                            <BsFillCheckCircleFill />
                            <div>
                                <h5>Hardhat</h5>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills-details">
                            <BsFillCheckCircleFill />
                            <div>
                                <h5>Truffle</h5>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills-details">
                            <BsFillCheckCircleFill />
                            <div>
                                <h5>OpenZeppelin Libraries</h5>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills-details">
                            <BsFillCheckCircleFill />
                            <div>
                                <h5>Rust</h5>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="skills-details">
                            <BsFillCheckCircleFill />
                            <div>
                                <h5>Zero Knowledge Proofs</h5>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
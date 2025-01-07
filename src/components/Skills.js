import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import skillIMG1 from '../assets/images/skill-imagePython.svg';
import skillIMG2 from '../assets/images/skill-imageC.svg';
import skillIMG3 from '../assets/images/skill-imageReact.svg';
import skillIMG4 from '../assets/images/skill-imageCSS.svg';
import skillIMG5 from '../assets/images/skill-imageJava.svg';
import skillIMG6 from '../assets/images/skill-imageJira.svg';



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
                items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Proficient in many different languages, frameworks, and tools:</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skillIMG1} alt="Image"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={skillIMG2} alt="Image"/>
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={skillIMG3} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={skillIMG4} alt="Image"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={skillIMG5} alt="Image"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={skillIMG6} alt="Image"/>
                                    <h5>Jira</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
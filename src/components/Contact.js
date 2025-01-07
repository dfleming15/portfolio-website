import { Container, Row, Col } from "react-bootstrap";
import connectIcon1 from '../assets/images/connect-icon1.svg';
import connectIcon2 from '../assets/images/connect-icon2.svg';
import connectIcon3 from '../assets/images/connect-icon3.svg';

export const Contact = () => {
    return (
        <section className="contact" id="connect">
            <Container>
                <div className="contact-box">
                    <Row className="align-items-center">
                        <h2>Let's Get in Touch</h2>
                        <p>Contact me through the following platforms to discuss how I can provide value to your company</p>
                    </Row>
                    <div className="separator"></div>
                    <Row>
                    <Col>
                        <div className="contact-method">
                        <div className="connect-icon">
                            <img src={connectIcon1} alt="Email Icon" />
                        </div>
                        <p className="contact-label">Email</p>
                        <a href="mailto:flemingdrew1@gmail.com">flemingdrew1@gmail.com</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="contact-method">
                        <div className="connect-icon">
                            <img src={connectIcon2} alt="Phone Icon" />
                        </div>
                        <p className="contact-label">Call</p>
                        <a href="tel:+1(701)6301439">+1 (701) 630 1439</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="contact-method">
                        <div className="connect-icon">
                            <img src={connectIcon3} alt="LinkedIn Icon" />
                        </div>
                        <p className="contact-label">Connect</p>
                        <a href="https://www.linkedin.com/in/drew-r-fleming">www.linkedin.com/in/drew-r-fleming</a>
                        </div>
                    </Col>
                    </Row>

                    </div>
            </Container>
        </section>
    )
}
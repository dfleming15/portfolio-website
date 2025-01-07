import { Container, Row, Col } from 'react-bootstrap';
import footerLogo from "../assets/images/nav-logo.svg";
import footerIcon1 from "../assets/images/nav-Icon1.svg";
import footerIcon2 from "../assets/images/nav-Icon2.svg";

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">

                    <Col size={12} sm={4}>
                        <img src={footerLogo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={4} className='text-start'>
                        <ul className="footer-nav">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#resume" target='_blank'>Resume</a></li>
                        </ul>
                    </Col>
                    <Col size={12} sm={4} className="text-center text-sm-end">
                        <div className='footer-icon'>
                            <a href="https://linkedin.com/in/drew-r-fleming" target="_blank"><img src={footerIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/dfleming15" target="_blank"><img src={footerIcon2} alt="GitHub" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

import { act, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/images/nav-Icon1.svg';
import navIcon2 from '../assets/images/nav-Icon2.svg';
import navIcon3 from '../assets/images/nav-Icon3.svg';
import navLogo from '../assets/images/nav-logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : "" }>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={navLogo} className= "navbar-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className= {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className= {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className= {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#resume" className= {activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/drew-r-fleming"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/dfleming15"><img src={navIcon2} alt="GitHub" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log("connect")}><span>Contact Me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

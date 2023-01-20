import { Navbar, Container } from "react-bootstrap"
import Navigation from "./Navbar/Navbar"
import './navigationBar.css'


const NavigationBar = () => {
    return (
        <Navbar variant="light" expand="lg" className="p-3">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">M Iqbal Ferdiansyah</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navigation />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
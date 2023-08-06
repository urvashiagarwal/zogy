import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const Header = () => {
    return (

        <Navbar expand="lg">
            <Container>

                <Navbar.Toggle className="responsive-navbar-nav justify-content-center" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Button href={"/"} id="link">Home</Button>
                        <Button href={"/landing"} id="link">Landing</Button>
                        <Button href={"/about"} id="link">About</Button>
                        <Button href={"/menu"} id="link">Menu</Button>
                        <Button href={"/team"} id="link">Team</Button>
                        <Button href={"/contact"} id="link">Contact</Button>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


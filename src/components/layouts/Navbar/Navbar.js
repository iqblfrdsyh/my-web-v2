import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Nav className="ms-auto test">
      <Nav.Link href="#home">
        <i class="bi bi-house"></i> Home
      </Nav.Link>
      <Nav.Link href="#about">
        <i class="bi bi-person"></i> About
      </Nav.Link>
      <Nav.Link href="#skills">
        <i class="bi bi-code-slash"></i> Skills
      </Nav.Link>
      <Nav.Link href="#project">
        <i class="bi bi-journal-code"></i> Project
      </Nav.Link>
      <Nav.Link href="/secretochat">
        <button className="btn btn-primary btn-md">
          Give Me Message <i class="bi bi-arrow-right-short"></i>
        </button>
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;

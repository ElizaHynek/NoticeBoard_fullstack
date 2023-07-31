import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="">
        <Navbar bg="primary" variant="dark" expand="sm" className="justify-content-between mt-4 mb-4 rounded px-3">
          <Navbar.Brand>Blog.app</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  };
  
  export default NavBar;
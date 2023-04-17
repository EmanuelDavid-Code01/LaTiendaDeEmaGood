import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
            <Nav >
              <Navbar.Brand as={Link} to="/">
              La tienda de Ema
                <img
                  alt=""
                  src="../src/assets/ropa.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
              <Nav.Link as={Link} to="/">
                Catálogo
              </Nav.Link>
              <Nav.Link as={Link} to={`/oferta/${true}`}>
                Ofertas
              </Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to={`/category/${"Ropa de verano"}`}
                >
                  Verano
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to={`/category/${"Ropa de invierno"}`}
                >
                  Invierno
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart" className="badge border rounded bg-danger p-2">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

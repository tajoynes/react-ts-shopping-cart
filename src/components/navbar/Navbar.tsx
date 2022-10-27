import React from "react";
import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          style={{ position: "relative" }}
          onClick={openCart}
        >
          <BsCart size={28} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;

import React from "react";
import { Navbar,Container } from "react-bootstrap";



const NavbarStyle = {
  backgroundColor: 'lightblue'
}
const Header = () => {
  return (
    <Navbar style = {NavbarStyle} >
    <Container>

      <Navbar.Brand href="/">Images Gallery</Navbar.Brand>
    </Container>
    </Navbar>
  );
};
export default Header;

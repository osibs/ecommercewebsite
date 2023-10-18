import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

function Navlinks() {
  return (
   <div>
    <div className='naver'>
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary naver">
      <Container>
        <Navbar.Brand href="/">OsibsStore</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/myaccount"> My Account </Nav.Link>
            <Nav.Link href="/mycart"> My Cart </Nav.Link>

            <NavDropdown title="Report A Problem" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://wa.me/message/KAJCTXPOHAWXB1" target="_blank" > <BsWhatsapp /> </NavDropdown.Item>
              <NavDropdown.Item href="mailto:osibs007@gmail.com" target="_blank"> <CgMail />
              </NavDropdown.Item>
              <NavDropdown.Item href="tel:+2348147302630"> <BsFillTelephoneOutboundFill/> </NavDropdown.Item>
            </NavDropdown>           
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
    <Outlet/>
   </div>
  );
}

export default Navlinks;
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" style={{color:"#4f4f4f"}}>Thomas Johnson</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 d-flex justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink href="/">Info</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/portfolio">Portfolio</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Contact
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBNavbarLink style={{color:"#4f4f4f"}}
                    href="mailto:thomasjohnson@gmail.com"
                    target="_blank"
                  >
                    Email
                  </MDBNavbarLink>
                  <MDBNavbarLink style={{color:"#4f4f4f"}}
                    href="https://www.linkedin.com/in/thomas-j-johnson/"
                    target="_blank"
                  >
                    LinkedIn
                  </MDBNavbarLink>
                  <MDBNavbarLink style={{color:"#4f4f4f"}}
                    href="https://docs.google.com/document/d/e/2PACX-1vSGh0X54y9ZIXEmDyXmOYmRoJWGbdaGGCi9OX4kcU9QEf9vK3zM2GFLeWKzAQG0YA/pub"
                    target="_blank"
                  >
                    Resumé
                  </MDBNavbarLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;

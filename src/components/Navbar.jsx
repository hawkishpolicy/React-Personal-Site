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
import resumeWithLinksPDF from "./../pdf/Thomas Johnson Resume w_ listed links.docx.pdf";

const NavBar = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" style={{ color: "#4f4f4f" }}>
          Thomas Johnson
        </MDBNavbarBrand>

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
              <MDBNavbarLink href="/resume">Resume</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Contact
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBNavbarLink id="NavLinkCollapse"
                    style={{ color: "#4f4f4f" }}
                    href="mailto:thomasjohnso@gmail.com"
                    target="_blank"
                  >
                    Email
                  </MDBNavbarLink>
                  <MDBNavbarLink id="NavLinkCollapse"
                    style={{ color: "#4f4f4f" }}
                    href="https://www.linkedin.com/in/thomas-j-johnson/"
                    target="_blank"
                  >
                    LinkedIn
                  </MDBNavbarLink>
                  <MDBNavbarLink id="NavLinkCollapse"
                    style={{ color: "#4f4f4f" }}
                    href="https://github.com/hawkishpolicy"
                    target="_blank"
                  >
                    GitHub
                  </MDBNavbarLink>
                  <MDBNavbarLink id="NavLinkCollapse"
                    style={{ color: "#4f4f4f" }}
                    href={resumeWithLinksPDF}
                    target="_blank"
                  >
                    Download Resume
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

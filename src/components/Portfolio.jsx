import React from "react";
import autoColl from "./../images/autoColl.png";
import fitnessTracker from "./../images/fitnessTracker.png";
import strangersThings from "./../images/strangersThings.png";
import arcade from "./../images/arcade.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { MDBRipple } from "mdb-react-ui-kit";

const Portfolio = () => {
  return (
    <div id="portfolio-page">
      <div id="portfolio-row">
        <div id="portfolio-column">
          <div id="portfolio-link">
            <Nav.Link as={Link} to="/autonomous-collective">
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow rounded"
                rippleColor="dark"
                rippleDuration={"3000"}
              >
                <Image src={autoColl} className="img-fluid img-thumbnail" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
                ></div>
              </MDBRipple>
            </Nav.Link>
          </div>
          <div id="portfolio-title">
            <h3>Autonomous Collective -</h3>
            <p>An homage to the early days of Amazon</p>
          </div>
        </div>
        <div id="portfolio-column">
          <div id="portfolio-link">
            <Nav.Link as={Link} to="/fitness-tracker">
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow rounded"
                rippleColor="dark"
                rippleDuration={"3000"}
              >
                <Image
                  src={fitnessTracker}
                  className="img-fluid img-thumbnail"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
                ></div>
              </MDBRipple>
            </Nav.Link>
          </div>
          <h3 id="portfolio-title">Fitness Tracker -</h3>
          <p></p>
        </div>
      </div>
      <div id="portfolio-column">
        <div id="portfolio-link">
          <Nav.Link as={Link} to="/strangers-things">
            <MDBRipple
              rippleTag="div"
              className="bg-image hover-overlay hover-zoom hover-shadow rounded"
              rippleColor="dark"
              rippleDuration={"3000"}
            >
              <Image
                as={Link}
                to={"/strangers-things"}
                src={strangersThings}
                className="img-fluid img-thumbnail"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
              ></div>
            </MDBRipple>
          </Nav.Link>
        </div>
        <h3 id="portfolio-title">Stranger's Thing -</h3>
        <p></p>
      </div>
      <div id="portfolio-column">
        <div id="portfolio-link">
          <Nav.Link as={Link} to="/arcade">
            <MDBRipple
              rippleTag="div"
              className="bg-image hover-overlay hover-zoom hover-shadow  rounded"
              rippleColor="dark"
              rippleDuration={"3000"}
            >
              <Image src={arcade} className="img-fluid img-thumbnail" />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
              ></div>
            </MDBRipple>
          </Nav.Link>
        </div>
        <h3 id="portfolio-title">Arcade -</h3>
        <p></p>
      </div>
    </div>
  );
};

export default Portfolio;

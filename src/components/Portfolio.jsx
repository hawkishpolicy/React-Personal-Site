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
            <Nav.Link
              as={Link}
              to="https://autonomous-collective.netlify.app/"
              target="_blank"
            >
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow rounded"
                rippleColor="dark"
                rippleDuration={"3000"}
              >
                <Image src={autoColl} className=" img-thumbnail" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
                ></div>
              </MDBRipple>
            </Nav.Link>
          </div>
          <div id="portfolio-title">
            <h3>Autonomous Collective -</h3>
            <p>
              An homage to the early days of Amazon, this full featured
              e-commerce site offers secure login, guest users, persistent cart,
              search, filtering, and a robust admin page.
            </p>
            <a
              style={{
                textDecoration: "underline",
                color: "#4f4f4f",
                fontWeight: "bolder",
                fontSize: "Larger",
              }}
              href="https://www.youtube.com/watch?v=qnU2Cc3ji1I"
              target="_blank"
            >
              Video Overview
            </a>
          </div>
        </div>
        <div id="portfolio-column">
          <div id="portfolio-link">
            <Nav.Link
              as={Link}
              to="https://flourishing-mochi-563fc9.netlify.app/"
              target="_blank"
            >
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow rounded"
                rippleColor="dark"
                rippleDuration={"3000"}
              >
                <Image
                  src={fitnessTracker}
                  className="img-thumbnail"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
                ></div>
              </MDBRipple>
            </Nav.Link>
          </div>
          <div id="portfolio-title">
            <h3>Fitness Tracker -</h3>
            <p>
              A simple but powerful exercise app offering secure login, user
              generated amendable routines/activities, and search.
            </p>
          </div>
        </div>
      </div>
      <div id="portfolio-row">
        <div id="portfolio-column">
          <div id="portfolio-link">
            <Nav.Link
              as={Link}
              to="https://superlative-medovik-f79872.netlify.app/"
              target="_blank"
            >
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow rounded"
                rippleColor="dark"
                rippleDuration={"3000"}
              >
                <img
                  id="portfolio-pic"
                  src={strangersThings}
                  className="img-thumbnail"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
                ></div>
              </MDBRipple>
            </Nav.Link>
          </div>
          <div id="portfolio-title">
            <h3>Stranger's Thing -</h3>
            <p>
              An online marketplace in the style of Craigslist. This site offers
              login/registration, creation of editable posts, search, and
              messaging.
            </p>
          </div>
        </div>
        <div id="portfolio-column">
          <div id="portfolio-link">
            <Nav.Link
              as={Link}
              to="https://sweet-squirrel-f41337.netlify.app/"
              target="_blank"
            >
              <MDBRipple
                rippleTag="div"
                className="bg-image hover-overlay hover-zoom hover-shadow  rounded"
                rippleColor="dark"
                rippleDuration={"3000"}
              >
                <Image src={arcade} className="img-thumbnail col-12" />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.35)" }}
                ></div>
              </MDBRipple>
            </Nav.Link>
          </div>
          <div id="portfolio-title">
            <h3>Arcade -</h3>
            <p>
              My take on the classic Tic-Tac-Toe. This arcade offers Player vs
              CPU or Player vs Player game modes with dynamic score and easy
              reset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

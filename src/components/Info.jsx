import React from "react";
import testBG from "./../images/testBG.jpg";
import armsWide from "./../images/armsWide.jpg";
import swanSlabs from "./../images/swanSlabs.jpg";
import bikeShot from "./../images/bikeShot.jpg";
import Image from "react-bootstrap/Image";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Info = () => {
  return (
    <div>
      <div id="info-page">
        <div id="info-blurb">
          <p>
            Hey there,
            <br></br>
            <br></br>
            I'm Tom.
            <br></br>
            <br></br>I work in web development and am interested in building
            useful web based tech that provides a rewarding user experience so
            that people are free to spend more time doing what they love.
            <br></br>
            <br></br>
            Prior to web development, I attended the University of North Florida
            where I received a classic liberal arts education and spent my first
            career in construction management.
            <br></br>
            <br></br>
            In my spare time you can find me enjoying all manner of outdoor
            activities. From climbing in TN to hiking in Yosemite to paddle
            boarding in FL, I try to enjoy as much as possible of the massive
            variety in outdoor recreation offered by the US.
            <br></br>
            <br></br>
            To that end, I'm very much interested in the intersection of tech
            and the outdoor world, especially in the creation of guidebooks,
            maps, trackers, and databases for outdoor/endurance sports.
            <br></br>
            <br></br>
            Let's talk!
            <br></br>
            <br></br>
          </p>
          <div id="contact-options">
            <span id="contact-icon">
              Email -{" "}
              <a
                class="material-symbols-outlined material-icons md-30"
                href="mailto:thomasjohnson@gmail.com"
                target="_blank"
              >
                contact_mail
              </a>
            </span>
            <span id="contact-icon">
              LinkedIn -{" "}
              <a
                class="material-symbols-outlined material-icons md-30"
                href="https://www.linkedin.com/in/thomas-j-johnson/"
                target="_blank"
              >
                group
              </a>
            </span>
            <span id="contact-icon">
              Resumé -{" "}
              <a
                class="material-symbols-outlined material-icons md-30"
                href="https://docs.google.com/document/d/e/2PACX-1vSGh0X54y9ZIXEmDyXmOYmRoJWGbdaGGCi9OX4kcU9QEf9vK3zM2GFLeWKzAQG0YA/pub"
                target="_blank"
              >
                description
              </a>
            </span>
          </div>
        </div>
        <div id="info-pics">
          <Image
            src={armsWide}
            className=" rounded hover-shadow img-fluid"
            style={{ alignSelf: "flex-start" }}
          />

          <Image
            src={swanSlabs}
            className="img-fluid rounded  hover-shadow"
            style={{ alignSelf: "flex-end" }}
          />
          <Image
            src={bikeShot}
            className="img-fluid rounded  hover-shadow"
            style={{ alignSelf: "flex-start" }}
          />
        </div>
        <MDBCarousel id="carousel" fade showIndicators showControls>
          <MDBCarouselItem
            className="d-block w-100 rounded shadow-4-strong"
            itemId={1}
            src={armsWide}
            alt="..."
            style={{ height: "25vh" }}
          />
          <MDBCarouselItem
            className="d-block w-100 rounded shadow-4-strong"
            itemId={2}
            src={swanSlabs}
            alt="..."
            style={{ height: "25vh" }}
          />
          <MDBCarouselItem
            className=" d-block w-100 rounded shadow-4-strong"
            itemId={3}
            src={bikeShot}
            alt="..."
            style={{ height: "25vh" }}
          />
        </MDBCarousel>
      </div>
    </div>
  );
};

export default Info;

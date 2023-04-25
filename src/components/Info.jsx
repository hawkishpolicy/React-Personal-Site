import React from "react";
import selfie from "./../images/selfie.jpg";
import armsWide from "./../images/armsWide.jpg";
import swanSlabs from "./../images/swanSlabs.jpg";
import bikeShot from "./../images/bikeShot.jpg";
import Image from "react-bootstrap/Image";
import { MDBRipple } from "mdb-react-ui-kit";

const Info = () => {
  return (
    <div>
      <div id="info-page">
        <p id="info-blurb">
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
          To that end, I'm very much interested in the intersection of tech and
          the outdoor world, especially in the creation of guidebooks, maps,
          trackers, and databases for outdoor/endurance sports.
          <br></br>
          <br></br>
          <span>Reach out -
          <a href="mailto:thomasjohnson@gmail.com" target="_blank"> thomasjohnso@gmail.com
          </a></span>
          <span>Or -<a href="https://www.linkedin.com/in/thomas-j-johnson/" target="_blank"> LinkedIn</a></span>
        </p>
        <div id="info-pics">
          <Image
            src={armsWide}
            className=" img-thumbnail hover-shadow"
            style={{ width: "20vw", alignSelf: "flex-start" }}
          />

          <Image
            src={swanSlabs}
            className="img-fluid rounded img-thumbnail hover-shadow"
            style={{ width: "25vw", alignSelf: "flex-end" }}
          />
          <Image
            src={bikeShot}
            className="img-fluid rounded img-thumbnail hover-shadow"
            style={{ width: "20vw", alignSelf: "flex-start" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;

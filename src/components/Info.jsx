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
          <br></br>
          I'm a newly minted web developer and am interested in designing and
          building useful web based tech that offer a rewarding user experience.
          <br></br>
          <br></br>
          I'm very much interested in the intersection of tech and the outdoor
          world, especially in the creation of guidebooks, maps, trackers, and
          databases for outdoor/endurance sports.
          <br></br>
          <br></br>
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

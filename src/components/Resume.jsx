import React from "react";
import { Button } from "react-bootstrap";
import resumeWithLinksPDF from "./../pdf/Thomas Johnson Resume w_ listed links 07:23.docx.pdf"

const Resume = () => {
  return (
    <div id="resume-page">
        <iframe
          id="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vSoYwo3Yyjek4RIyAWhLwp0ocPKU2lSskIlAfMppiDGSVy6IB57Pfk_HATURLvcfQ/pub?embedded=true"
          ></iframe>
        <Button id="resume-button" href={resumeWithLinksPDF} target="_blank">Download</Button>
    </div>
  );
};
export default Resume;

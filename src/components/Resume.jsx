import React from "react";
import { Button } from "react-bootstrap";
import resumeWithLinksPDF from "./../pdf/Thomas Johnson Resume w_ listed links.docx.pdf"

const Resume = () => {
  return (
    <div id="resume-page">
        <iframe
          id="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vSGh0X54y9ZIXEmDyXmOYmRoJWGbdaGGCi9OX4kcU9QEf9vK3zM2GFLeWKzAQG0YA/pub?embedded=true"
          ></iframe>
        <Button id="resume-button" href={resumeWithLinksPDF} target="_blank">Download</Button>
    </div>
  );
};
export default Resume;

import React, {useEffect} from "react";
import "./OpenPositions.css"; // Import the CSS file for styling
import "aos/dist/aos.css";
import AOS from "aos";

const OpenPositions = () => {
  useEffect(()=> {
    AOS.init({duration: 2000});
  }, [])

  const openPositionsData = [
    { jobTitle: "Managing Editor, The Wildest", location: "New York", department: "Kinship" },
    { jobTitle: "Principal Software Engineer, React Native", location: "San Francisco", department: "Technology" },
    { jobTitle: "Principal Software Engineer, React Native", location: "New York", department: "Technology" },
    // Dummy data for now
  ];

  return (
    <div className="open-positions-section">
      <div className="position-list">
        <div className="position-row headings">
          <div className="underline" data-aos="fade-right"></div>
          <div className="heading job-title">Job Title</div>
          <div className="heading">Location</div>
          <div className="heading">Department</div>
        </div>
        {openPositionsData.map((position, index) => (
          <div className="position-row underline" key={index} 
          data-aos="zoom-in"
          data-aos-anchor-placement="center" >
            <div className={`cell job-title-cell`}>{position.jobTitle}</div>
            <div className="cell">{position.location}</div>
            <div className="cell">{position.department}</div>
            <p className="learn-more">Learn more → </p>
          </div>
        ))}
      </div>
     <br />
     <br />
     <br />
     <p className="footer-tagline">Don"t see an opening that matches your background? Join our talent community here!</p>
    </div>
  );
};

export default OpenPositions;

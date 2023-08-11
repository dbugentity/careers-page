import React from 'react';
import './OpenPositions.css'; // Import the CSS file for styling

const OpenPositions = () => {
  const openPositionsData = [
    { jobTitle: 'Frontend Developer', location: 'New York', department: 'Engineering' },
    { jobTitle: 'UX Designer', location: 'San Francisco', department: 'Design' },
    { jobTitle: 'Data Scientist', location: 'Remote', department: 'Data Science' },
    // Add more open positions as needed
  ];

  return (
    <div className="open-positions-section">
      <div className="position-list">
        <div className="position-row headings">
          <div className='underline'></div>
          <div className="heading">Job Title</div>
          <div className="heading">Location</div>
          <div className="heading">Department</div>
        </div>
        {openPositionsData.map((position, index) => (
          <div className="position-row" key={index}>
            <div className="cell">{position.jobTitle}</div>
            <div className="cell">{position.location}</div>
            <div className="cell">{position.department}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenPositions;

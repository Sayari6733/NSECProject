import React, {} from "react";
import { useNavigate } from "react-router-dom";
import graduationImage from "../../assets/dsa.webp";
import coreconcepts from "../../assets/coreconcepts.png";
import { Button } from 'react';

import "./practice.css";



const Practice = () => {
  const navigate = useNavigate();

  const handleDsaClick = () => {
    navigate("/practiceDsa");
  }
  const handleCoreClick = () => {
    navigate("/practiceCore");
  }

  return (
    <div>
      
      <div className="practice-container">
        <div className="left-section">
          <p className="subtitle">PRACTICE DSA</p>
          <h1 className="main-title">Sharpen Your<br />DSA Skills with<br />Focused Practice</h1>
          <p className="description">
            <span className="highlight">Boost your problem-solving abilities</span> by working on real-world coding questions. Build logic, understand patterns, and master data structures and algorithms.
          </p>
          <button className="download-btn" onClick={handleDsaClick}>Go to DSA Concepts</button>
        </div>
        <div className="right-section">
          <img src={graduationImage} alt="Dev Portfolio Guide" className="portfolio-img" />
          <p className="join-text">
          Practice regularly to prepare for top tech interviews and crack your dream job!
          </p>
        </div>
      </div>
      <div className="core-practice-container">
        <div className="core-right-section"> {/* Now on the left */}
          <img src={coreconcepts} alt="Dev Portfolio Guide" className="core-portfolio-img" />
          <p className="core-join-text">
          Build a rock-solid foundation in Computer Science fundamentals.
          </p>
        </div>
        <div className="core-left-section"> {/* Now on the right */}
          <p className="core-subtitle">CORE PRACTICE</p>
          <h1 className="core-main-title">Master the Core<br />CS Fundamentals<br />Every Developer Needs</h1>
          <p className="core-description">
            <span className="core-highlight">Understand key concepts like OOP, OS, DBMS, CN</span> and more. Learn how they work and how to apply them in real projects and interviews.
          </p>
          <button className="core-download-btn" onClick={handleCoreClick}>Core Concepts</button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
import React from "react";
import "./practiceCore.css";
import dbms from "../../assets/dbms.jpg";
import operatingSystem from "../../assets/operatingSystem.png";
import computerNetwork from "../../assets/computerNetwork.jpg";
import oops from "../../assets/oops.jpg";


const templates = [
  {
    title: "Database Management Systems",
    description: "DBMS software helps store, manage, and retrieve data systematically. It ensures data integrity, security, and supports multi-user access.",
    image: dbms,
    link: "https://www.w3schools.com/mysql/mysql_rdbms.asp",
  },
  {
    title: "Operating Systems",
    description:
      "An OS is system software that manages hardware and software resources. It acts as an interface between the user and the computer hardware.",
    image: operatingSystem,
    link: "https://www.tutorialspoint.com/operating_system/os_overview.htm",
  },
  {
    title: "Object Oriented Programming",
    description:
      "OOP is a programming paradigm centered around objects and classes. It promotes modularity, reusability, and abstraction in software design.",
    image: oops,
    link: "https://www.w3schools.com/cs/cs_oop.php",
  },
  {
    title: "Computer Networks",
    description:
      "Computer Networks enable devices to communicate and share data efficiently. They form the backbone of modern communication systems, from the internet to local networks.",
    image: computerNetwork,
    link: "https://www.ibm.com/think/topics/networking",
  },
];

const PracticeCore = () => {
  return (
    <div className="templates-container">
      <h2 className="section-heading">GET STARTED WITH A CORE SUBJECTS</h2>
      <div className="templates-grid">
        {templates.map((item, idx) => (
          <div className="template-card" key={idx}>
            <img src={item.image} alt={item.title} className="template-img" />
            <h3 className="template-title">{item.title}</h3>
            <p className="template-desc">{item.description}</p>
            <a href={item.link} className="template-link">
              Read →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeCore;

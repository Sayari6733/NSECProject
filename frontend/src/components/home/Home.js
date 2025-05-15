import React from 'react';
import Navbar from '../navbar/Navbar';
import Header from '../header/header';
import './home.css';
import Practice from '../practice/Practice';


const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <Header />
      <Practice /> 
    </div>
  );
};

export default Home;

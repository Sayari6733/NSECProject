import React, { useContext } from 'react';
import './header.css';
import { assets } from '../../assets/assets';
import { AppContent } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const {userData} = useContext(AppContent)
  const navigate = useNavigate();
  
  
    const handleClick = () => {
      navigate('/login');
    };

  

  return (
    <div className="header-container">
      <img src={assets.header_img} alt="" className="header-image" />

      <h1 className="header-title">
        Hey {userData ? userData.name : "Developer"}!
        <img className="hand-wave" src={assets.hand_wave} alt="wave" />
      </h1>

      <h2 className="header-subtitle">Welcome to MockMateAI</h2>

      <p className="header-description">
      Your journey to success starts now! Every small step you take today brings you closer to your dreams.
      </p>

      <button onClick={handleClick} className="get-started-button">Get Started</button>
    </div>
  );
};

export default Header;

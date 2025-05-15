import React, { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Navbar.css';
import { assets } from '../../assets/assets';

const backendUrl = 'http://localhost:5000';

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, setUserData, setIsLoggedIn, isLoggedIn, getUserData } = useContext(AppContent);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch user data on initial mount
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await axios.get(`${backendUrl}/api/user/data`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data) {
          setUserData(res.data);
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.error("Navbar userData error:", err);
        setUserData(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
      }
    };

    if (!userData && localStorage.getItem('token')) {
      fetchUserData();
    }
  }, []); // Run only once on mount

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitial = () => userData?.name?.charAt(0).toUpperCase() || '?';


  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);

      if (data.success) {
        setIsLoggedIn(false);
        setUserData(null);
        localStorage.removeItem('token'); // Also remove token
        setDropdownOpen(false);
        toast.success('Logged out successfully');
        navigate('/');
      } else {
        toast.error(data.message || 'Logout failed.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Something went wrong.');
    }
  };

  console.log("Navbar userData:", userData); // Debugging

  return (
    <div className="navbar">
      <img
        src={assets.logo}
        alt="Logo"
        className="navbar-logo"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />

      <ul className="navbar-menu">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/practiceDSA')}>DSA Practice</li>
        <li onClick={() => navigate('/practiceCore')}>Core Subject Practice</li>
        <li onClick={() => navigate('/mockInterview')}>Interview Panel</li>
      </ul>

      {userData ? (
        <div className="user-wrapper" ref={dropdownRef}>
          <div
            className="user-initial"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {getInitial()}
          </div>
          {dropdownOpen && (
            <div className="user-dropdown">
              <ul className="dropdown-menu">
                <li onClick={logout} className="dropdown-item logout">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => navigate('/login')} className="login-button">
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;

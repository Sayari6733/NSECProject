import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// ✅ Define backendUrl here directly
const backendUrl = 'http://localhost:5100';

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setUserData(null);
        setIsLoggedIn(false);
        return null;
      }

      const res = await axios.get(`${backendUrl}/api/user/data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data?.userData) {
        setUserData(res.data.userData);
        setIsLoggedIn(true);
        return res.data.userData;
      } else {
        setUserData(null);
        setIsLoggedIn(false);
        return null;
      }
    } catch (error) {
      console.error('getUserData error:', error);
      toast.error(error.response?.data?.message || error.message);
      setUserData(null);
      setIsLoggedIn(false);
      return null;
    }
  };

  useEffect(() => {
    getUserData(); // Load user data on app start
  }, []);

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContent.Provider value={values}>
      {props.children}
    </AppContent.Provider>
  );
};

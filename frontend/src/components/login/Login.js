import React, { useState, useContext } from 'react';
import { assets } from '../../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import { AppContent } from '../../context/AppContext.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import '../navbar/Navbar.js';
import '../navbar/Navbar.css';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserData, getUserData } = useContext(AppContent);

  const [state, setState] = useState('Sign up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;

      if (state === 'Sign up') {
        const { data } = await axios.post('http://localhost:5000/api/auth/register', {
          name,
          email,
          password,
        });

         console.log('Register response:', data); // ✅ Debugging

        if (data.success) {
          localStorage.setItem('token', data.token);
          toast.success('Registered successfully');
          await getUserData();
          navigate('/');

       
        } else {
          toast.success(data.message);
        }
      } else {
        const { data } = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          toast.success('Logged in successfully');
          await getUserData();
          navigate('/');
        } else {
          toast.success(data.message);
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{state === 'Sign up' ? 'Create Account' : 'Login'}</h2>
        <p>{state === 'Sign up' ? 'Create your account' : 'Login to your account'}</p>

        <form onSubmit={onSubmitHandler}>
          {state === 'Sign up' && (
            <div className="login-input">
              <img src={assets.person_icon} alt="name" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="login-input">
            <img src={assets.mail_icon} alt="email" />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-input">
            <img src={assets.lock_icon} alt="password" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* <p onClick={() => navigate('/reset-password')} className="forgot-password">
            Forgot password?
          </p> */}

          <button type="submit">{state}</button>
        </form>

        <p className="toggle-auth">
          {state === 'Sign up' ? (
            <>
              Already have an account? <span onClick={() => setState('Login')}>Login here</span>
            </>
          ) : (
            <>
              Don't have an account? <span onClick={() => setState('Sign up')}>Sign up</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;

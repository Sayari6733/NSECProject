

import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import MockInterview from './components/MockInterview/MockInterview';
import Permissions from './components/Permissions/Permissions';
//import InterviewPanel from './components/InterviewPanel/InterviewPanel';
import Header from './components/header/header';
import InterviewPanel from './components/InterviewSession/InterviewPanel';
import Practice from './components/practice/Practice';
import PracticeCore from './components/practiceCore/PracticeCore';
import PracticeDSA from './components/practiceDSA/PracticeDSA';
import Home from './components/home/Home';
import Login from './components/login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import { AppContextProvider } from './context/AppContext';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

function App() {
    return (
        <AppContextProvider> 
        <Router>
             <ToastContainer />
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path="/login" element={<Login />} />
                <Route path="/mockInterview" element={<MockInterview />} />
                <Route path="/permissions" element={<Permissions />} />
                <Route path="/interview" element={<InterviewPanel />} />
                <Route path='/practice' element={<Practice /> } />
                <Route path='/practiceCore' element={<PracticeCore /> } />
                <Route path='/practiceDSA' element={<PracticeDSA /> } />
            </Routes>
            <Footer />
        </Router>
        </AppContextProvider>
    );
}

export default App;


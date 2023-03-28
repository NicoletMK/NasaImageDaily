import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import Signin from './pages/login';

import Register from './pages/register';
import Navbar from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './pages/logout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CLIENT_ID } from './constants/constants';


function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}> 
       <div>
      <ToastContainer limit={1} />
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Signin />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
    </GoogleOAuthProvider>

  );
}

export default App;


import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Post from './components/PostDetails/PostDetails';
//import Auth from './components/Auth/Auth';
import SignUp from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<Home/>} />
        <Route path="/posts/search" element={<Home/>} />
        <Route path="/posts/:id" element={<Post/>} />
        <Route path="/auth" element= {<SignUp/>} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
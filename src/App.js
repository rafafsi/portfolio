import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from './layout/Container';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import Projects from '../src/pages/Projects'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

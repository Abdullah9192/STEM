import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Admission from './Pages/AdmissionPage.js';
import AboutUs from './Pages/AboutUs.js';
import Blog from './Pages/Blog.js';
import ContactUs from './Pages/ContactUs.js';
import HomePage from './Pages/HomePage.js';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="home" element={<HomePage/>} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
    </Router>
  );
}

export default App;

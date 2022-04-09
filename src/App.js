import React from 'react';
import './App.css';
import Navbars from "./components/Navbars";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Box from "./components/Box";

function App() {
  return (
    <>
       <Navbars />
       <Menu />
       <Box />
       <Footer />
    </>
  );
}

export default App;

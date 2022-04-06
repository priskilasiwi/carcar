import './App.css';
import Navbars from "./components/Navbars";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from "./components/Menu"

function App() {
  return (
    <>
       <Navbars />
       <Menu />
    </>
  );
}

export default App;

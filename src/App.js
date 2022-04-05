import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Faq from './components/Pages/Faq';

function App() {
  return (
    <>
     <Router>
       <Navbar />
     <Routes>
       <Route path="/Faq" component={Faq} />
     </Routes>
     </Router>
    </>
  );
}

export default App;

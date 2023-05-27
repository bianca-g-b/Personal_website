import './App.css';
import Navbar1 from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Sidesection from '../Sidesection/Sidesection';
import Cv from "../Cv/Cv"

function App() {
  return (
    <div className="app-section">
      <Navbar1 />
      <Sidesection />
      <Footer />
       <div className="static-panel">
    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path ="/cv" element = {<Cv />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;

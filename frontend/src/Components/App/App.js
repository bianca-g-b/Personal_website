import './App.css';
import Navbar1 from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import PersonalProjects from '../PersonalProjects/Personal';
import Sidesection from '../Sidesection/Sidesection';
import Cv from "../Cv/Cv"
import ScrollToTop from '../ScrollToTop';
import Contact from '../Contact/Contact';
import TeamProjects from '../TeamProjects/TeamProjects';

function App() {
  return (
    <div className="app-section">
      <ScrollToTop />
      <Navbar1 />
      <Sidesection />
      
       <div className="static-panel">
    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/cv" element = {<Cv />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/individual" element={<PersonalProjects />} />
      <Route path="/projects/team" element={<TeamProjects />} />
    </Routes>
    <Footer />
    </div>
     </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Projects from "./pages/Projecten"
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'
import OverMezelf from './pages/OverMezelf'
import Stage from './pages/Stage'

function App() {
  return (
  <div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overMezelf" element={<OverMezelf />} />
          <Route path="/Projecten" element={<Projects />} />
          <Route path="/Projecten/:id" element={<ProjectDisplay />} />
          <Route path="/stage" element={<Stage />} />
          
        </Routes>
        <Footer/>
      </Router>
  </div>
  );
}

export default App;

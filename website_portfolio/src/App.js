import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'
import CV from './pages/CV'

function App() {
  return (
  <div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/CV" element={<CV />} />
        </Routes>
        <Footer/>
      </Router>
  </div>
  );
}

export default App;

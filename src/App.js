import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/my-portfolio">
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<CaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

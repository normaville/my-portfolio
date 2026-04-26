import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';

export default function Home() {
  return (
    <section className="hero-section d-flex align-items-center" style={{ minHeight: '90vh', background: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          <motion.div 
            className="col-md-6 text-center text-md-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-3 fw-bold mb-3">Hi, I'm <span className="accent-clr">Norma</span></h1>
            <p className="lead text-muted mb-4">Orlando-based UI/UX Designer. I create high-impact visuals and low-friction experiences. My mission is to make the complex feel simple and the simple look beautiful.</p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <Link to="/projects" className="btn btn-lg shadow btn-custom">View My Work</Link>
            </div>
          </motion.div>
          <motion.div 
            className="col-md-6 mt-5 mt-md-0 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Replace with your professional headshot */}
            <img src={profileImg} alt="Profile" className="img-fluid rounded-circle shadow-lg border border-5 border-white" style={{ maxWidth: '400px' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

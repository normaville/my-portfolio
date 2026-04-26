import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">NORMA VILLEGAS</NavLink>
        <div className="navbar-nav ms-auto flex-row gap-3">
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`} to="/projects">Work</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : ''}`} to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

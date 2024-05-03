import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Mettez ici votre logo ou titre */}
        <h1>Mon Portfolio</h1>
      </div>
      <ul className="navbar-links">
        {/* Mettez ici vos liens de navigation */}
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Ajoutez d'autres liens si nécessaire */}
      </ul>
    </nav>
  );
}

export default Navbar;

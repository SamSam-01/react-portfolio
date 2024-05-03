import React, { useState, useEffect } from 'react';
import './About.sass';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="about" style={{ '--mouse-x': mousePosition.x, '--mouse-y': mousePosition.y }}>
      <div className='presentation'>
        <h1>Samuel BLARD</h1>
        <h2>Développeur Web & Mobile</h2>
        <p>description</p>
      </div>
      <div className='picture'>
        <p>image</p>
      </div>
    </div>
  );
}

export default About;

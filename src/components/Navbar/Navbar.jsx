import { useState, useEffect } from 'react';
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //120px para mudar a cor da navbar (deixando de ser transparente)
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${scrolled ? 'scrolled' : ''} ${showMenu ? 'show-mobile-menu' : ''}`}>
      <nav className="navbar">
        <a href="#home" className="logo">Lume<span>.</span></a>
        
        <ul className="menu-links">
          <span 
            className="material-symbols-outlined" 
            id="close-menu-btn" 
            onClick={() => setShowMenu(false)}
          >
            close
          </span>
          <li><a href="#home" onClick={() => setShowMenu(false)}>Home</a></li>
          <li><a href="#sobre" onClick={() => setShowMenu(false)}>Sobre Nós</a></li>
          <li><a href="#beneficios" onClick={() => setShowMenu(false)}>Benefícios</a></li>
          <li><a href="#galeria" onClick={() => setShowMenu(false)}>Galeria</a></li>
          <li><a href="#personalize" onClick={() => setShowMenu(false)}>Personalize</a></li>
          <li><a href="#depoimentos" onClick={() => setShowMenu(false)}>Depoimentos</a></li>
          <li><a href="#contatos" onClick={() => setShowMenu(false)}>Contatos</a></li>
        </ul>
        
        <span 
          className="material-symbols-outlined" 
          id="menu-btn" 
          onClick={() => setShowMenu(true)}
        >
          menu
        </span>
      </nav>
    </header>
  );
}
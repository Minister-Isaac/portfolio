import React, { useRef, useState } from 'react';
import './Navbar.css';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"; // Opens the menu
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"; 
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      <FaLaptopCode className='icon' title='Code' />
      {isMenuOpen ? (
        <FaTimes size={30} onClick={closeMenu} className='nav-mob-close' />
      ) : (
        <FaBars size={50} onClick={openMenu} className='nav-mob-open' />
      )}
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu('home')}><a className='anchor-link' href='#home'>Home {menu === 'home' && <hr style={{ border: '2px solid #722F37', width: '100%' }} />}</a></li>
        <li onClick={() => setMenu('about')}><a className='anchor-link' href='#about'>About me {menu === 'about' && <hr style={{ border: '2px solid #722F37', width: '100%' }} />}</a></li>
        <li onClick={() => setMenu('services')}><a className='anchor-link' href='#services'>Services {menu === 'services' && <hr style={{ border: '2px solid #722F37', width: '100%' }} />}</a></li>
        <li onClick={() => setMenu('work')}><a className='anchor-link' href='#work'>Portfolio {menu === 'work' && <hr style={{ border: '2px solid #722F37', width: '100%' }} />}</a></li>
        <li onClick={() => setMenu('contact')}><a className='anchor-link' href='#contact'>Contact {menu === 'contact' && <hr style={{ border: '2px solid #722F37', width: '100%' }} />}</a></li>
      </ul>
      <div className='nav-connect'><a className='anchor-link' href='#contact'>Connect With Me</a></div>
    </div>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

const links = [
  {
    id: 1,
    path: '/home', 
    text: 'home',
  }, 
  {
    id: 2,
    path: '/calculator', 
    text: 'Calculator',
  },
  {
      id: 3,
      path: 'about',
      text: 'About'
  },

];

const Navbar = () => (
   <div className={css.Navigation}>
    <h1>Math Magician</h1>
    <ul className={css.items}>
        {links.map((links) => (
            <li key={links.id}>
                {""}
                <NavLink to={links.path} className={css.Nav_link}>
                  {links.text}
                </NavLink>
            </li>
        ))}
    </ul>
   </div>
);

export default Navbar;
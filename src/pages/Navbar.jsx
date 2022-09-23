import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/home',
    text: 'home',
    data_testid: 'home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
    data_testid: 'calculator',
  },
  {
      id: 3,
      path: 'about',
      text: 'About',
      data_testid: 'about',
  },

];

const Navbar = () => (
  <div className={css.Navigation} data_testid='navbar'>
    <h1>Math Magician</h1>
    <ul className={css.items}>
      {links.map((links) => (
        <li key={links.id}>
          <NavLink to={links.path} className={({ isActive }) => `${css.Nav_link} ${(isActive ? css.Active : '')}`} >{links.text}</NavLink>
       </li>
       ))
      }
    </ul>
  </div>
);

export default Navbar;
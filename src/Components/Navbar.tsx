import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-3 px1">
        <a href="/" className="brand-logo">
          React + TypeScript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Cписок дел</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

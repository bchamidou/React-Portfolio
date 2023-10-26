// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  // Your navigation styles
`;

function Navigation() {
  return (
    <NavContainer>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/contact">Resume</Link></li>
      </ul>
    </NavContainer>
  );
}

export default Navigation;


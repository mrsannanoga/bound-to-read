import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1rem;
`;

const NavLink = styled.li`
  color: #fff;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <Navbar>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>Search</NavLink>
        <NavLink>My List</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Nav;

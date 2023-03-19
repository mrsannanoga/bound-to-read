import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #020248
`;

const Logo = styled.div`
  font-size: 3rem;
  color: #fff;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 3rem;
  font-size: 3.5rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-right: 5rem;
  &:hover {
    color: #FFD700;
  }
`;

const Nav = () => {
  return (
    <Navbar>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/list">My List</NavLink>
        <NavLink to="/research">Open Library</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Nav;
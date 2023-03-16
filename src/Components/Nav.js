import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgb(2, 2, 72);
`;

const Logo = styled.div`
  font-size: 4rem;
  color: #fff;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 3rem;
  font-size: 4rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-right: 5rem;

  &:hover {
    color: #ccc;
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
        <NavLink to="/research">Find by Subject</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Nav;


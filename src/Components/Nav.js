// This is the navigation bar component

// Importing required libraries and components
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/img/Storytelling.svg";

// styled components
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #424242;
`;

const Logo = styled.div`
  margin-left: 3rem;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: #f1efef;
  font-family: "Waiting for the Sunrise", cursive;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem;
  font-size: 3rem;
`;

const NavLink = styled(Link)`
  color: #B4A29E;
  cursor: pointer;
  text-decoration: none;
  margin-right: 5rem;

  &:hover {
    color: #f1efef;
  }
`;

// rendering the navigation bar
const Nav = () => {
  return (
    <Navbar>
      <Logo>
        <NavLink to="/">
        <img src={logo} alt="Logo" />
        </NavLink>
      </Logo>
      <Title>Bound to read</Title>
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
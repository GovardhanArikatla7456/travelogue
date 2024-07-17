import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
`;

const StyledNav = styled.nav`
  a {
    margin-right: 15px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>Travelogue</h1>
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
      <Link to="/search">Search by Location</Link>
    </StyledNav>
  </StyledHeader>
);

export default Header;

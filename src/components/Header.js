import React from 'react';
import {NavLink} from "react-router-dom"
import logo from '../assets/images/logo.png'
import styled from "styled-components";
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src={logo} alt='My logo image' className="logo" />
        </NavLink>
        <Nav />
    </MainHeader>
  )
};

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
        height: 5rem;
    }
`;

export default Header

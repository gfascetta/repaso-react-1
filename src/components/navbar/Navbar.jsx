import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { LinkContainerStyled, NavbarContainerStyled } from './NavbarStyles';
import { LogoStyled } from './NavbarStyles';
import { TitleStyled } from './NavbarStyles';

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
        <NavbarContainerStyled>
            <LogoStyled onClick={() => navigate('/')}>
                <img alt='' />
                <TitleStyled>
                    Repaso
                </TitleStyled>
            </LogoStyled>
            <LinkContainerStyled>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/fetch'>Fetch</NavLink>
                <NavLink to='/contexto'>Contexto</NavLink>
            </LinkContainerStyled>
        </NavbarContainerStyled>
    </>
  )
}

export default Navbar;
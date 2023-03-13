import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 96px;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #62B9F0;
  z-index: 100;
  overflow-x: hidden;
  transition: 0.5s;
`;

const Button = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  z-index: 9999;
`;

const ListItemContainer = styled.div`
  padding-right: 2px;
  padding-top: 35px;
  a {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 12px;
    text-decoration: none;
    color: #fff;
    &:hover {
      text-decoration: none;
      color: #fff;
    }
  }
`;


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    screenWidth <= 1156 && (
      <>
        <Button onClick={toggleMenu}>&#9776;</Button>
        <Container style={{ width: isOpen ? '125px' : '0' }}>
          <ListItemContainer>
            <a href="#webDev">WEB DEVELOPMENT</a>
          </ListItemContainer>
          <ListItemContainer>
            <a href="#writing">WRITING</a>
          </ListItemContainer>
          <ListItemContainer>
            <a href="#programming">PROGRAMMING</a>
          </ListItemContainer>
          <ListItemContainer>
            <a href="#about">ABOUT ME</a>
          </ListItemContainer>
        </Container>
      </>
    )
  );
}

export default Menu;

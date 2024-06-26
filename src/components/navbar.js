import styled from "styled-components"
import React, { useState } from "react"
import { Link } from "gatsby";
import './navbar.css';

const StyledNav = styled.nav`
  display: flex;
  z-index: 10;
  align-items: center;
  padding: 0;
  background-color: #09121F;
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  height: 96px;
  align-items: center;
  box-sizing: border-box;
  
  /* Add padding to the top of the content to account for the height of the navbar */
  + div {
    padding-top: 96px;
  }

  .list-item-container {
    width: 400px; /* set the width of the container */
    margin-top: 15px;
  }

  ul {
    display: flex;
    font-weight: 400;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center; /* Center the list items horizontally */
    align-items: center; /* Center the list items vertically */
    width: 100%;
    height: 100%;

    li {
        margin: 0 64px;
        font-size: 14px;
        font-family: 'IBM Plex Sans', sans-serif;
      
        &:first-child {
          margin-left: 0;
        }
        &:nth-child(3) {
          margin-right: 0;
          position: relative;
      
          /* Add a 174px x 1px line underneath "Annotated Portfolio" */
          &::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -1px;
            width: 174px;
            height: 1px;
            background-color: #62B9F0;
          }
      
          div:last-child {
            color: #62B9F0;
            /* remove bottom border from "About Me" */
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      
        /* Styles for the link */
        a {
          color: #fff;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      
        /* Styles for the name, location and portfolio items */
        div {
          display: block;
          font-size: 15px;
          font-family: 'IBM Plex Sans', sans-serif;
      
          /* Styles for the name item */
          &:first-child {
            font-size: 32px;
            margin-bottom: 8px;
            color: #fff;
          }
        }
      }      
  }

  @media (max-width: 1195px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
    
    .list-item-container {
      display: none;
    }
    
    .list-item-container:nth-child(3) {
      display: block;
      item-align: center;
        padding: 0 0 0 45px;
    }
  }

  .annotation { 
    padding: 5px;
    color: #62B9F0;
}

.list {
    display: flex;
    margin-right: auto;
    justify-content: center;
}
   
`;

export default function Navbar() {
  return (
    <StyledNav>
      <ul className="list">
        <div className="list-item-container">
          <li><a href="#webDev">WEB DEVELOPMENT</a></li>
        </div>
        <div className="list-item-container">
          <li><a href="#writing">WRITING</a></li>
        </div>
        <div className="list-item-container">
          <li>
            <div>Derek Gary</div>
            <div>Colorado Springs, CO</div>
            <div className="annotation">Portfolio</div>
          </li>
        </div>
        <div className="list-item-container">
          <li><a href="#programming">PROGRAMMING</a></li>
        </div>
        <div className="list-item-container">
          <li><a href="#about">ABOUT ME</a></li>
        </div>
      </ul>
      <Link className="resume-link" to="/resume">
        Resume
      </Link>
    </StyledNav>
  )
}
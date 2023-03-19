import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Menu from "../components/menu";
import {
  container, heroButton, heroImage, tagFooter, tagLine, webDevSection,
  writingSection, programmingSection, aboutSection, ghCalContainer
} from "./styles/index.module.css";
import ProjectSection from "../components/section";
import styled from "styled-components";
import Arrow from "../components/arrow";
import axios from 'axios';
import 'github-calendar/dist/github-calendar.css';
import GithubProfileCalendar from "../components/GithubProfileCalendar";

const IndexPage = () => {

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Menu />

      <div className={container}>
        <Navbar />
        <div className={tagLine}>
          <h2>Building websites and stories that make an impression.</h2>
          <div className={tagFooter}>
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "20px",
              padding: "20px",
              marginBottom: "20px"
            }}>
              <StaticImage src="../images/me-circle.png" alt="Derek Gary" placeholder="blurred" layout="fixed" width={80} height={80} style={{ borderRadius: "50%", marginRight: "20px" }} />
              <div>
                <h3 style={{ margin: "0", fontWeight: "bold" }}>Derek Gary</h3>
                <p style={{ margin: "0" }}>Software Developer</p>
              </div>
            </div>
            <h3>Want to tell your brand's story through compelling web content? Let's talk.</h3>
          </div>
          <button className={heroButton} onClick={scrollToAbout}>Contact Me</button>
        </div>
        <StaticImage className={heroImage} src="../images/super.png" alt="A Pixel City"
          object-fit="none"
          layout="fullWidth"
        />
        <Arrow sectionId="webDev" />
      </div>

      <div className={container} id="webDev">
        <div className={webDevSection}>
          <h2>Web Development</h2>
          <p>Below, you will find the annotations for each project along with links to the files themselves.</p>
          <ProjectSection
            imageSrc1="https://www.figma.com/file/eGpJInUJIAjnQzypCssFc4/TCID-3160-Portfolio?node-id=20%3A621&t=aVSA2hzBIcgMwYNF-1"
            title1="UI/UX Design"
            description1="This Figma file was designed for a website project in my Technological Adaptability course.
            The purpose of this project was to create a website design that could assist me in developing an aesthetically pleasing online portfolio. 
            The process involved researching and gathering information about how to use Figma, creating a wireframe, and designing a prototype ontop of the wireframe.
            Through this process, I overcame challenges in balancing functionality and design while keeping the user in mind. 
            This technology-rich project was created using Figma, a collaborative design tool that allowed for real-time feedback and seamless integration with the website development process."

            title2="Personal Website"
            imageSrc2="http://derekgary.com"
            description2="This personal website was created for my Secure Mobile Cloud Computing course.
            The purpose of this project was to understand the basics of HTML, CSS, and JavaScript. 
            The process involved researching best practices for web design and development, creating wireframes and mockups in Figma, and writing and implementing code. 
            Challenges included debugging code and ensuring responsiveness across different devices. "
          />
          <Arrow sectionId="writing" />
        </div>
      </div>

      <div className={container} id="writing">
        <div className={writingSection}>
          <h2>Writing</h2>
          <p></p>
          <ProjectSection
            title1="Designing Technical Communication"
            imageSrc1="https://drive.google.com/file/d/1-MolYZQTxEUi3z2tSCDgyoqTUtlgWBFA/view?usp=share_link"
            description1="This PDF document was created for my Advanced Professional and Technical Writing course.
            This project aimed to show my instructor that I could respond to the rhetorical situation of designing a water safety handout for my local community from the perspective of a technical communicator at a water and sanitation company.
             The technology-rich aspect involved using Adobe InDesign to create a visually appealing and professional-looking handout that effectively communicated important water safety information.
             Challenges included balancing the needs of the audience and the organization while adhering to the conventions of technical communication."

            title2="Feasibility Report: Emergency Call Boxes"
            imageSrc2="https://drive.google.com/file/d/1AJAIb6txFTXehyPxBM6r1TON2YylhuKX/view?usp=sharing"
            description2="This PDF document was created for my Technical Writing & Presentation course.
            This project aimed to show my instructor that I could respond to the rhetorical situation of
             designing a feasibility report detailing wether the installation of emergency call boxes at
             the University of Colorado Colorado Springs would be a viable solution. The technology-rich
             aspect involved using Adobe InDesign to create a visually appealing and professional-looking
             feasibility report that effectively communicated important information. Challenges included
             ensuring that the report was clear and concise, and the information used was accurate and relevant."
          />
          <Arrow sectionId="programming" />
        </div>
      </div>

      <div className={container} id="programming">
        <div className={programmingSection}>
          <h2>Programming</h2>
          <p></p>
          <ProjectSection
            title1="C# Wordle Application"
            imageSrc1="https://github.com/DerekGary/Wurdle"
            description1="This Github repository represents the C# Wordle application that I created for my
            Advanced Object Oriented Programming Course at the University of Colorado Colorado Springs. The
            project aimed to show my instructor that I understood how to use Windows Forms and C# to create a
            functional application. The technology-rich aspect involved using Visual Studio to create a visually
            appealing and professional-looking application that utilized the MVC design pattern. Challenges
            included debugging code and ensuring that the application was clear and concise."
            title2="Linear Domination Game"
            imageSrc2="https://github.com/DerekGary/CS2300-Programming-Assignments/tree/main/Assignment%202"
            description2="This project represents the Linear Domination Game that I created for my Linear Algebra
            course at the University of Colorado Colorado Springs. The project aimed to show my instructor that
            I understood how to use C++ to create a console application which used Bresenham's Line Generation
            Algorithm to correctly draw lines on the screen. The technology-rich aspect involved using Visual
            Studio Code to create the application. Challenges included working through the logic of the game,
            debugging code, and ensuring that the application was accurate in its calculations."
          />
          <Arrow sectionId="about" />
        </div>
      </div>

      <div className={container} id="about">
        <div className={aboutSection}>
          <h2>About Me</h2>
          <div>
            <p>Name: Derek Gary</p>
            <p>Major: Computer Science</p>
            <p>Year: Senior</p>
            <p>Interests: Web Development, UI/UX Design, Writing, Programming, and Video Games</p>
            <div style={{ margin: "10px 0 0 0" }}>
              <h3 style={{ marginBottom: "10px" }}>Contact Me</h3>
              <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px"
              }}>
                <a href="https://github.com/DerekGary" target="_blank" rel="noreferrer" style={{ marginBottom: "10px" }}>Github</a>
                <a href="" target="_blank" rel="noreferrer" style={{ marginBottom: "10px" }}>LinkedIn</a>
                <a href="" target="_blank" rel="nonreferrer" style={{ marginBottom: "10px" }}>Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default IndexPage
export const Head = () => <title>Home Page</title>

import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby"
import Navbar from "../components/navbar";
import Header from "../components/header";
import Menu from "../components/menu";
import {
  container, heroButton, heroImage, tagFooter, tagLine, webDevSection,
  writingSection, programmingSection, aboutSection, heroContainer
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

      <div className={heroContainer}>
        <Navbar />
        <div className={tagLine}>
          <div className={tagFooter}>
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "20px",
              padding: "20px",
              marginBottom: "20px"
            }}>
              <div style={{ display: "flex", fontFamily: "IBM Plex Sans", width: "100%" }}>
                <StaticImage src="../images/me-circle.png" alt="Derek Gary" placeholder="blurred" layout="fixed" width={100} height={100} style={{ borderRadius: "50%", marginRight: "20px" }} />
                <div style={{ width: "80%" }}>
                  <h3 style={{ margin: "0", fontWeight: "bold" }}>Derek Gary</h3>
                  <p style={{ margin: "0", borderTop: "1px solid #ccc", paddingTop: "10px" }}>My career goal is to become a Software Developer.
                    I am passionate about building websites and stories that make an impression, and I want to use my skills in web development, writing, and programming to tell compelling stories through web content.</p>
                </div>
              </div>

            </div>

          </div>
          <button className={heroButton} onClick={scrollToAbout}>About Me</button>
          <button className={heroButton} onClick={() => navigate("/resume")}>
            Resume
          </button>
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
            description1=<ul><li>Designed an aesthetically pleasing online portfolio using Figma for a Technological Adaptability course</li>
              <li>Developed skills in wireframing, prototyping, and balancing functionality and design with user-centric approach</li>
              <li>Leveraged Figma's real-time collaboration and seamless integration with website development for effective project execution</li>
            </ul>
            title2="Personal Website"
            imageSrc2="http://derekgary.com"
            description2=<ul>
              <li>Developed a personal website in Secure Mobile Cloud Computing course to learn HTML, CSS, and JavaScript basics</li>
              <li>Conducted research on web design best practices, created wireframes and mockups in Figma, and implemented code</li>
              <li>Overcame challenges in debugging code and ensuring responsiveness across various devices</li>
            </ul>
          ></ProjectSection>
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
        </div>
      </div>

      <div className={container} id="about">
        <div className={aboutSection}>
          <h2>About Me</h2>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px"
          }}>
            <div style={{ width: "100%", maxWidth: "600px" }}>
              <h3 style={{ marginBottom: "10px" }}>Biography</h3>
              <p>I'm Derek Gary, a senior studying Computer Science at University of Colorado, Colorado Springs. I was born and raised in the South, and have always had a passion for technology and creating things. I'm particularly interested in web development, UI/UX design, writing, programming, and video games.</p>
              <hr style={{ borderTop: "1px solid #ccc", margin: "20px 0" }} />
              <div style={{ marginBottom: "10px" }}>
                <h3>Interests</h3>
                <p>Web Development, UI/UX Design, Writing, Programming, Video Games</p>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <h3>Contact Me</h3>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px"
                }}>
                  <a href="https://github.com/DerekGary" target="_blank" rel="noreferrer" style={{ marginBottom: "10px" }}>Github</a>
                  <a href="" target="_blank" rel="noreferrer" style={{ marginBottom: "10px" }}>LinkedIn</a>
                  <a href="/resume" target="_blank" rel="noopener noreferrer" style={{ marginBottom: "10px" }}>Resume</a>
                </div>
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

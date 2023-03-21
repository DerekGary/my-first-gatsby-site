import React from 'react';
import styled from 'styled-components';
import { projectImage } from './section.module.css';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const SectionWrapper = styled.div`
  display: grid;
  font-family: 'IBM Plex Sans', sans-serif;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  color: black;
  margin: 2%;
  margin-left: 20%;
  margin-right: 20%;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    margin-left: 5%;
    margin-right: 5%;
  }

  @media (max-width: 480px) {
    margin-left: 2%;
    margin-right: 2%;
  }
`;



const ProjectImage = styled(StaticImage)`

`;

const ProjectWrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  margin-top: 20px;
`;

const ProjectDescription = styled.p`
  text-align: left;
`;

const ProjectSection = ({ title1, imageSrc1, description1, title2, imageSrc2, description2 }) => {

  return (
    <SectionWrapper>
      <ProjectWrapper>
        <ProjectTitle>{title1}</ProjectTitle>
        <ProjectDescription>{description1}</ProjectDescription>
        <a href={imageSrc1} target="_blank" rel="noreferrer">Link to Project</a>
      </ProjectWrapper>
      <ProjectWrapper>
        <ProjectTitle>{title2}</ProjectTitle>
        <ProjectDescription>{description2}</ProjectDescription>
        <a href={imageSrc2} target="_blank" rel="noreferrer">Link to Project</a>
      </ProjectWrapper>
    </SectionWrapper>
  );
};


export default ProjectSection;

import React from 'react';
import styled from 'styled-components';

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
`;

const ArrowIcon = styled.i`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  animation: arrowPulse 2s infinite;
  animation-direction: alternate;
  @keyframes arrowPulse {
    0% {
      transform: rotate(45deg) scale(1);
    }
    100% {
      transform: rotate(45deg) scale(1.5);
    }
  }
`;

const Arrow = ({ sectionId }) => {
  const handleClick = () => {
    const nextSection = document.querySelector(`#${sectionId}`);
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ArrowWrapper onClick={handleClick}>
      <ArrowIcon />
    </ArrowWrapper>
  );
};

export default Arrow;

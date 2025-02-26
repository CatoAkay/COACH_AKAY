import React from "react";
import styled from "styled-components";

const StyledExpectSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9); // Dark background with transparency
`;

const StyledExpectTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5); // Shadow for emphasis
`;

const StyledExpectDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 20px auto;
    color: #d4d4d4;
`;

const StyledImageContainer = styled.div`
    position: relative;
    margin: 30px auto;
    display: inline-block;
    overflow: hidden;
    border-radius: 15px; // Rounded corners for modern look
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); // Deep shadow for depth
    max-width: 600px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05); // Slight zoom effect on hover
    }

    &:hover .overlay-text {
        opacity: 1; // Show overlay text on hover
    }
`;

const StyledExpectImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 15px;
`;

const StyledOverlayText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5); // Semi-transparent overlay
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    opacity: 0; // Initially hidden
    transition: opacity 0.3s ease;
    border-radius: 15px;
`;

function Expect() {
  return (
    <StyledExpectSection id="expect">
      <StyledExpectTitle>What to Expect</StyledExpectTitle>
      <StyledExpectDescription>
        With my coaching, you'll receive tailored programs, personalized
        nutrition advice, and constant support. You'll push your boundaries and
        achieve results you never thought possible.
      </StyledExpectDescription>
      <StyledImageContainer>
        <StyledExpectImage
          src="/pic/cato3.jpg"
          alt="What to Expect"
        />
        <StyledOverlayText className="overlay-text">
          "Believe in yourself and you’ll be unstoppable!"
        </StyledOverlayText>
      </StyledImageContainer>
    </StyledExpectSection>
  );
}

export default Expect;

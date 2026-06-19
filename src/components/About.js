import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9); // Dark background with transparency
`;

const StyledTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #dcdcdc; // Light gray for the title
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;
`;

const StyledDescription = styled.p`
    font-size: 1.2rem;
    margin: 20px auto;
    max-width: 800px;
    line-height: 1.8;
    color: #b0b0b0; // Darker gray for description
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledImageContainer = styled.div`
    position: relative;
    margin: 30px auto;
    display: inline-block;
    overflow: hidden;
    border-radius: 15px; // Rounded corners for modern look
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); // Deep shadow for depth
    max-width: 400px; // Limiting the image width to match the original size
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05); // Slight zoom on hover for the container (includes image and shadow)
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7); // Stronger shadow on hover
    }

    &:hover img {
        transform: scale(1.05); // Slight zoom on hover for the image
    }

    &:hover > div {
        opacity: 1; // Make text visible when image is hovered
    }
`;

const StyledExpectImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 15px;
    transition: transform 0.3s ease;
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
    background: rgba(0, 0, 0, 0.5); // Dark background with transparency
    color: #ffffff; // White text color
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0; // Initially hidden
    transition: opacity 0.3s ease;
    border-radius: 15px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8); // Light text shadow for readability
`;

function About() {
  return (
    <StyledAboutSection id="about">
      {/* About Me Section */}
      <StyledTitle>About Me</StyledTitle>
      <StyledDescription>
        Hi, I'm Akay — a Norwegian CrossFit athlete. I offer experience-based coaching to help you move
        better, get stronger, and build habits that last. With years of experience in CrossFit and training,
        I focus on holistic development, building both physical strength and mental resilience.
      </StyledDescription>
      <StyledImageContainer>
        <StyledExpectImage
          src="/pic/cato1.jpg"
          alt="Akay – CrossFit athlete and coach"
        />
        <StyledOverlayText>
          "Your potential is endless. Believe in yourself!"
        </StyledOverlayText>
      </StyledImageContainer>
    </StyledAboutSection>
  );
}

export default About;

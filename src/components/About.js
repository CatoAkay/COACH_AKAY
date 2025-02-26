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
    line-height: 1.6;
    color: #b0b0b0; // Darker gray for description
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 20px 0;

    li {
        font-size: 1.2rem;
        margin: 10px 0;
        color: #b0b0b0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
`;

const StyledImageContainer = styled.div`
    position: relative;
    margin: 30px auto;
    display: inline-block;
    overflow: hidden;
    border-radius: 15px; // Rounded corners for modern look
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); // Deep shadow for depth
    max-width: 400px; // Limiting the image width to match the original size
    height: auto;
    transition: transform 0.3s ease; // Smooth scaling transition
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
    background: rgba(0, 0, 0, 0.5); // Dark background with transparency
    color: #ffffff; // White text color
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    opacity: 0; // Initially hidden
    transition: opacity 0.3s ease;
    border-radius: 15px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8); // Light text shadow for readability
`;

const StyledImageContainerHover = styled(StyledImageContainer)`
    &:hover ${StyledExpectImage} {
        transform: scale(1.05); // Slight zoom on hover for the image
    }
    &:hover ${StyledOverlayText} {
        opacity: 1; // Make text visible when image is hovered
    }
    &:hover {
        transform: scale(1.05); // Slight zoom on hover for the container (includes image and shadow)
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7); // Stronger shadow on hover
    }
`;

function About() {
  return (
    <StyledAboutSection id="about">
      {/* About Me Section */}
      <StyledTitle>About Me</StyledTitle>
      <StyledDescription>
        Hi, I'm Akay, a certified coach passionate about helping you reach your full potential. Whether it's fitness,
        health, or well-being, I'm here to guide you every step of the way.
      </StyledDescription>
      <StyledImageContainerHover>
        <StyledExpectImage
          src="/pic/cato1.jpg"
          alt="About Akay"
        />
        <StyledOverlayText>
          "Your potential is endless. Believe in yourself!"
        </StyledOverlayText>
      </StyledImageContainerHover>

      {/* What to Expect Section */}
      <StyledTitle>What to Expect</StyledTitle>
      <StyledList>
        <li>Personalized coaching plans tailored to your needs</li>
        <li>Weekly check-ins and progress tracking</li>
        <li>Support and motivation to keep you going</li>
      </StyledList>
      <StyledImageContainerHover>
        <StyledExpectImage
          src="/pic/cato2.jpg"
          alt="What to Expect"
        />
        <StyledOverlayText>
          "Push beyond your limits. Success is waiting!"
        </StyledOverlayText>
      </StyledImageContainerHover>

      <StyledTitle>More Info</StyledTitle>
      <StyledDescription>
        Hi! I'm Akay, a dedicated fitness coach passionate about helping people reach their full potential. With years
        of experience in CrossFit and personal training, I focus on holistic development, building both physical
        strength and mental resilience.
      </StyledDescription>
    </StyledAboutSection>
  );
}

export default About;

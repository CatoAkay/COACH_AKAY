import React from "react";
import styled from "styled-components";

const HeaderSection = styled.header`
    height: 100vh;
    position: relative;
    background-image: url("/pic/cato1.jpg");
    background-size: cover;
    background-position: 50% 24%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7); /* Slightly darker overlay for better contrast */
        z-index: 1;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    padding: 20px;
    position: relative;
    color: #dcdcdc; /* Lighter gray for better readability */
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9); /* Stronger shadow for better contrast */
    font-family: 'Arial Black', sans-serif; /* A bolder font for emphasis */
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    color: #ffffff; /* White color for better contrast */
    margin-top: 10px; /* Space between title and subtitle */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Strong shadow for depth */
`;

function Header() {
  return (
    <HeaderSection>
      <Title>Akay Coaching</Title>
      <Subtitle>Your Journey to Fitness Awaits</Subtitle>
    </HeaderSection>
  );
}

export default Header;

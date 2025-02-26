import styled from "styled-components";
import React from 'react';

const FooterContainer = styled.div`
    background-color: rgba(30, 30, 30, 0.9); // Slightly lighter dark background
    padding: 20px 0; // Vertical padding
    text-align: center; // Center the text
`;

const FooterText = styled.p`
    color: #e0e0e0; // Lighter gray for better contrast
    margin: 0; // Remove default margin
    font-size: 1rem; // Adjust font size
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); // Subtle shadow for depth
`;

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Akay Coaching. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default FooterSection;

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
    padding: 0 20px;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    padding: 20px;
    position: relative;
    z-index: 2;
    color: #696969;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.9);
    font-family: 'Arial Black', sans-serif;
    margin: 0;

    @media (max-width: 600px) {
        font-size: 2.2rem;
        padding: 10px 0;
    }
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    color: #696969;
    margin-top: 10px;
    position: relative;
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

    @media (max-width: 600px) {
        font-size: 1.1rem;
        word-break: break-word;
    }
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
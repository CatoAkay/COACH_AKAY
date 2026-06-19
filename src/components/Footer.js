import React from 'react';
import styled from "styled-components";

const FooterWrapper = styled.footer`
    background-color: rgba(15, 15, 15, 0.95);
    padding: 24px 20px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
`;

const FooterText = styled.p`
    color: #a0a0a0;
    margin: 0;
    font-size: 0.95rem;
`;

function Footer() {
    const year = new Date().getFullYear();
    return (
        <FooterWrapper>
            <FooterText>&copy; {year} Akay Coaching. All rights reserved.</FooterText>
        </FooterWrapper>
    );
}

export default Footer;

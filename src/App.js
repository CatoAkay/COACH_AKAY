import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Header from "./components/Header";
import About from "./components/About";
import Expect from "./components/Expect";
import Price from "./components/Price";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import GlobalStyle from './components/GlobalStyle';
import Feedback from './components/Feedback';

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background: linear-gradient(135deg, rgba(20, 20, 20, 0.9), rgba(0, 0, 0, 0.8));
    padding: 15px 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    border-radius: 0 0 20px 20px;
`;

const NavLink = styled(Link)`
    color: #dcdcdc;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    white-space: nowrap;

    &.active {
        color: #f76c6c;
        text-decoration: underline;
    }

    &:hover {
        color: #f76c6c;
        transform: scale(1.1);
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
        padding: 5px 8px;
    }
`;

const navLinks = [
    { to: "about", label: "About Me" },
    { to: "expect", label: "What to Expect" },
    { to: "price", label: "Price" },
    { to: "contact", label: "Contact" },
];

function App() {
    return (
        <>
            <GlobalStyle />
            <Navigation aria-label="Main navigation">
                {navLinks.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        smooth={true}
                        duration={350}
                        activeClass="active"
                        spy={true}
                        offset={-70}
                    >
                        {label}
                    </NavLink>
                ))}
            </Navigation>
            <main>
                <Header />
                <About />
                <Expect />
                <Price />
                <Feedback />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}

export default App;

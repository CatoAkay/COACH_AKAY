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
import './App.css';

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
`;

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
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
    cursor: pointer; /* Ensures the cursor is a pointer on hover */

    &.active {
        color: #f76c6c;
        text-decoration: underline;
    }

    &:hover {
        color: #f76c6c;
        transform: scale(1.1);
    }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Navigation>
        <NavLink to="about" smooth={true} duration={500} activeClass="active">About Me</NavLink>
        <NavLink to="expect" smooth={true} duration={500} activeClass="active">What to Expect</NavLink>
        <NavLink to="price" smooth={true} duration={500} activeClass="active">Price</NavLink>
        <NavLink to="contact" smooth={true} duration={500} activeClass="active">Contact</NavLink>
      </Navigation>
      <Header />
      <About />
      <Expect />
      <Price />
      <Feedback />
      <ContactForm />
      <Footer />
    </Container>
  );
}

export default App;

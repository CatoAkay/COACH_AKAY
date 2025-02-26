import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9);
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #dcdcdc;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 40px;
`;

const PriceTable = styled.div`
    margin: 20px auto;
    max-width: 800px;
    display: flex;
    justify-content: space-around;
`;

const PriceBox = styled.div`
    padding: 20px;
    border: 1px solid #333;
    background-color: rgba(30, 30, 30, 0.8);
    border-radius: 10px;
    color: #b0b0b0;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

    h3 {
        color: #dcdcdc;
        margin-bottom: 10px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
    }

    &:hover {
        transform: translateY(-5px); // Slight lift effect
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7); // Stronger shadow for emphasis
        background-color: rgba(50, 50, 50, 0.9); // Slightly lighter background on hover
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #2b4d4d; // Dark teal color for the button
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 15px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #1f3838; // Even darker shade on hover for contrast
        transform: scale(1.05); // Slight scaling on hover for effect
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: rgba(30, 30, 30, 0.9);
    padding: 20px;
    border-radius: 10px;
    color: #dcdcdc;
    text-align: center;
    width: 300px;

    h4 {
        margin-bottom: 15px;
    }

    button {
        background-color: #2b4d4d; // Dark teal color for the button
        margin-top: 20px;
    }
`;

function Price() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (plan) => {
    setModalContent(plan);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Section id="price">
      <Title>Price</Title>
      <PriceTable>
        <PriceBox>
          <h3>Basic Plan</h3>
          <p>$50 / month</p>
          <Button onClick={() => handleOpenModal("This plan includes basic coaching services and weekly check-ins.")}>
            View Details
          </Button>
        </PriceBox>
        <PriceBox>
          <h3>Premium Plan</h3>
          <p>$100 / month</p>
          <Button onClick={() => handleOpenModal("This plan includes personalized coaching, weekly check-ins, and unlimited support.")}>
            View Details
          </Button>
        </PriceBox>
      </PriceTable>

      {isModalOpen && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h4>{modalContent}</h4>
            <Button onClick={handleCloseModal}>Close</Button>
          </ModalContent>
        </ModalBackground>
      )}
    </Section>
  );
}

export default Price;

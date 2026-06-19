import React, { useState, useEffect } from "react";
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

const PriceGrid = styled.div`
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
`;

const PriceBox = styled.div`
    padding: 28px 24px;
    border: 1px solid #333;
    background-color: rgba(30, 30, 30, 0.8);
    border-radius: 12px;
    color: #b0b0b0;
    text-align: center;
    width: 220px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

    h3 {
        color: #dcdcdc;
        margin: 0 0 8px;
        font-size: 1.3rem;
    }

    p {
        font-size: 1.8rem;
        font-weight: bold;
        color: #f0f0f0;
        margin: 0 0 16px;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
        background-color: rgba(50, 50, 50, 0.9);
    }
`;

const Button = styled.button`
    padding: 10px 22px;
    background-color: #2b4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #1f3838;
        transform: translateY(-1px);
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    padding: 20px;
`;

const ModalContent = styled.div`
    background-color: #1e1e1e;
    padding: 32px 28px;
    border-radius: 12px;
    color: #dcdcdc;
    text-align: center;
    width: 100%;
    max-width: 360px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);

    h3 {
        margin: 0 0 12px;
        font-size: 1.4rem;
        color: #ffffff;
    }

    p {
        margin: 0 0 24px;
        line-height: 1.7;
        color: #b0b0b0;
        font-size: 1rem;
    }
`;

const plans = [
    {
        id: "basic",
        name: "Basic Plan",
        price: "$50 / month",
        description: "Includes basic coaching services and weekly check-ins to keep you on track.",
    },
    {
        id: "premium",
        name: "Premium Plan",
        price: "$100 / month",
        description: "Includes personalized coaching, weekly check-ins, nutrition guidance, and unlimited support.",
    },
];

function Price() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        if (!selectedPlan) return;
        const handleKey = (e) => { if (e.key === "Escape") setSelectedPlan(null); };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedPlan]);

    return (
        <Section id="price">
            <Title>Price</Title>
            <PriceGrid>
                {plans.map((plan) => (
                    <PriceBox key={plan.id}>
                        <h3>{plan.name}</h3>
                        <p>{plan.price}</p>
                        <Button onClick={() => setSelectedPlan(plan)}>View Details</Button>
                    </PriceBox>
                ))}
            </PriceGrid>

            {selectedPlan && (
                <ModalOverlay
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                    onClick={() => setSelectedPlan(null)}
                >
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h3 id="modal-title">{selectedPlan.name}</h3>
                        <p>{selectedPlan.description}</p>
                        <Button onClick={() => setSelectedPlan(null)}>Close</Button>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Section>
    );
}

export default Price;

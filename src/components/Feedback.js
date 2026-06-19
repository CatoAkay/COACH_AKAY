import React from 'react';
import styled from 'styled-components';

const FeedbackSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9);
`;

const FeedbackTitle = styled.h2`
    font-size: 3rem;
    color: #dcdcdc;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 40px;
`;

const FeedbackGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
`;

const FeedbackCard = styled.article`
    background-color: rgba(30, 30, 30, 0.8);
    border-radius: 10px;
    padding: 24px 20px;
    width: 280px;
    color: #b0b0b0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    border: 1px solid transparent;
    text-align: left;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
        background-color: rgba(40, 40, 40, 0.9);
        border-color: rgba(220, 220, 220, 0.2);
    }
`;

const Quote = styled.blockquote`
    font-size: 1rem;
    font-style: italic;
    line-height: 1.7;
    margin: 0 0 12px;
    color: #c0c0c0;
`;

const Author = styled.p`
    margin: 0;
    color: #dcdcdc;
    font-weight: bold;
    font-size: 0.95rem;
`;

const feedbackData = [
    { id: 1, name: "Sarah Johnson", feedback: "Working with Akay has been life-changing! I've never felt better." },
    { id: 2, name: "Emily Davis", feedback: "The coaching sessions were tailored perfectly to my needs. Highly recommend!" },
    { id: 3, name: "Robert Brown", feedback: "Incredible support and guidance! I've achieved results I never thought possible." },
];

function Feedback() {
    return (
        <FeedbackSection id="feedback">
            <FeedbackTitle>What Our Clients Say</FeedbackTitle>
            <FeedbackGrid>
                {feedbackData.map(({ id, name, feedback }) => (
                    <FeedbackCard key={id}>
                        <Quote>"{feedback}"</Quote>
                        <Author>— {name}</Author>
                    </FeedbackCard>
                ))}
            </FeedbackGrid>
        </FeedbackSection>
    );
}

export default Feedback;

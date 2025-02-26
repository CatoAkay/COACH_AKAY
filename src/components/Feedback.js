import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9); // Dark background
`;

const FeedbackTitle = styled.h2`
    font-size: 3rem;
    color: #dcdcdc; // Light gray for the title
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 40px; // Space below the title
`;

const FeedbackList = styled.div`
    display: flex;
    flex-wrap: wrap; // Allow cards to wrap on smaller screens
    justify-content: center; // Center align cards
`;

const FeedbackCard = styled.div`
    background-color: rgba(30, 30, 30, 0.8); // Slightly lighter background
    border-radius: 10px; // Rounded corners
    padding: 20px;
    margin: 15px;
    max-width: 300px; // Limit width for readability
    color: #b0b0b0; // Darker gray for text
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); // Subtle shadow for depth
    transition: all 0.3s ease-in-out; // Smooth transition on hover

    p {
        font-size: 1rem; // Adjust font size for feedback
        font-style: italic; // Italicize feedback text
    }

    h4 {
        margin-top: 10px; // Space above the name
        color: #dcdcdc; // Light gray for name
        font-weight: bold; // Bold for emphasis
    }

    // Hover Effect
    &:hover {
        transform: translateY(-5px); // Slight lift effect
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7); // Deeper shadow for emphasis
        background-color: rgba(40, 40, 40, 0.9); // Slightly darker background on hover
        border: 2px solid #dcdcdc; // Adding border to highlight the card
    }
`;

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      name: "Sarah Johnson",
      feedback: "Working with Akay has been life-changing! I've never felt better."
    },
    {
      id: 2,
      name: "Emily Davis",
      feedback: "The coaching sessions were tailored perfectly to my needs. Highly recommend!"
    },
    {
      id: 3,
      name: "Robert Brown",
      feedback: "Incredible support and guidance! I've achieved results I never thought possible."
    }
  ];

  return (
    <FeedbackContainer id="feedback">
      <FeedbackTitle>What Our Customers Say</FeedbackTitle>
      <FeedbackList>
        {feedbackData.map((item) => (
          <FeedbackCard key={item.id}>
            <p>"{item.feedback}"</p>
            <h4>- {item.name}</h4>
          </FeedbackCard>
        ))}
      </FeedbackList>
    </FeedbackContainer>
  );
};

export default Feedback;

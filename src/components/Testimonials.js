import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: rgba(20, 20, 20, 0.9); // Dark background

  // Additional styles to avoid any influence on other components
  & img {
    display: none; // Hide images in this section to avoid affecting others
  }
`;

const TestimonialsTitle = styled.h2`
  font-size: 3rem;
  color: #dcdcdc; // Light gray for the title
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  margin-bottom: 40px; // Space below the title
`;

const TestimonialsList = styled.div`
  display: flex;
  flex-direction: column; // Stack testimonials vertically
  align-items: center; // Center align testimonials
`;

const TestimonialItem = styled.div`
  background-color: rgba(30, 30, 30, 0.8); // Slightly lighter background
  border-radius: 10px; // Rounded corners
  padding: 20px;
  margin: 15px 0;
  max-width: 600px; // Limit width for readability
  color: #b0b0b0; // Darker gray for text
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); // Subtle shadow for depth

  p {
    font-size: 1.2rem; // Increase font size for testimonials
    font-style: italic; // Italicize testimonial text
  }

  h4 {
    margin-top: 10px; // Space above the name
    color: #dcdcdc; // Light gray for name
    font-weight: bold; // Bold for emphasis
  }
`;

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      testimonial: "Akay Coaching changed my life! I'm stronger, more confident, and healthier than ever."
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial: "The coaching sessions were transformative. Akay helped me unlock my true potential."
    },
    {
      id: 3,
      name: "Mike Johnson",
      testimonial: "With Akay's guidance, I achieved my fitness goals in a way I never thought possible."
    }
  ];

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsTitle>What People Are Saying</TestimonialsTitle>
      <TestimonialsList>
        {testimonialsData.map((testimonial) => (
          <TestimonialItem key={testimonial.id}>
            <p>"{testimonial.testimonial}"</p>
            <h4>- {testimonial.name}</h4>
          </TestimonialItem>
        ))}
      </TestimonialsList>
    </TestimonialsContainer>
  );
};

export default Testimonials;

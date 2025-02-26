import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9); // Dark background
`;

const ContactTitle = styled.h2`
    font-size: 3rem;
    color: #dcdcdc; // Light gray for the title
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 40px; // Space below the title
`;

const Form = styled.form`
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 15px;
    margin: 10px 0;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px; // Rounded corners
    background-color: rgba(255, 255, 255, 0.1); // Light background
    color: #b0b0b0; // Darker gray text
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); // Subtle shadow

    &::placeholder {
        color: #b0b0b0; // Placeholder color
    }
`;

const TextArea = styled.textarea`
    padding: 15px;
    margin: 10px 0;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px; // Rounded corners
    background-color: rgba(255, 255, 255, 0.1); // Light background
    color: #b0b0b0; // Darker gray text
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); // Subtle shadow

    &::placeholder {
        color: #b0b0b0; // Placeholder color
    }
`;

const Button = styled.button`
    padding: 15px;
    background-color: #2b4d4d; // Dark teal color for the button
    color: white;
    border: none;
    border-radius: 5px; // Rounded corners
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s; // Smooth transition

    &:hover {
        background-color: #1f3838; // Even darker shade on hover for contrast
    }
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a formatted message including name and email
    const message = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: message,
    };

    emailjs.send("service_2iorjdh", "template_vhscy1f", emailParams, "tAULykMHD46veExPq")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Optionally reset the form after submission
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email.", err);
      });
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextArea
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactSection>
  );
}

export default ContactForm;

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";

const ContactSection = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: rgba(20, 20, 20, 0.9);
`;

const ContactTitle = styled.h2`
    font-size: 3rem;
    color: #dcdcdc;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 40px;
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
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #b0b0b0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    &::placeholder {
        color: #b0b0b0;
    }
`;

const TextArea = styled.textarea`
    padding: 15px;
    margin: 10px 0;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #b0b0b0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    &::placeholder {
        color: #b0b0b0;
    }
`;

const Button = styled.button`
    padding: 15px;
    background-color: #2b4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;

    &:hover:enabled {
        background-color: #1f3838;
    }

    &:disabled {
        background-color: #888;
        cursor: not-allowed;
    }
`;

const ThankYouMessage = styled.div`
    margin-top: 20px;
    color: #dcdcdc;
    font-size: 1.5rem;
`;

const Warning = styled.div`
    color: #ffb347;
    margin-bottom: 10px;
    font-size: 1.1rem;
`;

const spin = keyframes`
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
`;

const Spinner = styled.div`
    margin: 20px auto;
    border: 4px solid #dcdcdc;
    border-top: 4px solid #2b4d4d;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: ${spin} 1s linear infinite;
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2000);
      return;
    }
    setSending(true);

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

    emailjs
      .send("service_2iorjdh", "template_vhscy1f", emailParams, "tAULykMHD46veExPq")
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
        setSending(false);
      })
      .catch((err) => {
        setSending(false);
        console.error("Failed to send email.", err);
      });
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <Form onSubmit={handleSubmit}>
        {showWarning && <Warning>Please fill out all fields before sending.</Warning>}
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={submitted || sending}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={submitted || sending}
        />
        <TextArea
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={submitted || sending}
        />
        {!submitted ? (
          sending ? (
            <Spinner />
          ) : (
            <Button type="submit">Send Message</Button>
          )
        ) : (
          <ThankYouMessage>Thank you! I will be in touch!</ThankYouMessage>
        )}
      </Form>
    </ContactSection>
  );
}

export default ContactForm;
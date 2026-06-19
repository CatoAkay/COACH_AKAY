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
    gap: 4px;
`;

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 8px;
`;

const Label = styled.label`
    color: #b0b0b0;
    font-size: 0.9rem;
    margin-bottom: 4px;
    font-weight: 600;
    letter-spacing: 0.03em;
`;

const sharedInputStyles = `
    padding: 15px;
    font-size: 1.1rem;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #dcdcdc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
    font-family: inherit;

    &::placeholder {
        color: #888;
    }

    &:focus {
        border-color: #2b4d4d;
        box-shadow: 0 0 0 3px rgba(43, 77, 77, 0.4);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const Input = styled.input`${sharedInputStyles}`;

const TextArea = styled.textarea`
    ${sharedInputStyles}
    resize: vertical;
    min-height: 120px;
`;

const Button = styled.button`
    padding: 15px;
    background-color: #2b4d4d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    margin-top: 8px;
    transition: background-color 0.3s, transform 0.2s;

    &:hover:enabled {
        background-color: #1f3838;
        transform: translateY(-1px);
    }

    &:disabled {
        background-color: #555;
        cursor: not-allowed;
    }
`;

const StatusMessage = styled.div`
    margin-top: 20px;
    font-size: 1.1rem;
    padding: 12px 16px;
    border-radius: 5px;
    color: ${({ $type }) => ($type === "error" ? "#ff6b6b" : $type === "success" ? "#69db7c" : "#ffb347")};
    background-color: ${({ $type }) =>
        $type === "error"
            ? "rgba(255, 107, 107, 0.1)"
            : $type === "success"
            ? "rgba(105, 219, 124, 0.1)"
            : "rgba(255, 179, 71, 0.1)"};
    border: 1px solid ${({ $type }) =>
        $type === "error" ? "rgba(255, 107, 107, 0.3)" : $type === "success" ? "rgba(105, 219, 124, 0.3)" : "rgba(255, 179, 71, 0.3)"};
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null); // null | "warning" | "success" | "error"
    const [sending, setSending] = useState(false);

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.message.trim() !== "";

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            setStatus("warning");
            setTimeout(() => setStatus(null), 3000);
            return;
        }
        setSending(true);
        setStatus(null);

        const emailParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                emailParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setFormData({ name: "", email: "", message: "" });
                setStatus("success");
                setSending(false);
            })
            .catch(() => {
                setSending(false);
                setStatus("error");
            });
    };

    return (
        <ContactSection id="contact">
            <ContactTitle>Contact Me</ContactTitle>
            <Form onSubmit={handleSubmit} noValidate>
                <FieldGroup>
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Ola Nordmann"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "success" || sending}
                        autoComplete="name"
                    />
                </FieldGroup>
                <FieldGroup>
                    <Label htmlFor="contact-email">Your Email</Label>
                    <Input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="ola@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "success" || sending}
                        autoComplete="email"
                    />
                </FieldGroup>
                <FieldGroup>
                    <Label htmlFor="contact-message">Your Message</Label>
                    <TextArea
                        id="contact-message"
                        name="message"
                        rows="5"
                        placeholder="Hi Akay, I would like to know more about..."
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "success" || sending}
                    />
                </FieldGroup>

                {status === "warning" && (
                    <StatusMessage $type="warning">Please fill out all fields before sending.</StatusMessage>
                )}
                {status === "error" && (
                    <StatusMessage $type="error">
                        Something went wrong. Please try again or email me directly.
                    </StatusMessage>
                )}
                {status === "success" ? (
                    <StatusMessage $type="success">Thank you! I'll be in touch soon 🙌</StatusMessage>
                ) : sending ? (
                    <Spinner aria-label="Sending…" />
                ) : (
                    <Button type="submit">Send Message</Button>
                )}
            </Form>
        </ContactSection>
    );
}

export default ContactForm;
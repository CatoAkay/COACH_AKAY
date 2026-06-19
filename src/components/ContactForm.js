import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { colors, fonts } from "../theme";

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.bgAlt};
  border-top: 1px solid ${colors.border};

  @media (max-width: 768px) { padding: 90px 6%; }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

const InfoCol = styled.div``;

const SectionLabel = styled.span`
  display: block;
  font-family: ${fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.accent};
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  font-family: ${fonts.display};
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.white};
  line-height: 1;
  margin-bottom: 24px;
`;

const SectionBody = styled.p`
  font-family: ${fonts.body};
  font-size: 1rem;
  line-height: 1.8;
  color: ${colors.textSecondary};
  margin-bottom: 48px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.border};

  &:last-child { border-bottom: none; }
`;

const InfoLabel = styled.span`
  font-family: ${fonts.body};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.accent};
`;

const InfoValue = styled.span`
  font-family: ${fonts.body};
  font-size: 0.95rem;
  color: ${colors.textSecondary};
`;

const FormCol = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-family: ${fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.textSecondary};
`;

const inputBase = `
  padding: 15px 18px;
  font-size: 0.95rem;
  font-family: inherit;
  border: 1px solid ${colors.border};
  border-radius: 2px;
  background: ${colors.surface};
  color: ${colors.textPrimary};
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder { color: ${colors.textMuted}; }

  &:focus {
    border-color: ${colors.accent};
    box-shadow: 0 0 0 3px ${colors.accentDim};
  }

  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

const Input = styled.input`${inputBase}`;
const TextArea = styled.textarea`
  ${inputBase}
  resize: vertical;
  min-height: 140px;
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 17px;
  background: ${colors.accent};
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background: ${colors.accentLight};
    transform: translateY(-1px);
  }

  &:disabled { background: ${colors.textMuted}; cursor: not-allowed; }
`;

const StatusMsg = styled.div`
  padding: 14px 18px;
  border-radius: 2px;
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.6;
  border: 1px solid ${({ $type }) =>
    $type === 'success' ? 'rgba(74,222,128,0.3)' :
    $type === 'error' ? 'rgba(248,113,113,0.3)' : 'rgba(251,191,36,0.3)'};
  background: ${({ $type }) =>
    $type === 'success' ? 'rgba(74,222,128,0.08)' :
    $type === 'error' ? 'rgba(248,113,113,0.08)' : 'rgba(251,191,36,0.08)'};
  color: ${({ $type }) =>
    $type === 'success' ? '#4ade80' :
    $type === 'error' ? '#f87171' : '#fbbf24'};
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  margin: 4px auto;
  width: 22px;
  height: 22px;
  border: 2px solid rgba(255,255,255,0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const isValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) { setStatus('warning'); setTimeout(() => setStatus(null), 3000); return; }
    setSending(true);
    setStatus(null);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
        setSending(false);
      })
      .catch(() => { setSending(false); setStatus('error'); });
  };

  return (
    <Section id="contact">
      <Inner>
        <InfoCol>
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionTitle>Ready to Engineer Your Performance?</SectionTitle>
          <SectionBody>
            Take the first step. Reach out and let's build a plan that works
            for your goals, your schedule, and your ambitions.
          </SectionBody>
          <InfoItem>
            <InfoLabel>Response time</InfoLabel>
            <InfoValue>Within 24 hours</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Coaching spots</InfoLabel>
            <InfoValue>Limited availability — apply now</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Languages</InfoLabel>
            <InfoValue>English & Norwegian</InfoValue>
          </InfoItem>
        </InfoCol>

        <FormCol>
          <Form onSubmit={handleSubmit} noValidate>
            <FieldGroup>
              <Label htmlFor="c-name">Your Name</Label>
              <Input
                id="c-name"
                name="name"
                type="text"
                placeholder="Ola Nordmann"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'success' || sending}
                autoComplete="name"
              />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="c-email">Email Address</Label>
              <Input
                id="c-email"
                name="email"
                type="email"
                placeholder="ola@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'success' || sending}
                autoComplete="email"
              />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="c-message">Message</Label>
              <TextArea
                id="c-message"
                name="message"
                placeholder="Tell me about your goals and what you're looking for..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'success' || sending}
              />
            </FieldGroup>

            {status === 'warning' && (
              <StatusMsg $type="warning">Please fill out all fields before sending.</StatusMsg>
            )}
            {status === 'error' && (
              <StatusMsg $type="error">Something went wrong. Please try again or reach out directly.</StatusMsg>
            )}
            {status === 'success' ? (
              <StatusMsg $type="success">Message sent — I'll be in touch within 24 hours. 🙌</StatusMsg>
            ) : sending ? (
              <SubmitBtn disabled><Spinner /></SubmitBtn>
            ) : (
              <SubmitBtn type="submit">Send Message</SubmitBtn>
            )}
          </Form>
        </FormCol>
      </Inner>
    </Section>
  );
}

export default ContactForm;
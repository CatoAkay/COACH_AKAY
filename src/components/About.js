import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, slideRight, stagger } from '../animations';

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.surface};

  @media (max-width: 768px) { padding: 90px 6%; }
`;

const SectionLabel = styled(motion.span)`
  display: block;
  font-family: ${fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.accent};
  margin-bottom: 16px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${fonts.display};
  font-size: clamp(2.8rem, 5.5vw, 5rem);
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.white};
  line-height: 1;
  margin-bottom: 48px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const TextCol = styled(motion.div)``;

const BodyText = styled.p`
  font-family: ${fonts.body};
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  line-height: 1.85;
  color: ${colors.textSecondary};
  margin-bottom: 20px;
`;

const Pillars = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 48px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

const Pillar = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 28px;
  background: ${colors.surfaceAlt};
  transition: background 0.3s ease;

  &:not(:last-child) { border-bottom: 1px solid ${colors.border}; }
  &:hover { background: ${colors.surfaceElevated}; }
`;

const PillarIcon = styled.div`
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
`;

const PillarText = styled.div`
  h4 {
    font-family: ${fonts.display};
    font-size: 1.1rem;
    font-weight: 600;
    color: ${colors.white};
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 6px;
  }
  p {
    font-family: ${fonts.body};
    font-size: 0.9rem;
    color: ${colors.textSecondary};
    line-height: 1.6;
  }
`;

const ImageCol = styled(motion.div)`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 3/4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.7s ease;
  }

  &:hover img { transform: scale(1.04); }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(8,8,8,0.6) 100%);
    pointer-events: none;
  }
`;

const ImageBadge = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: rgba(8,8,8,0.9);
  border: 1px solid ${colors.border};
  border-left: 3px solid ${colors.accent};
  padding: 14px 20px;
  z-index: 2;
  backdrop-filter: blur(8px);

  span {
    display: block;
    font-family: ${fonts.body};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${colors.accent};
    margin-bottom: 4px;
  }

  strong {
    display: block;
    font-family: ${fonts.display};
    font-size: 1.1rem;
    color: ${colors.white};
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`;

const pillars = [
  { icon: '⚡', title: 'The Engineer', text: 'Systematic thinking. Data-driven decisions. Precision applied to every variable in your training.' },
  { icon: '🏆', title: 'The Athlete', text: 'Norwegian Throwdown Champion. National competitor. I compete at the level I coach.' },
  { icon: '🎯', title: 'The Coach', text: "Every hard lesson from the platform — brought directly into your programming." },
];

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section id="about" ref={ref}>
      <Layout>
        <TextCol variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <SectionLabel variants={fadeUp}>The Story</SectionLabel>
          <SectionTitle variants={fadeUp}>More Than<br />a Coach.</SectionTitle>
          <motion.div variants={fadeUp}>
            <BodyText>
              I'm a senior software engineer who competes at national level in functional fitness.
              That combination is rare — and it shapes everything about how I coach.
            </BodyText>
            <BodyText>
              When I build your program, I bring the same rigor I apply to engineering systems:
              structured progressions, measurable outcomes, and intelligent adaptation.
              This isn't guesswork. This is engineered.
            </BodyText>
          </motion.div>
          <Pillars variants={stagger}>
            {pillars.map(({ icon, title, text }) => (
              <Pillar key={title} variants={fadeUp}>
                <PillarIcon>{icon}</PillarIcon>
                <PillarText>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </PillarText>
              </Pillar>
            ))}
          </Pillars>
        </TextCol>

        <ImageCol variants={slideRight} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <ImageWrapper>
            <img src="/pic/cato2.jpg" alt="Cato Akay in competition" />
          </ImageWrapper>
          <ImageBadge>
            <span>Norwegian Throwdown</span>
            <strong>Champion</strong>
          </ImageBadge>
        </ImageCol>
      </Layout>
    </Section>
  );
}

export default About;

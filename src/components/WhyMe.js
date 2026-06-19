import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger } from '../animations';

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.surfaceAlt};

  @media (max-width: 768px) { padding: 90px 6%; }
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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
  margin-bottom: 64px;
`;

const CompareGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColHeader = styled.div`
  padding: 28px 32px 20px;
  font-family: ${fonts.display};
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 1px solid ${colors.border};
`;

const TypicalHeader = styled(ColHeader)`
  background: ${colors.surfaceAlt};
  color: ${colors.textMuted};
`;

const EliteHeader = styled(ColHeader)`
  background: ${colors.accent};
  color: ${colors.white};
`;

const VsDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: ${colors.surfaceElevated};
  border-left: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  font-family: ${fonts.display};
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.textMuted};
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;

  @media (max-width: 768px) {
    writing-mode: horizontal-tb;
    padding: 20px;
    border-left: none;
    border-right: none;
    border-top: 1px solid ${colors.border};
    border-bottom: 1px solid ${colors.border};
  }
`;

const FeatureCol = styled.div`
  background: ${({ $elite }) => $elite ? 'rgba(59,130,246,0.05)' : colors.surfaceAlt};
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ $elite }) => $elite ? colors.textPrimary : colors.textMuted};
  border-bottom: 1px solid ${colors.border};

  &:last-child { border-bottom: none; }

  &::before {
    content: '${({ $elite }) => $elite ? '✓' : '✗'}';
    color: ${({ $elite }) => $elite ? colors.accent : colors.textMuted};
    font-weight: 700;
    font-size: 0.8rem;
    flex-shrink: 0;
  }
`;

const typical = [
  'Generic programs for all athletes',
  'No performance data tracking',
  'Fitness experience only',
  'Inconsistent check-ins',
  'Short-term focus',
  'Cookie-cutter approach',
];

const elite = [
  '100% personalized to you',
  'Measurable metrics every cycle',
  'Engineering + elite athlete background',
  'Structured weekly accountability',
  'Long-term performance architecture',
  'Adapts to your data, goals & life',
];

function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section id="results" ref={ref}>
      <Inner>
        <motion.div variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <SectionLabel variants={fadeUp}>Why Engineered Coaching</SectionLabel>
          <SectionTitle variants={fadeUp}>The Difference<br />Is Real.</SectionTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <CompareGrid>
            <FeatureCol>
              <TypicalHeader>Typical Coaching</TypicalHeader>
              {typical.map((f) => <FeatureRow key={f}>{f}</FeatureRow>)}
            </FeatureCol>

            <VsDivider>VS</VsDivider>

            <FeatureCol $elite>
              <EliteHeader>Engineered Coaching</EliteHeader>
              {elite.map((f) => <FeatureRow key={f} $elite>{f}</FeatureRow>)}
            </FeatureCol>
          </CompareGrid>
        </motion.div>
      </Inner>
    </Section>
  );
}

export default WhyMe;


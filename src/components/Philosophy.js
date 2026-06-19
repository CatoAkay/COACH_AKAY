import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger, scaleIn } from '../animations';

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.bg};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) { padding: 90px 6%; }
`;

const BgAccent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, ${colors.accentDim} 0%, transparent 70%);
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 80px;
`;

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
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  color: ${colors.white};
  line-height: 1;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  font-family: ${fonts.body};
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${colors.textSecondary};
  max-width: 560px;
  margin: 0 auto;
`;

const PillarsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${colors.border};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled(motion.div)`
  background: ${colors.surfaceAlt};
  padding: 48px 36px;
  position: relative;
  transition: background 0.3s ease;

  &:hover {
    background: ${colors.surfaceElevated};
  }

  &:hover .pillar-number {
    opacity: 0.2;
    transform: scale(1.05);
  }
`;

const PillarNumber = styled.span`
  font-family: ${fonts.display};
  font-size: 5rem;
  font-weight: 700;
  color: ${colors.white};
  opacity: 0.04;
  position: absolute;
  top: 20px;
  right: 24px;
  line-height: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const PillarAccent = styled.div`
  width: 32px;
  height: 3px;
  background: ${colors.accent};
  border-radius: 2px;
  margin-bottom: 28px;
`;

const PillarTitle = styled.h3`
  font-family: ${fonts.display};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 16px;
`;

const PillarText = styled.p`
  font-family: ${fonts.body};
  font-size: 0.95rem;
  line-height: 1.8;
  color: ${colors.textSecondary};
`;

const pillars = [
  {
    num: '01',
    title: 'Structure',
    text: 'Every session has a purpose. Every cycle builds on the last. Programming built on proven periodization models — not random workouts.',
  },
  {
    num: '02',
    title: 'Precision',
    text: 'Data informs every decision. Load management, recovery metrics, competition timing — nothing is left to guesswork or gut feeling.',
  },
  {
    num: '03',
    title: 'Longevity',
    text: 'Train hard, recover smart. Build performance that compounds over years — not weeks. The goal is an athletic career, not a quick result.',
  },
];

function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section id="performance" ref={ref}>
      <BgAccent />
      <Inner>
        <Header
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>The Philosophy</SectionLabel>
            <SectionTitle>Engineered<br />Performance.</SectionTitle>
            <SectionSubtitle>
              Where systematic engineering meets elite athletic discipline. Built on three
              non-negotiable principles.
            </SectionSubtitle>
          </motion.div>
        </Header>

        <PillarsGrid
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {pillars.map(({ num, title, text }) => (
            <PillarCard key={title} variants={scaleIn}>
              <PillarNumber className="pillar-number">{num}</PillarNumber>
              <PillarAccent />
              <PillarTitle>{title}</PillarTitle>
              <PillarText>{text}</PillarText>
            </PillarCard>
          ))}
        </PillarsGrid>
      </Inner>
    </Section>
  );
}

export default Philosophy;


import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { colors, fonts } from '../theme';
import { fadeUp, stagger } from '../animations';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 680px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 0 6% 10vh;

  @media (max-width: 768px) {
    align-items: center;
    padding: 80px 6% 60px;
  }
`;

const BgImage = styled(motion.div)`
  position: absolute;
  inset: -10%;
  background-image: url('/pic/cato1.jpg');
  background-size: cover;
  background-position: 50% 24%;
  will-change: transform;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(8, 8, 8, 0.96) 0%,
    rgba(8, 8, 8, 0.75) 50%,
    rgba(8, 8, 8, 0.35) 100%
  );

  @media (max-width: 768px) {
    background: rgba(8, 8, 8, 0.82);
  }
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 680px;
`;

const Eyebrow = styled(motion.span)`
  display: inline-block;
  font-family: ${fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.accent};
  border: 1px solid ${colors.accentDim};
  background: ${colors.accentDim};
  padding: 6px 14px;
  border-radius: 2px;
  margin-bottom: 28px;
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${fonts.display};
  font-size: clamp(4rem, 10vw, 9.5rem);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: ${colors.white};
  margin: 0 0 28px;

  span {
    display: block;
    color: ${colors.accent};
    -webkit-text-stroke: 1px ${colors.accent};
  }
`;

const IdentityRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.body};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.textSecondary};
  margin-bottom: 28px;

  em {
    color: ${colors.accent};
    font-style: normal;
  }
`;

const HeroBody = styled(motion.p)`
  font-family: ${fonts.body};
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  line-height: 1.75;
  color: rgba(240, 240, 240, 0.7);
  max-width: 480px;
  margin-bottom: 44px;
`;

const BtnRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: ${colors.accent};
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 16px 36px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${colors.accentLight};
    transform: translateY(-2px);
  }
`;

const GhostBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${colors.textPrimary};
  font-family: ${fonts.body};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  padding-bottom: 4px;
  border-bottom: 1px solid ${colors.border};
  transition: color 0.25s ease, border-color 0.25s ease, gap 0.25s ease;

  &:hover {
    color: ${colors.accent};
    border-color: ${colors.accent};
    gap: 12px;
  }
`;

const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  right: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;

  @media (max-width: 768px) { display: none; }
`;

const ScrollLabel = styled.span`
  font-family: ${fonts.body};
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${colors.textMuted};
  writing-mode: vertical-rl;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 64px;
  background: linear-gradient(to bottom, ${colors.accent}, transparent);
`;

const AccentLine = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, transparent, ${colors.accent}, transparent);
  z-index: 2;
`;

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <HeroSection ref={ref} id="home">
      <AccentLine />
      <BgImage style={{ y: bgY }} />
      <Overlay />

      <Content variants={stagger} initial="hidden" animate="visible">
        <Eyebrow variants={fadeUp}>Engineered Performance</Eyebrow>

        <HeroTitle variants={fadeUp}>
          Cato
          <span>Akay.</span>
        </HeroTitle>

        <IdentityRow variants={fadeUp}>
          Elite Athlete <em>·</em> Software Engineer <em>·</em> Coach
        </IdentityRow>

        <HeroBody variants={fadeUp}>
          I combine the precision of engineering with the discipline of elite competition.
          Systematic. Data-driven. Built to produce real results.
        </HeroBody>

        <BtnRow variants={fadeUp}>
          <PrimaryBtn to="contact" smooth duration={350} offset={-70}>
            Start Your Journey
          </PrimaryBtn>
          <GhostBtn to="about" smooth duration={350} offset={-70}>
            My Story →
          </GhostBtn>
        </BtnRow>
      </Content>

      <ScrollHint
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <ScrollLabel>Scroll</ScrollLabel>
        <ScrollLine
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        />
      </ScrollHint>
    </HeroSection>
  );
}

export default Hero;

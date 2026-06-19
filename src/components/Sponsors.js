import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger } from '../animations';

const Section = styled.section`
  padding: 100px 6%;
  background: ${colors.bgAlt};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};

  @media (max-width: 768px) { padding: 70px 6%; }
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Label = styled(motion.p)`
  font-family: ${fonts.body};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.textMuted};
  text-align: center;
  margin-bottom: 40px;
`;

const Logos = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0;
`;

const LogoItem = styled(motion.div)`
  padding: 20px 36px;
  font-family: ${fonts.display};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textMuted};
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover { color: ${colors.textPrimary}; }

  @media (max-width: 480px) { padding: 16px 24px; font-size: 0.95rem; }
`;

const Dot = styled.span`
  color: ${colors.border};
  font-size: 1.2rem;
`;

const sponsors = ['NOCCO', 'MVMNT', 'Toughthumb', 'Vivid Performance'];

function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Section ref={ref}>
      <Inner>
        <Label
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by
        </Label>
        <Logos
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {sponsors.map((name, i) => (
            <React.Fragment key={name}>
              <LogoItem variants={fadeUp}>{name}</LogoItem>
              {i < sponsors.length - 1 && <Dot>·</Dot>}
            </React.Fragment>
          ))}
        </Logos>
      </Inner>
    </Section>
  );
}

export default Sponsors;


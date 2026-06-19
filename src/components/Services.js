import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger, scaleIn } from '../animations';

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.bg};

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
  margin-bottom: 16px;
`;

const SectionSub = styled(motion.p)`
  font-family: ${fonts.body};
  font-size: 1rem;
  color: ${colors.textSecondary};
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 64px;
`;

const Grid = styled(motion.div)`
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

const ServiceCard = styled(motion.div)`
  background: ${colors.surfaceAlt};
  padding: 44px 36px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: background 0.3s ease;

  &:hover { background: ${colors.surfaceElevated}; }
`;

const Popular = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${colors.accent};
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 5px 12px;
`;

const ServiceTier = styled.span`
  font-family: ${fonts.body};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.accent};
  margin-bottom: 12px;
  display: block;
`;

const ServiceName = styled.h3`
  font-family: ${fonts.display};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
`;

const ServicePrice = styled.div`
  font-family: ${fonts.display};
  font-size: 2.4rem;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 4px;
  line-height: 1;

  span {
    font-family: ${fonts.body};
    font-size: 0.85rem;
    font-weight: 400;
    color: ${colors.textSecondary};
    margin-left: 4px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${colors.border};
  margin: 24px 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 auto;
  flex: 1;
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: ${fonts.body};
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  line-height: 1.5;
  margin-bottom: 12px;

  &::before {
    content: '→';
    color: ${colors.accent};
    flex-shrink: 0;
    font-weight: 700;
  }
`;

const ServiceBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
  padding: 14px;
  background: transparent;
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid ${colors.border};
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.accent};
    border-color: ${colors.accent};
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

const ModalBox = styled(motion.div)`
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-top: 3px solid ${colors.accent};
  border-radius: 4px;
  padding: 44px 40px;
  width: 100%;
  max-width: 480px;

  h3 {
    font-family: ${fonts.display};
    font-size: 1.8rem;
    color: ${colors.white};
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  p {
    font-family: ${fonts.body};
    font-size: 0.95rem;
    color: ${colors.textSecondary};
    line-height: 1.75;
    margin-bottom: 32px;
  }
`;

const ModalClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  background: ${colors.accent};
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover { background: ${colors.accentLight}; }
`;

const services = [
  {
    tier: 'Essential',
    name: 'Online Programming',
    price: '$150',
    period: '/ month',
    features: [
      'Custom 4-week training blocks',
      'Weekly program adjustments',
      'Movement library access',
      'Progress tracking system',
    ],
    detail: 'Structured, personalized 4-week training blocks built around your goals, schedule, and current level. Updated weekly based on your performance data.',
  },
  {
    tier: 'Premium',
    name: 'Individual Coaching',
    price: '$200',
    period: '/ month',
    popular: true,
    features: [
      'Everything in Online Programming',
      'Weekly 1:1 video check-ins',
      'Nutrition guidance framework',
      'Direct messaging access',
      'Competition cycle planning',
    ],
    detail: 'Full 1:1 coaching experience. Weekly video check-ins, direct messaging, nutrition guidance, and a program that adapts with you every step of the way.',
  },
  {
    tier: 'Elite',
    name: 'Competition Prep',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Individual Coaching',
      'Periodized competition cycles',
      'Mental performance strategies',
      'Competition schedule management',
      'Peaking & tapering protocols',
    ],
    detail: 'Built for athletes who compete. Fully periodized competition cycles with peaking protocols, mental performance work, and expert management of your competition calendar.',
  },
];

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <Section id="coaching" ref={ref}>
      <Inner>
        <motion.div variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <SectionLabel variants={fadeUp}>The Program</SectionLabel>
          <SectionTitle variants={fadeUp}>Choose Your<br />Path.</SectionTitle>
          <SectionSub variants={fadeUp}>
            Every athlete is different. Every program is built to match. Choose the level
            of coaching that fits your ambitions.
          </SectionSub>
        </motion.div>

        <Grid variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {services.map((s) => (
            <ServiceCard key={s.name} variants={scaleIn}>
              {s.popular && <Popular>Most Popular</Popular>}
              <ServiceTier>{s.tier}</ServiceTier>
              <ServiceName>{s.name}</ServiceName>
              <ServicePrice>
                {s.price}<span>{s.period}</span>
              </ServicePrice>
              <Divider />
              <FeatureList>
                {s.features.map((f) => <Feature key={f}>{f}</Feature>)}
              </FeatureList>
              <ServiceBtn onClick={() => setSelected(s)}>Learn More</ServiceBtn>
            </ServiceCard>
          ))}
        </Grid>
      </Inner>

      <AnimatePresence>
        {selected && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <ModalBox
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <h3 id="modal-title">{selected.name}</h3>
              <p>{selected.detail}</p>
              <ModalClose onClick={() => setSelected(null)}>Close</ModalClose>
            </ModalBox>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default Services;


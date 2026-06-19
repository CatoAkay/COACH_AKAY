import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView, animate } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger } from '../animations';

const StatsSection = styled.section`
  background: ${colors.bgAlt};
  padding: 80px 6%;
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 24px 16px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 1px;
    background: ${colors.border};
  }

  @media (max-width: 768px) {
    &:not(:last-child)::after { display: none; }
    border-bottom: 1px solid ${colors.border};
    &:nth-child(3), &:nth-child(4) { border-bottom: none; }
    &:nth-child(odd) { border-right: 1px solid ${colors.border}; }
  }
`;

const StatValue = styled.div`
  font-family: ${fonts.display};
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  font-weight: 700;
  color: ${colors.white};
  line-height: 1;
  margin-bottom: 8px;

  span { color: ${colors.accent}; }
`;

const StatLabel = styled.div`
  font-family: ${fonts.body};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.textSecondary};
  line-height: 1.5;
`;

function Counter({ to, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, to]);

  return (
    <StatValue ref={ref}>
      {prefix}{count}<span>{suffix}</span>
    </StatValue>
  );
}

const stats = [
  { to: 2, suffix: '×', label: 'Norwegian Throwdown\nChampion' },
  { to: 5, suffix: '+', label: 'Years \nCompetition' },
  { to: 20, suffix: '+', label: 'Years of\nTraining' },
  { to: 10, suffix: '+', label: 'National\nCompetitions' },
];

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <StatsSection>
      <Grid
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {stats.map(({ to, suffix, label }) => (
          <StatItem key={label} variants={fadeUp}>
            <Counter to={to} suffix={suffix} />
            <StatLabel>{label.split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}</StatLabel>
          </StatItem>
        ))}
      </Grid>
    </StatsSection>
  );
}

export default Stats;


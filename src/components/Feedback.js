import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger, scaleIn } from '../animations';

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.surface};

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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${colors.border};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Card = styled(motion.article)`
  background: ${colors.surfaceAlt};
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: background 0.3s ease;

  &:hover { background: ${colors.surfaceElevated}; }
`;

const QuoteIcon = styled.div`
  font-family: ${fonts.display};
  font-size: 3rem;
  color: ${colors.accent};
  line-height: 0.7;
  opacity: 0.6;
`;

const QuoteText = styled.blockquote`
  font-family: ${fonts.body};
  font-size: 0.95rem;
  line-height: 1.85;
  color: ${colors.textSecondary};
  font-style: italic;
  margin: 0;
  flex: 1;
`;

const Attribution = styled.div`
  border-top: 1px solid ${colors.border};
  padding-top: 20px;
`;

const AuthorName = styled.p`
  font-family: ${fonts.display};
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
`;

const AuthorRole = styled.p`
  font-family: ${fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.accent};
`;

const testimonials = [
  {
    quote: "Working with Cato completely changed my training. The systematic approach, the weekly check-ins, the data tracking — it's a different level. I've hit PRs I didn't think were possible.",
    name: 'Sarah Johnson',
    role: 'Functional Fitness Athlete',
  },
  {
    quote: "The engineering mindset shows in everything. My program is structured, progression makes sense, and every decision has a reason. This isn't just coaching — it's performance architecture.",
    name: 'Emily Davis',
    role: 'CrossFit Competitor',
  },
  {
    quote: "I've had other coaches before. None came close to this level. Cato understands both the science and the sport. My competition results speak for themselves.",
    name: 'Robert Brown',
    role: 'National Level Competitor',
  },
];

function Feedback() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section ref={ref}>
      <Inner>
        <motion.div variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <SectionLabel variants={fadeUp}>Results</SectionLabel>
          <SectionTitle variants={fadeUp}>Athletes<br />Speak.</SectionTitle>
        </motion.div>

        <Grid variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          {testimonials.map(({ quote, name, role }) => (
            <Card key={name} variants={scaleIn}>
              <QuoteIcon>"</QuoteIcon>
              <QuoteText>{quote}</QuoteText>
              <Attribution>
                <AuthorName>{name}</AuthorName>
                <AuthorRole>{role}</AuthorRole>
              </Attribution>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

export default Feedback;

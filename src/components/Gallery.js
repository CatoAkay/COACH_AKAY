import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger } from '../animations';

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.surface};

  @media (max-width: 768px) { padding: 90px 6%; }
`;

const Inner = styled.div`
  max-width: 1200px;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: ${colors.border};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const PhotoCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
  cursor: pointer;
  background: ${colors.surfaceAlt};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover img { transform: scale(1.08); }
  &:hover::after { opacity: 1; }
  &:hover .card-label { opacity: 1; transform: translateY(0); }
`;

const CardLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  z-index: 2;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.4s ease, transform 0.4s ease;

  span {
    display: block;
    font-family: ${fonts.body};
    font-size: 0.68rem;
    font-weight: 700;
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

const photos = [
  { src: '/pic/cato1.jpg', label: 'Cato Akay', sublabel: 'Elite Athlete' },
  { src: '/pic/cato2.jpg', label: 'Competition', sublabel: 'National Level' },
  { src: '/pic/cato3.jpg', label: 'Training', sublabel: 'Every Rep Counts' },
  { src: '/pic/cato4.jpg', label: 'Performance', sublabel: 'Built Different' },
];

function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section ref={ref}>
      <Inner>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={fadeUp}>The Athlete</SectionLabel>
          <SectionTitle variants={fadeUp}>Built to<br />Compete.</SectionTitle>
          <SectionSub variants={fadeUp}>
            Every photo tells part of the story. This is what engineered performance looks like.
          </SectionSub>
        </motion.div>

        <Grid
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {photos.map(({ src, label, sublabel }) => (
            <PhotoCard key={src} variants={fadeUp}>
              <img src={src} alt={label} loading="lazy" />
              <CardLabel className="card-label">
                <span>{sublabel}</span>
                <strong>{label}</strong>
              </CardLabel>
            </PhotoCard>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

export default Gallery;


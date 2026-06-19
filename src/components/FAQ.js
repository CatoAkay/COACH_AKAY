import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { colors, fonts } from '../theme';
import { fadeUp, stagger } from '../animations';

const Section = styled.section`
  padding: 130px 6%;
  background: ${colors.bg};

  @media (max-width: 768px) { padding: 90px 6%; }
`;

const Inner = styled.div`
  max-width: 800px;
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
  margin-bottom: 56px;
`;

const FAQList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

const FAQItem = styled.div`
  background: ${colors.surfaceAlt};
  transition: background 0.25s ease;

  &:not(:last-child) { border-bottom: 1px solid ${colors.border}; }
  &:hover { background: ${colors.surfaceElevated}; }
`;

const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 28px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${colors.textPrimary};
  font-family: ${fonts.body};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
`;

const Icon = styled(motion.span)`
  font-family: ${fonts.display};
  font-size: 1.4rem;
  font-weight: 400;
  color: ${colors.accent};
  flex-shrink: 0;
  line-height: 1;
`;

const Answer = styled(motion.div)`
  overflow: hidden;
`;

const AnswerInner = styled.div`
  padding: 0 28px 24px;
  font-family: ${fonts.body};
  font-size: 0.95rem;
  line-height: 1.8;
  color: ${colors.textSecondary};
`;

const faqs = [
  {
    q: "Who is this coaching best suited for?",
    a: "Ambitious athletes and driven professionals who want structure, accountability, and real results. Whether you're building your foundation or competing at national level — if you're serious about performance, we'll work well together.",
  },
  {
    q: "How does online coaching work?",
    a: "After an initial performance assessment, I build your fully personalized training program. We connect weekly through video check-ins and stay in touch via direct messaging. Your program adapts every cycle based on your progress, recovery, and competition schedule.",
  },
  {
    q: "What makes your coaching different from others?",
    a: "Most coaches bring fitness experience. I bring fitness experience plus an engineering mindset. Every program is built systematically: structured progressions, data-tracked results, intelligent deload scheduling, and continuous optimization. Nothing is left to guesswork.",
  },
  {
    q: "How quickly will I see results?",
    a: "Meaningful improvements in movement quality and strength typically happen within 4–6 weeks. Significant performance gains develop over 3–6 months. Sustainable, elite-level transformation is a 1–2 year journey — and that's exactly what I build for.",
  },
  {
    q: "What disciplines do you coach?",
    a: "I specialize in Functional Fitness, CrossFit, and general athletic performance. If your goal is to move better, compete higher, and build lasting strength and endurance — I'm the right coach.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section ref={ref}>
      <Inner>
        <motion.div variants={stagger} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <SectionLabel variants={fadeUp}>FAQ</SectionLabel>
          <SectionTitle variants={fadeUp}>Common<br />Questions.</SectionTitle>
        </motion.div>

        <FAQList
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {faqs.map(({ q, a }, i) => (
            <FAQItem key={q}>
              <motion.div variants={fadeUp}>
                <Question onClick={() => setOpen(open === i ? null : i)}>
                  <span>{q}</span>
                  <Icon animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}>
                    +
                  </Icon>
                </Question>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <Answer
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <AnswerInner>{a}</AnswerInner>
                    </Answer>
                  )}
                </AnimatePresence>
              </motion.div>
            </FAQItem>
          ))}
        </FAQList>
      </Inner>
    </Section>
  );
}

export default FAQ;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import GlobalStyle from './components/GlobalStyle';
import Hero from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyMe from './components/WhyMe';
import Sponsors from './components/Sponsors';
import Feedback from './components/Feedback';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { colors, fonts } from './theme';

/* ─── Navigation ─────────────────────────────────────────── */

const NavBar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  height: 70px;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(8,8,8,0.97)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? `1px solid ${colors.border}` : '1px solid transparent'};
  transition: background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease;
`;

const Brand = styled.div`
  font-family: ${fonts.display};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  user-select: none;
  transition: color 0.25s ease;

  span { color: ${colors.accent}; }

  &:hover { color: ${colors.accent}; }
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled(Link)`
  font-family: ${fonts.body};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.textSecondary};
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover, &.active { color: ${colors.white}; }
`;

const NavCTA = styled(Link)`
  font-family: ${fonts.body};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.white};
  background: ${colors.accent};
  padding: 10px 22px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${colors.accentLight};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) { display: none; }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1100;

  @media (max-width: 768px) { display: flex; }
`;

const HamLine = styled(motion.span)`
  display: block;
  width: 24px;
  height: 2px;
  background: ${colors.white};
  border-radius: 1px;
  transform-origin: center;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(8, 8, 8, 0.98);
  backdrop-filter: blur(24px);
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const MobileNavLink = styled(Link)`
  font-family: ${fonts.display};
  font-size: clamp(2.2rem, 8vw, 3.5rem);
  font-weight: 700;
  color: ${colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
  padding: 10px 0;
  transition: color 0.25s ease;
  text-align: center;

  &:hover { color: ${colors.white}; }
`;

const MobileCTA = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  font-family: ${fonts.body};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.white};
  background: ${colors.accent};
  padding: 16px 44px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover { background: ${colors.accentLight}; }
`;

const navItems = [
  { to: 'about', label: 'About' },
  { to: 'performance', label: 'Performance' },
  { to: 'coaching', label: 'Coaching' },
  { to: 'results', label: 'Results' },
  { to: 'contact', label: 'Contact' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <GlobalStyle />

      {/* ── Navigation ── */}
      <NavBar $scrolled={scrolled} aria-label="Main navigation">
        <Brand onClick={() => window.scrollTo({ top: 0 })}>
          Cato <span>Akay</span>
        </Brand>

        <DesktopLinks>
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} smooth duration={350} offset={-70} spy activeClass="active">
              {label}
            </NavLink>
          ))}
        </DesktopLinks>

        <NavCTA to="contact" smooth duration={350} offset={-70}>
          Get Coached
        </NavCTA>

        <Hamburger onClick={() => setMenuOpen((o) => !o)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <HamLine animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
          <HamLine animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }} transition={{ duration: 0.2 }} />
          <HamLine animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
        </Hamburger>
      </NavBar>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <MobileNavLink to={to} smooth duration={350} offset={-70} onClick={closeMenu}>
                  {label}
                </MobileNavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: navItems.length * 0.07, duration: 0.4 }}
            >
              <MobileCTA to="contact" smooth duration={350} offset={-70} onClick={closeMenu}>
                Get Coached
              </MobileCTA>
            </motion.div>
          </MobileMenu>
        )}
      </AnimatePresence>

      {/* ── Page Content ── */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Philosophy />
        <Services />
        <Gallery />
        <WhyMe />
        <Feedback />
        <Sponsors />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

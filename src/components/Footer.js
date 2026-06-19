import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { colors, fonts } from '../theme';

const FooterEl = styled.footer`
  background: ${colors.bg};
  border-top: 1px solid ${colors.border};
  padding: 60px 6% 40px;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${colors.border};
  margin-bottom: 32px;
  flex-wrap: wrap;
`;

const Brand = styled.div``;

const BrandName = styled.span`
  display: block;
  font-family: ${fonts.display};
  font-size: 1.4rem;
  font-weight: 700;
  color: ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
`;

const Tagline = styled.span`
  display: block;
  font-family: ${fonts.body};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.accent};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 480px) { gap: 20px; }
`;

const NavLink = styled(Link)`
  font-family: ${fonts.body};
  font-size: 0.82rem;
  font-weight: 500;
  color: ${colors.textSecondary};
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover { color: ${colors.textPrimary}; }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

const Copyright = styled.p`
  font-family: ${fonts.body};
  font-size: 0.78rem;
  color: ${colors.textMuted};
`;

const AccentBar = styled.div`
  width: 32px;
  height: 2px;
  background: ${colors.accent};
  border-radius: 1px;
`;

const footerLinks = [
  { to: 'about', label: 'About' },
  { to: 'performance', label: 'Performance' },
  { to: 'coaching', label: 'Coaching' },
  { to: 'results', label: 'Results' },
  { to: 'contact', label: 'Contact' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterEl>
      <Inner>
        <TopRow>
          <Brand>
            <BrandName>Cato Akay</BrandName>
            <Tagline>Engineered Performance</Tagline>
          </Brand>
          <NavLinks aria-label="Footer navigation">
            {footerLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} smooth duration={350} offset={-70}>
                {label}
              </NavLink>
            ))}
          </NavLinks>
        </TopRow>
        <BottomRow>
          <Copyright>© {year} Cato Akay. All rights reserved.</Copyright>
          <AccentBar />
        </BottomRow>
      </Inner>
    </FooterEl>
  );
}

export default Footer;

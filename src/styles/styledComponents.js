import styled from 'styled-components';

export const Header = styled.header``;

export const HeaderTitle = styled.h1``;

export const Footer = styled.footer``;

export const MainContainer = styled.main``;

export const NavigationBar = styled.nav``;

export const NavigationList = styled.ul`
  margin: 0 0 0 1rem;
  list-style: none;
  padding: 0;

  ${({ open }) =>
    open ? 'transform: translatex(0%);' : 'transform: translatex(-30%);'}

  transition: transform 0.2s ease;
  & p {
    color: #7d7d7d;
    font-family: DINCondensed;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 4px;
    margin: 1rem 0 0.5rem 6px;
    text-transform: uppercase;
  }

  & div {
    align-items: center;
    cursor: pointer;
    display: flex;
  }
`;

export const HighlightedSpan = styled.span`
  background: ${({ highlighted }) => (highlighted ? '#dd461e' : '#36383a')};
  display: block;
  height: 42px;
  left: -24px;
  position: relative;
  width: 5px;

  transition: background 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const NavigationItem = styled.li`
  color: ${({ highlighted }) => (highlighted ? '#fff' : '#a0a0a0')};
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  font-family: DINCondensed;
  font-size: 22px;
  margin: 0.5rem 0;
  text-transform: uppercase;
`;

export const TopicPage = styled.article``;

export const TopicCard = styled.figure``;

export const CardRow = styled.div``;

export const TopicSubtitle = styled.h3``;

export const TopicTitle = styled.h2``;

export const StarWarsLogo = styled.span``;

export const MenuContainer = styled.div`
  position: relative;
`;

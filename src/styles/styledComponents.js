import styled from 'styled-components';

export const MainContainer = styled.main``;

export const NavigationBar = styled.nav`
  z-index: 1;
  position: fixed;
  top: 10px;
  left: 10px;
`;

export const NavigationList = styled.ul`
  margin: 0 0 0 1rem;
  list-style: none;
  padding: 0;
  background: #282727;

  ${({ open }) =>
    open ? 'transform: translatex(0%);' : 'transform: translatex(-130%);'}

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

export const TopicPage = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #282727;
  border-style: solid;
  border-width: 2px;
  border-color: #5a2b34;
  width: 50%rem;

  & .card-data-title {
    margin: 2rem auto;
    color: #fff;
    font-family: DINCondensed;
    width: 80%;

    font-size: 22px;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
`;

export const TopicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;

  & h3 {
    margin: 0 4rem 0 0;
    color: #fff;
    font-family: DINCondensed;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  & ul {
    list-style: none;
    padding: 0;
  }

  & ul span {
    display: flex;
    margin: 1rem 0 0 0;
    justify-content: space-between;
  }

  & li {
    margin: 0 1rem 0 0;
    font-family: DINCondensed;
    font-size: 20px;
    color: #7d7d7d;
    min-width: 5rem;
    max-width: 23rem;
    text-transform: capitalize;
  }
`;

export const TopicCard = styled.figure`
  width: 13rem;
  background-color: #282727;
  border-style: solid;
  border-width: 2px;
  border-color: #5a2b34;
  overflow-y: hidden;
  height: 10rem;
  position: relative;
  cursor: pointer;
  margin: 0 3rem 1rem 0;

  & p {
    font-family: DINCondensed;
    font-size: 22px;
    color: #fff;
    margin: 1rem;
    text-transform: uppercase;
  }

  & span {
    background: linear-gradient(
      0deg,
      #282727 25.52%,
      rgba(139, 96, 96, 0) 100%
    );
    display: block;

    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const CardRow = styled.div`
  display: flex;
  width: 80%;
  margin: 1rem auto;
`;

export const MainText = styled.h1`
  width: 80%;
  font-size: 45px;
  color: #fff;
  font-family: JediFont;
  margin: 1rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 4px;
`;

export const PaginationContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  font-family: DINCondensed;

  & span {
    color: #fff;
    cursor: pointer;

    font-size: 22px;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  & .disabled {
    color: #464646;
    cursor: auto;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const StyledLineBreak = styled.div`
  display: block;
  width: 80%;
  margin: 1rem auto;
  background: #464646;
  height: 1px;
`;

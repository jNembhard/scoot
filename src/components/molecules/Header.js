import { Link } from "react-router-dom";
import BurgerNav from "../atoms/BurgerNav";
import styled from "styled-components";
import Menu from "../atoms/Menu";

export default function Header() {
  return (
    <NavHeader>
      <Container>
        <BurgerNav />
        <ScootWrap>
          <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
            <MobileLogo>scoot</MobileLogo>
          </Link>
        </ScootWrap>
        <Menu />
      </Container>
    </NavHeader>
  );
}

const NavHeader = styled.header`
  padding: 23px 33px 23px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 33px 23px;
    margin: 33px auto;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      padding: 23px 165px 23px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: 18px;
  justify-content: space-between;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    @media ${({ theme }) => theme.breakpoints.laptop} {
      justify-content: center;
      max-width: 1440px;
    }
  }
`;

const ScootWrap = styled.div`
  margin: 22px auto;
`;

const MobileLogo = styled.h4`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

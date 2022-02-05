import { Link } from "react-router-dom";
import BurgerNav from "../atoms/BurgerNav";
import styled from "styled-components";

export default function Header() {
  return (
    <NavHeader>
      <Container>
        <BurgerNav />
        <ScootWrap>
          <Link to="/" />
          <h4>scoot</h4>
        </ScootWrap>
      </Container>
    </NavHeader>
  );
}

const NavHeader = styled.div`
  padding: 23px 33px 23px;
  border: 1px solid red;
`;
const Container = styled.div`
  /* border: 1px solid blue; */
  display: inline-flex;
  align-items: center;
  height: 18px;
  justify-content: space-between;
  width: 100%;
`;

const ScootWrap = styled.div`
  margin: 22px auto;
`;

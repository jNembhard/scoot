import styled from "styled-components";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <FooterWrap>
      <FooterTop title="Sign up and Scoot off today" />
      <FooterBottom />
    </FooterWrap>
  );
}

const FooterWrap = styled.section`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    overflow-y: hidden;
  }
`;

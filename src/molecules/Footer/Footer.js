import React from "react";
import styled from "styled-components";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <FooterWrap>
      <FooterTop />
      <FooterBottom />
    </FooterWrap>
  );
}

const FooterWrap = styled.section``;

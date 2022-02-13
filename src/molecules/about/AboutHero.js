import React from "react";
import styled from "styled-components";

const abouthero =
  process.env.PUBLIC_URL + "/assets/images/mobile/about-hero-mobile.jpg";

export default function AboutHero() {
  return (
    <AboutHeroWrapper>
      <AboutHeroImageWrapper>
        <AboutHeroImage src={abouthero} alt="about-hero" />
      </AboutHeroImageWrapper>
      <TitleWrap>
        <MobileTitle>About</MobileTitle>
      </TitleWrap>
    </AboutHeroWrapper>
  );
}

const AboutHeroWrapper = styled.section`
  position: relative;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleWrap = styled.div`
  position: absolute;
`;
const MobileTitle = styled.h3`
  color: ${({ theme }) => theme.colors.snow};
`;
const AboutHeroImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-height: 160px;
`;
const AboutHeroImage = styled.img`
  width: 100%;
  height: auto;
`;

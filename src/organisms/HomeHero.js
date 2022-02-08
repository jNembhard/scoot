import React from "react";
import styled from "styled-components";
import ButtonScoot from "../atoms/ButtonScoot";

const homehero =
  process.env.PUBLIC_URL + "/assets/images/mobile/home-hero-mobile.jpg";
const rightarrow = process.env.PUBLIC_URL + "/assets/patterns/right-arrow.svg";

function HomeHero() {
  return (
    <HomeHeroWrapper>
      <ImageWrapper>
        <HeroImage src={homehero} alt="home-hero" />
      </ImageWrapper>
      <HeroContent>
        <TitleWrap>
          <h1>Scooter Sharing Made Simple</h1>
          <MobileTitle>Scooter sharing made simple</MobileTitle>
        </TitleWrap>
        <DescriptionWrap>
          <Description>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you&#39;re away!
          </Description>
        </DescriptionWrap>
        <ButtonWrapper>
          <ButtonScoot word="get scootin" />
        </ButtonWrapper>
      </HeroContent>
      <ArrowWrap>
        <RightArrow src={rightarrow} alt="right-arrow" />
      </ArrowWrap>
    </HomeHeroWrapper>
  );
}

export default HomeHero;

const HomeHeroWrapper = styled.section`
  position: relative;
  z-index: 3;
`;

const HeroContent = styled.div`
  margin: 115px 32px 115px;
  height: 356px;
  text-align: center;
  position: absolute;
  color: ${({ theme }) => theme.colors.snow};
  h1 {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const TitleWrap = styled.div`
  height: 120px;
  padding-bottom: 24px;
`;

const MobileTitle = styled.h3`
  margin: 0;
`;

const DescriptionWrap = styled.div`
  margin: 24px 0 34px;
`;

const Description = styled.p`
  /* margin: 0 0 34px; */
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid red; */
`;

const ArrowWrap = styled.div`
  overflow: hidden;
  positon: relative;
  border: 1px solid red;
`;

const RightArrow = styled.img`
  position: absolute;
  top: 478px;
  left: -310px;
`;

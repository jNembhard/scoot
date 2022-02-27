import React from "react";
import styled from "styled-components";
import ButtonScoot from "../atoms/ButtonScoot";
import { useMediaQuery } from "../hooks/useMediaQuery";

const whitecircles =
  process.env.PUBLIC_URL + "/assets/patterns/white-circles.svg";
const mobilehero =
  process.env.PUBLIC_URL + "/assets/images/mobile/home-hero-mobile.jpg";
const tablethero =
  process.env.PUBLIC_URL + "/assets/images/tablet/home-hero-tablet.jpg";
const desktophero =
  process.env.PUBLIC_URL + "/assets/images/desktop/home-hero-desktop.jpg";
const rightarrow = process.env.PUBLIC_URL + "/assets/patterns/right-arrow.svg";

function HomeHero() {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);
  return (
    <HomeHeroWrapper>
      <ImageWrapper>
        <HeroImage
          src={
            breakPoint1200
              ? desktophero
              : breakPoint767
              ? tablethero
              : mobilehero
          }
          alt="home-hero"
        />
      </ImageWrapper>
      <HeroContent>
        <TitleWrap>
          <TabletTitle>Scooter Sharing Made Simple</TabletTitle>
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
      <WhiteCirclesWrapper>
        <SemiCircles src={whitecircles} alt="semi-circles" />
      </WhiteCirclesWrapper>
    </HomeHeroWrapper>
  );
}

export default HomeHero;

const HomeHeroWrapper = styled.section`
  position: relative;
  z-index: 3;
  border: 1px solid transparent;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 650px;
  }
`;

const HeroContent = styled.div`
  margin: 115px 32px 115px;
  height: 356px;
  text-align: center;
  position: absolute;
  color: ${({ theme }) => theme.colors.snow};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 573px;
    height: 296px;
    margin: 137px 98px 217px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 650px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const TitleWrap = styled.div`
  height: 120px;
  padding-bottom: 24px;
`;

const TabletTitle = styled.h1`
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: inherit;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -2.5px;
  }
`;
const MobileTitle = styled.h3`
  margin: 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const DescriptionWrap = styled.div`
  margin: 24px 0 34px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 0 34px;
  }
`;

const Description = styled.p`
  /* margin: 0 0 34px; */
`;

const ButtonWrapper = styled.div`
  /* border: 1px solid red; */
`;

const ArrowWrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: 478px;
  left: -310px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    top: 500px;
    left: -120px;
  }
`;

const RightArrow = styled.img`
  max-width: 100%;
`;

const WhiteCirclesWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    position: absolute;
    top: 542px;
    right: -35px;
  }
`;
const SemiCircles = styled.img`
  z-index: 5;
`;

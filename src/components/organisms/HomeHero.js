import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ButtonScoot from "../atoms/ButtonScoot";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  titleVariants,
  buttonVariants,
  descriptionVariants,
  arrowVariants,
  lineVariants,
} from "../../animations/homepage/hero";

const whitecircles =
  process.env.PUBLIC_URL + "/assets/patterns/white-circles.svg";
const mobilehero =
  process.env.PUBLIC_URL + "/assets/images/mobile/home-hero-mobile.jpg";
const tablethero =
  process.env.PUBLIC_URL + "/assets/images/tablet/home-hero-tablet.jpg";
const desktophero =
  process.env.PUBLIC_URL + "/assets/images/desktop/home-hero-desktop.jpg";
const rightarrow = process.env.PUBLIC_URL + "/assets/patterns/right-arrow.svg";
const line = process.env.PUBLIC_URL + "/assets/patterns/line.svg";

function HomeHero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
        <TitleWrap
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={titleVariants}
        >
          <TabletTitle>Scooter Sharing Made Simple</TabletTitle>
          <MobileTitle>Scooter sharing made simple</MobileTitle>
        </TitleWrap>
        <DescriptionWrap
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={descriptionVariants}
        >
          <Description>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you&#39;re away!
          </Description>
        </DescriptionWrap>
        <ButtonWrapper
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={buttonVariants}
        >
          <ButtonScoot word="get scootin" />
        </ButtonWrapper>
      </HeroContent>
      <LineWrap
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={lineVariants}
      >
        <Line src={line} alt="line" />
      </LineWrap>
      <ArrowWrap
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={arrowVariants}
      >
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

    @media ${({ theme }) => theme.breakpoints.laptop} {
      border: unset;
    }
  }
`;

const HeroContent = styled(motion.div)`
  margin: 115px 32px 115px;
  height: 356px;
  text-align: center;
  position: absolute;
  color: ${({ theme }) => theme.colors.snow};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 573px;
    height: 296px;
    margin: 137px 98px 217px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      text-align: left;
      margin: 100px 98px 200px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 137px 775px 165px 152px;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  max-height: 650px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 650px;
    max-height: 650px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const TitleWrap = styled(motion.div)`
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

const DescriptionWrap = styled(motion.div)`
  margin: 24px auto 34px;
  max-width: 340px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 auto 34px;
    max-width: 573px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0 0 34px 57px;
      max-width: 405px;
    }
  }
`;

const Description = styled.p``;

const ButtonWrapper = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-left: 57px;
  }
`;

const ArrowWrap = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  top: 478px;
  left: -310px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    top: 500px;
    left: -120px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      top: 320px;
      left: 580px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        top: 355px;
        left: 650px;
      }
    }
  }
`;

const RightArrow = styled.img`
  max-width: 100%;
`;
const LineWrap = styled(motion.div)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
    overflow: hidden;
    position: absolute;
    top: 354px;
    left: -40px;
    width: 204px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: unset;
      top: 315px;
      left: -100px;
      width: 204px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        top: 354px;
        left: -40px;
        width: 204px;
      }
    }
  }
`;
const Line = styled.img``;

const WhiteCirclesWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    position: absolute;
    top: 542px;
    right: -35px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      top: 400px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        top: 430px;
      }
    }
  }
`;

const SemiCircles = styled.img`
  z-index: 5;
`;

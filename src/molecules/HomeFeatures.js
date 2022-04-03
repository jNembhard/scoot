import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  imageVariants,
  lineVariants,
  titleVariants,
  descriptionVariants,
} from "../animations/homepage/homefeaturesanimations";
import styled from "styled-components";

const line = process.env.PUBLIC_URL + "/assets/patterns/line.svg";

export default function HomeFeatures({ icon, title, description }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <FeaturesWrapper>
      <ImageWrapper
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={imageVariants}
      >
        <FeaturesImage src={icon} alt={title} />
        <Line
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={lineVariants}
          src={line}
          alt="line"
        />
      </ImageWrapper>
      <ContentWrapper>
        <SmallTitle
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={titleVariants}
        >
          {title}
        </SmallTitle>
        <Description
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={descriptionVariants}
        >
          {description}
        </Description>
      </ContentWrapper>
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.div`
  margin: 48px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    text-align: left;
    margin: unset;
    align-items: unset;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      flex-direction: column;
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 56px;
  height: 56px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 96px;
    height: 96px;
    margin-right: 79px;
    position: relative;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: flex;
      flex-direction: row;
    }
  }
`;

const FeaturesImage = styled(motion.img)`
  width: 100%;
  height: auto;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: unset;
    position: absolute;
    z-index: 1;
    color: grey;
  }
`;

const Line = styled(motion.img)`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    position: absolute;
    z-index: 0;
    transform: rotate(90deg);
    top: -60px;
    left: -50px;
    filter: invert(66%) sepia(58%) saturate(622%) hue-rotate(348deg)
      brightness(108%) contrast(98%);
    filter: invert(66%) sepia(58%) saturate(622%) hue-rotate(348deg)
      brightness(108%) contrast(98%);

    @media ${({ theme }) => theme.breakpoints.laptop} {
      transform: rotate(0deg);
      width: 340px;
      height: 15px;
      top: 45px;
      left: -280px;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 450px;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 350px;
    margin-right: 25px;
  }
`;

const SmallTitle = styled(motion.h4)`
  color: ${({ theme }) => theme.colors.darkNavy};
`;

const Description = styled(motion.p)`
  color: ${({ theme }) => theme.colors.dimGrey};
`;

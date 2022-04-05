import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  imageVariants,
  numberVariants,
  titleVariants,
  descriptionVariants,
} from "../../../animations/aboutpage/values";
import styled from "styled-components";

export default function ValueFeatures({ image, title, description, number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <ValueFeaturesWrapper>
      <ImageWrapper>
        <ValueImageContainer
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={imageVariants}
        >
          <ValueImage src={image} alt={title} />
        </ValueImageContainer>
        <NumberWrapper
          animate={controls}
          initial="hidden"
          variants={numberVariants}
        >
          <Number>0{number}</Number>
        </NumberWrapper>
      </ImageWrapper>
      <ValueContent>
        <TitleWrapper
          animate={controls}
          initial="hidden"
          variants={titleVariants}
        >
          <Title>{title}</Title>
        </TitleWrapper>
        <DescriptionWrapper
          animate={controls}
          initial="hidden"
          variants={descriptionVariants}
        >
          <Description>{description}</Description>
        </DescriptionWrapper>
      </ValueContent>
    </ValueFeaturesWrapper>
  );
}

const ValueFeaturesWrapper = styled.div`
  margin-bottom: 56px;
  margin: 0 auto 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 288px;
  margin-bottom: 80px;
  min-width: 311px;
`;

const ValueImageContainer = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  z-index: 1;
  min-width: 240px;
  left: 34px;
  right: 34px;
`;

const ValueImage = styled.img`
  border-radius: 100%;
  width: 100%;
  height: auto;
`;

const NumberWrapper = styled(motion.div)`
  position: absolute;
  background-color: transparent;
  top: 192px;
  left: 110px;
  z-index: 1;
`;

const Number = styled.h4`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 34px;
`;

const ValueContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleWrapper = styled(motion.div)`
  text-align: center;
`;
const Title = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkNavy};
`;

const DescriptionWrapper = styled(motion.div)`
  text-align: center;
  max-width: 500px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding: 0 5px;
    max-width: unset;
  }
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.dimGrey};
  width: 100%;
`;

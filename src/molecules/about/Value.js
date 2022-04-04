import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariants } from "../../animations/aboutpage/values";
import styled from "styled-components";
import ValueFeatures from "../features/ValueFeatures";
import { valuefeatures } from "../../data/valuefeatures";

function Value({ valuetitle }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <ValueWrapper>
      <TitleWrapper
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={titleVariants}
      >
        <TabletTitle>{valuetitle}</TabletTitle>
        <MobileTitle>{valuetitle}</MobileTitle>
      </TitleWrapper>
      <ValueFeaturesWrapper>
        {valuefeatures.map((valuefeature) => (
          <ValueFeatures
            key={valuefeature.id}
            id={valuefeature.id}
            number={valuefeature.id}
            image={valuefeature.image}
            title={valuefeature.title}
            description={valuefeature.description}
          />
        ))}
      </ValueFeaturesWrapper>
    </ValueWrapper>
  );
}

export default Value;

const ValueWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 155px;
  }
`;

const ValueFeaturesWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-top: 50px;
    display: inline-flex;
  }
`;

const TitleWrapper = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 50px;
  }
`;

const TabletTitle = styled.h2`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    color: ${({ theme }) => theme.colors.darkNavy};
  }
`;
const MobileTitle = styled.h4`
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.darkNavy};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

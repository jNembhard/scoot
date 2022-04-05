import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FAQFeatures from "./FAQFeatures";
import styled from "styled-components";

const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  hidden: { opacity: 0 },
};

export default function Accordion() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AccordionWrapper>
      <FAQContent>
        <TitleWrap
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={titleVariants}
        >
          <Title>FAQs</Title>
        </TitleWrap>
      </FAQContent>
      <FAQFeatures subtitle="How it works" faqstart={0} faqend={3} />
      <FAQFeatures subtitle="Safe driving" faqstart={3} faqend={6} />
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 32px 120px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 40px 120px;
  }
`;
const FAQContent = styled.div``;
const TitleWrap = styled(motion.div)`
  text-align: center;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkNavy};
`;

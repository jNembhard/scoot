import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faqs } from "../../data/faqs";
import AccordionItem from "../../atoms/AccordionItem";
import styled from "styled-components";

export default function FAQFeatures({ subtitle, faqstart, faqend }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <FAQFeaturesWrapper>
      <SubTitleWrap
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={titleVariants}
      >
        <SubTitleTablet>{subtitle}</SubTitleTablet>
        <SubTitleMobile>{subtitle}</SubTitleMobile>
      </SubTitleWrap>
      <ItemWrapper>
        {faqs.slice(faqstart, faqend).map((faq) => (
          <AccordionItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </ItemWrapper>
    </FAQFeaturesWrapper>
  );
}

const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  hidden: { opacity: 0 },
};

const FAQFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    flex-direction: row;
  }
`;

const SubTitleWrap = styled(motion.div)`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: 350px;
    height: 48px;
    margin: 10px 30px 0 0;
    text-align: left;
  }
`;

const SubTitleTablet = styled.h2`
  display: none;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: unset;
    color: ${({ theme }) => theme.colors.darkNavy};
  }
`;

const SubTitleMobile = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1.07px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: none;
  }
`;

const ItemWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: -35px;
`;

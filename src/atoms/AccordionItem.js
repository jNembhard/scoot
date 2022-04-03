import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const chevron = process.env.PUBLIC_URL + "/assets/icons/chevron.svg";

export default function AccordionItem({ question, answer }) {
  const [active, setActive] = useState("");
  const [rotate, setRotate] = useState("accordion__icon");

  const toggleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setRotate(
      active === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };
  return (
    <AccordionItemWrapper onClick={toggleAccordion}>
      <ButtonWrapper>
        <AccordionButton className={`${active}`}>
          {question}
          <ChevronContainer>
            <Chevron src={chevron} className={`${rotate}`} alt="" />
          </ChevronContainer>
        </AccordionButton>
      </ButtonWrapper>
      <AnimatePresence initial={false}>
        {active && (
          <AnswerWrapper
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Answer>{answer}</Answer>
          </AnswerWrapper>
        )}
      </AnimatePresence>
    </AccordionItemWrapper>
  );
}

const AccordionItemWrapper = styled.li`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 16px;
  padding: 0 5px;

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.4s ease;
  }
  .rotate {
    transform: rotate(180deg);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightYellow};
  }
`;

const ButtonWrapper = styled.div`
  background-color: transparent;
`;
const AccordionButton = styled.button`
  text-align: left;
  background-color: transparent;
  font-family: "Space Mono", monospace;
  display: inline-flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.colors.darkNavy};
  width: 100%;
  cursor: pointer;
  padding: 16px 10px;
  border: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 92px;
    width: 689px;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -1.07px;
    padding: unset;
    text-indent: 40px;
    align-items: center;
  }
`;

const AnswerWrapper = styled(motion.div)`
  background-color: transparent;
  text-align: left;
  overflow: hidden;
  transition: max-height 0.6s ease;
  margin: 0 32px 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 689px;
    margin: unset;
  }
`;

const Answer = styled.p`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkNavy};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 32px 32px;
  }
`;

const ChevronContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 22px 69px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 20px 32px 22px 69px;
  }
`;

const Chevron = styled.img`
  background-color: transparent;
`;

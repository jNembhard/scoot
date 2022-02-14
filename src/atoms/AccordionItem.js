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

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.4s ease;
  }
  .rotate {
    transform: rotate(180deg);
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
`;

const AnswerWrapper = styled(motion.div)`
  background-color: transparent;
  text-align: left;
  overflow: hidden;
  transition: max-height 0.6s ease;
  margin: 0 32px 32px;
`;
const Answer = styled.p`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.darkNavy};
`;

const ChevronContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 22px 69px;
`;

const Chevron = styled.img`
  background-color: transparent;
`;

import AccordionItem from "../../atoms/AccordionItem";
import { faqs } from "../../data/faqs";
import styled from "styled-components";

export default function Accordion() {
  return (
    <AccordionWrapper>
      <FAQContent>
        <TitleWrap>
          <Title>FAQs</Title>
        </TitleWrap>
        <SubTitleWrap>
          <SubTitle>How it works</SubTitle>
        </SubTitleWrap>
      </FAQContent>
      <ItemWrapper>
        {faqs.slice(0, 3).map((faq) => (
          <AccordionItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </ItemWrapper>
      <SubTitleWrap>
        <SubTitle>Safe driving</SubTitle>
      </SubTitleWrap>
      <ItemWrapper>
        {faqs.slice(3, 6).map((faq) => (
          <AccordionItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </ItemWrapper>
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 32px 120px;
`;
const FAQContent = styled.div``;
const TitleWrap = styled.div`
  text-align: center;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkNavy};
`;
const SubTitleWrap = styled.div``;
const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1.07px;
`;
const ItemWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: -35px;
`;

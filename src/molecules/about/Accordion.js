import FAQFeatures from "./FAQFeatures";
import styled from "styled-components";

export default function Accordion() {
  return (
    <AccordionWrapper>
      <FAQContent>
        <TitleWrap>
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
const TitleWrap = styled.div`
  text-align: center;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkNavy};
`;

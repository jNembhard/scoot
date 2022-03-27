import AccordionItem from "../../atoms/AccordionItem";
import { faqs } from "../../data/faqs";
import styled from "styled-components";

export default function FAQFeatures({ subtitle, faqstart, faqend }) {
  return (
    <FAQFeaturesWrapper>
      <SubTitleWrap>
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

const FAQFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    flex-direction: row;
  }
`;

const SubTitleWrap = styled.div`
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

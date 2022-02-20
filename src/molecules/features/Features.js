import styled from "styled-components";
import ButtonScoot from "../../atoms/ButtonScoot";

export default function Features({ title, description, numbers }) {
  return (
    <FeaturesWrapper>
      <ContentContainer>
        <h4>{title}</h4>
        <p>{description}</p>
      </ContentContainer>
      {(numbers < 4 || numbers > 5) && (
        <ButtonWrapper>
          <ButtonScoot
            word={
              numbers === 6
                ? "say hello"
                : numbers === 7
                ? "message us"
                : "learn more"
            }
          />
        </ButtonWrapper>
      )}
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContentContainer = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.darkNavy};
    font-size: 32px;
    letter-spacing: -1.43px;
    line-height: 32px;
  }
  p {
    color: ${({ theme }) => theme.colors.dimGrey};
    margin: 32px 0;
  }
`;

const ButtonWrapper = styled.div`
  marign: 0;
`;

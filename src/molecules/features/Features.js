import styled from "styled-components";
import ButtonScoot from "../../atoms/ButtonScoot";

export default function Features({ title, description, numbers }) {
  return (
    <FeaturesWrapper>
      <ContentContainer numbers={numbers}>
        <TitleWrap>
          <TabletUpTitle>{title}</TabletUpTitle>
          <MobileTitle>{title}</MobileTitle>
        </TitleWrap>
        <DescriptionWrapper>
          <p>{description}</p>
        </DescriptionWrapper>
      </ContentContainer>
      {(numbers < 4 || numbers > 5) && (
        <ButtonWrapper numbers={numbers}>
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

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 100px;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      align-items: left;
      margin-bottom: unset;
    }
  }
`;

const ContentContainer = styled.div`
  p {
    color: ${({ theme }) => theme.colors.dimGrey};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 64px 40px 32px;
    max-width: 600px;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      text-align: left;
      margin: ${({ numbers }) =>
        numbers === 2
          ? "64px 0 32px 200px"
          : numbers === 5
          ? "64px 0 32px 200px"
          : "64px 200px 32px 0"};
      max-width: 445px;
    }
  }
`;

const TitleWrap = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 32px;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      margin: 0;
    }
  }
`;

const MobileTitle = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  font-size: 32px;
  letter-spacing: -1.43px;
  line-height: 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const TabletUpTitle = styled.h2`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    color: ${({ theme }) => theme.colors.darkNavy};

    @media ${({ theme }) => theme.breakpoints.desktop} {
      margin: 0;
    }
  }
`;

const DescriptionWrapper = styled.div`
  margin: 40px 0 0;

  @media ${({ theme }) => theme.breakpoints.desktop} {
  }
`;

const ButtonWrapper = styled.div`
  margin: 0;
  margin-right: ${({ numbers }) => (numbers === 2 ? "60px" : "460px")};
`;

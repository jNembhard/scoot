import styled from "styled-components";
const line = process.env.PUBLIC_URL + "/assets/patterns/line.svg";

export default function HomeFeatures({ icon, title, description }) {
  return (
    <FeaturesWrapper>
      <ImageWrapper>
        <FeaturesImage src={icon} alt={title} />
        <Line src={line} alt="line" />
      </ImageWrapper>
      <ContentWrapper>
        <SmallTitle>{title}</SmallTitle>
        <Description>{description}</Description>
      </ContentWrapper>
    </FeaturesWrapper>
  );
}

const FeaturesWrapper = styled.div`
  margin: 48px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    text-align: left;
    margin: unset;
    align-items: unset;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      flex-direction: column;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 56px;
  height: 56px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 96px;
    height: 96px;
    margin-right: 79px;
    position: relative;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: flex;
      flex-direction: row;
    }
  }
`;

const FeaturesImage = styled.img`
  width: 100%;
  height: auto;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: unset;
    position: absolute;
    z-index: 1;
    color: grey;
  }
`;

const Line = styled.img`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    position: absolute;
    z-index: 0;
    transform: rotate(90deg);
    top: -60px;
    left: -50px;
    filter: invert(66%) sepia(58%) saturate(622%) hue-rotate(348deg)
      brightness(108%) contrast(98%);
    filter: invert(66%) sepia(58%) saturate(622%) hue-rotate(348deg)
      brightness(108%) contrast(98%);
    opacity: 0.2;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      transform: rotate(0deg);
      width: 340px;
      height: 15px;
      top: 45px;
      left: -280px;
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 550px;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    max-width: 350px;
    margin-right: 25px;
  }
`;

const SmallTitle = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.dimGrey};
`;

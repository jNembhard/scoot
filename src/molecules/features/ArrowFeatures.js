import React from "react";
import styled from "styled-components";
import ButtonScoot from "../../atoms/ButtonScoot";

export default function ArrowFeatures({
  image,
  arrowimage,
  title,
  description,
  numbers,
}) {
  return (
    <ArrowFeaturesWrapper>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <ArrowImageWrapper numbers={numbers}>
        <ArrowImage src={arrowimage} alt="arrow" />
      </ArrowImageWrapper>
      <FeaturesContentWrapper>
        <ContentContainer>
          <h4>{title}</h4>
          <p>{description}</p>
        </ContentContainer>
        {(numbers < 4 || numbers > 5) && (
          <ButtonWrapper>
            <ButtonScoot word="learn more" />
          </ButtonWrapper>
        )}
      </FeaturesContentWrapper>
    </ArrowFeaturesWrapper>
  );
}

const ArrowFeaturesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 120px 32px;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 100%;
  height: auto;
`;
const ArrowImageWrapper = styled.div`
  position: absolute;
  max-width: 100%;
  height: auto;
  top: ${({ numbers }) =>
    numbers === 1 ? "173px" : numbers === 4 ? "133px" : "7px"};
  right: ${({ numbers }) =>
    numbers === 2 ? "200px" : numbers === 5 ? "140px" : "inherit"};
  left: ${({ numbers }) => (numbers === 3 ? "130px" : "inherit")};
`;
const ArrowImage = styled.img``;

const FeaturesContentWrapper = styled.div`
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

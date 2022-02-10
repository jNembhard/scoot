import React from "react";
import styled from "styled-components";
import ButtonScoot from "../atoms/ButtonScoot";

export default function ArrowFeatures({
  image,
  arrowimage,
  title,
  description,
}) {
  return (
    <ArrowFeaturesWrapper>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <ArrowImageWrapper>
        <ArrowImage src={arrowimage} alt="arrow" />
      </ArrowImageWrapper>
      <FeaturesContentWrapper>
        <ContentContainer>
          <h4>{title}</h4>
          <p>{description}</p>
        </ContentContainer>
        <ButtonWrapper>
          <ButtonScoot word="learn more" />
        </ButtonWrapper>
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
  border-radius: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const ArrowImageWrapper = styled.div`
  position: absolute;
  left: 50px;
  top: 30px;
`;
const ArrowImage = styled.img``;

const FeaturesContentWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ContentContainer = styled.div``;

const ButtonWrapper = styled.div``;

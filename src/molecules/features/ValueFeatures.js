import React from "react";
import styled from "styled-components";

export default function ValueFeatures({ image, title, description, number }) {
  return (
    <ValueFeaturesWrapper>
      <ImageWrapper>
        <ValueImageContainer>
          <ValueImage src={image} />
        </ValueImageContainer>
        <NumberWrapper>
          <Number>0{number}</Number>
        </NumberWrapper>
      </ImageWrapper>
      <ValueContent>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>
      </ValueContent>
    </ValueFeaturesWrapper>
  );
}

const ValueFeaturesWrapper = styled.div`
  margin-bottom: 56px;
  margin: 0 auto 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 288px;
  margin-bottom: 80px;
  min-width: 311px;
`;
const ValueImageContainer = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 1;
  min-width: 240px;
  left: 34px;
  right: 34px;
`;

const ValueImage = styled.img`
  border-radius: 100%;
  width: 100%;
  height: auto;
`;

const NumberWrapper = styled.div`
  position: absolute;
  background-color: transparent;
  top: 192px;
  left: 110px;
  z-index: 1;
`;

const Number = styled.h4`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 34px;
`;

const ValueContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleWrapper = styled.div`
  text-align: center;
`;
const Title = styled.h4`
  margin: 0;
`;

const DescriptionWrapper = styled.div`
  text-align: center;
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.dimGrey};
  width: 100%;
`;

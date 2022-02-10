import React from "react";
import styled from "styled-components";

export default function HomeFeatures({ icon, title, description }) {
  return (
    <FeaturesWrapper>
      <ImageWrapper>
        <FeaturesImage src={icon} alt={title} />
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
`;

const ImageWrapper = styled.div`
  width: 56px;
  height: 56px;
`;
const FeaturesImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContentWrapper = styled.div``;

const SmallTitle = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.dimGrey};
`;

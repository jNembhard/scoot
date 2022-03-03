import styled from "styled-components";

export default function SmallHero({ title, heroimages, alt }) {
  return (
    <SmallHeroWrapper>
      <SmallHeroImageWrapper>
        <SmallHeroImage src={heroimages} alt={alt} />
      </SmallHeroImageWrapper>
      <TitleWrap>
        <MobileTitle>{title}</MobileTitle>
      </TitleWrap>
    </SmallHeroWrapper>
  );
}

const SmallHeroWrapper = styled.div`
  position: relative;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 144px;
  }
`;
const TitleWrap = styled.div`
  position: absolute;
`;
const MobileTitle = styled.h3`
  color: ${({ theme }) => theme.colors.snow};
`;
const SmallHeroImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-height: 160px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 200px;
  }
`;
const SmallHeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 160px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 200px;
  }
`;

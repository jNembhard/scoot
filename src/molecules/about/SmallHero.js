import styled from "styled-components";

const whitecircles =
  process.env.PUBLIC_URL + "/assets/patterns/white-circles.svg";

export default function SmallHero({ title, heroimages, alt }) {
  return (
    <SmallHeroWrapper title={title}>
      <SmallHeroImageWrapper>
        <SmallHeroImage src={heroimages} alt={alt} />
      </SmallHeroImageWrapper>
      <TitleWrap>
        <TabletTitle>{title}</TabletTitle>
        <MobileTitle>{title}</MobileTitle>
      </TitleWrap>
      <CirclesWrapper>
        <Circles src={whitecircles} alt="" />
      </CirclesWrapper>
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
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;
    margin-bottom: ${({ title }) => (title === "Locations" ? "144px" : "0")};

    @media ${({ theme }) => theme.breakpoints.laptop} {
      overflow-y: hidden;
    }
  }
`;
const TitleWrap = styled.div`
  position: absolute;
  left: 97px;
`;
const TabletTitle = styled.h1`
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    color: ${({ theme }) => theme.colors.snow};
  }
`;
const MobileTitle = styled.h3`
  color: ${({ theme }) => theme.colors.snow};
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;
const SmallHeroImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  max-height: 160px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-height: 200px;
  }
`;
const SmallHeroImage = styled.img`
  width: 100%;
  height: auto;
`;

const CirclesWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    position: absolute;
    height: 63px;
    z-index: 2;
    right: -30px;
  }
`;
const Circles = styled.img`
  width: 100%;
  height: auto;
`;

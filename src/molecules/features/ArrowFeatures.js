import styled from "styled-components";
import Features from "./Features";

const circle = process.env.PUBLIC_URL + "/assets/patterns/circle.svg";

export default function ArrowFeatures({
  image,
  arrowimage,
  title,
  description,
  numbers,
}) {
  return (
    <ArrowFeaturesWrapper>
      {numbers < 7 && (
        <>
          <ImageWrapper>
            <Image src={image} alt={title} />
          </ImageWrapper>
          <ArrowImageWrapper numbers={numbers}>
            <ArrowImage src={arrowimage} alt="arrow" />
          </ArrowImageWrapper>
          <CircleImageWrapper numbers={numbers}>
            <CircleImage src={circle} alt="" />
          </CircleImageWrapper>
        </>
      )}
      <Features title={title} description={description} numbers={numbers} />
    </ArrowFeaturesWrapper>
  );
}

const ArrowFeaturesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ numbers }) => (numbers <= 6 ? "120px 32px" : "72px 32px")};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: ${({ numbers }) => (numbers <= 6 ? "145px 32px" : "72px 32px")};
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 100%;
  height: auto;
`;

const CircleImageWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    position: absolute;
    max-width: 100%;
    height: auto;
    top: 0;
    right: ${({ numbers }) =>
      numbers === 1
        ? "-370px"
        : numbers === 3
        ? "-370px"
        : numbers === 6
        ? "-370px"
        : numbers === 5
        ? "650px"
        : "inherit"};
    left: ${({ numbers }) =>
      numbers === 2 ? "-370px" : numbers === 4 ? "650px" : "inherit"};
  }
`;

const CircleImage = styled.img``;

const ArrowImageWrapper = styled.div`
  position: absolute;
  max-width: 100%;
  height: auto;
  top: ${({ numbers }) =>
    numbers === 1
      ? "173px"
      : numbers === 4
      ? "133px"
      : numbers === 6
      ? "173px"
      : "7px"};
  right: ${({ numbers }) =>
    numbers === 2 ? "200px" : numbers === 5 ? "140px" : "inherit"};
  left: ${({ numbers }) => (numbers === 3 ? "130px" : "inherit")};
  z-index: 2;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    top: ${({ numbers }) =>
      numbers === 1
        ? "320px"
        : numbers === 3
        ? "133px"
        : numbers === 4
        ? "250px"
        : numbers === 6
        ? "320px"
        : "0"};
    right: ${({ numbers }) =>
      numbers === 2 ? "380px" : numbers === 5 ? "400px" : "inherit"};
    left: ${({ numbers }) => (numbers === 3 ? "400px" : "inherit")};
  }
`;
const ArrowImage = styled.img``;

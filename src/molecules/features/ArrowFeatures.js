import styled from "styled-components";
import Features from "./Features";

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
    numbers === 1
      ? "173px"
      : numbers === 6
      ? "173px"
      : numbers === 4
      ? "133px"
      : "7px"};
  right: ${({ numbers }) =>
    numbers === 2 ? "200px" : numbers === 5 ? "140px" : "inherit"};
  left: ${({ numbers }) => (numbers === 3 ? "130px" : "inherit")};
`;
const ArrowImage = styled.img``;

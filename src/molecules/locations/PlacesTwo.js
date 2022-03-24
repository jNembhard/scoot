import styled from "styled-components";
import { locations } from "../../data/locations";

export default function PlacesTwo() {
  return (
    <PlacesWrapper>
      {locations.map((location) => (
        <TitleWrapper>
          <TitleContainer
            key={location.id}
            id={location.id}
            numbers={location.id}
          >
            <Title>{location.title}</Title>
          </TitleContainer>
          <Triangle numbers={location.id} />
        </TitleWrapper>
      ))}
    </PlacesWrapper>
  );
}

const PlacesWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    position: relative;
    display: flex;
    flex-direction: row;
    width: 689px;
    height: 337px;
  }
`;

const TitleWrapper = styled.div``;
const TitleContainer = styled.div`
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 120px;
  height: 32px;
  margin: 0 12px;
  top: ${({ numbers }) =>
    numbers === 1
      ? "54px"
      : numbers === 2
      ? "23px"
      : numbers === 3
      ? "160px"
      : numbers === 4
      ? "65px"
      : "unset"};
  left: ${({ numbers }) =>
    numbers === 1
      ? "85px"
      : numbers === 2
      ? "233px"
      : numbers === 3
      ? "460px"
      : numbers === 4
      ? "515px"
      : "unset"};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 189px;
    height: 88px;
    top: ${({ numbers }) =>
      numbers === 1
        ? "71px"
        : numbers === 2
        ? "18px"
        : numbers === 3
        ? "251px"
        : numbers === 4
        ? "78px"
        : "unset"};
    left: ${({ numbers }) =>
      numbers === 1
        ? "147px"
        : numbers === 2
        ? "393px"
        : numbers === 3
        ? "779px"
        : numbers === 4
        ? "856px"
        : "unset"};
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  border-style: solid;
  border-width: 8px 8px 0 8px;
  border-color: ${({ theme }) => theme.colors.yellow} transparent transparent
    transparent;
  top: ${({ numbers }) =>
    numbers === 1
      ? "85px"
      : numbers === 2
      ? "55px"
      : numbers === 3
      ? "192px"
      : numbers === 4
      ? "95px"
      : "unset"};
  left: ${({ numbers }) =>
    numbers === 1
      ? "150px"
      : numbers === 2
      ? "298px"
      : numbers === 3
      ? "527px"
      : numbers === 4
      ? "580px"
      : "unset"};

  @media ${({ theme }) => theme.breakpoints.desktop} {
    top: ${({ numbers }) =>
      numbers === 1
        ? "158px"
        : numbers === 2
        ? "105px"
        : numbers === 3
        ? "338px"
        : numbers === 4
        ? "165.5px"
        : "unset"};
    left: ${({ numbers }) =>
      numbers === 1
        ? "244.5px"
        : numbers === 2
        ? "487.5px"
        : numbers === 3
        ? "876.5px"
        : numbers === 4
        ? "954.5px"
        : "unset"};
    border-width: 12px 12px 0 12px;
  }
`;
const Title = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  margin: 0;
  font-size: 13px;
  line-height: 28px;
  letter-spacing: -0.58px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 24px;
    letter-spacing: -1.07px;
  }
`;

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
    /* border: 1px solid red; */
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
`;
const Title = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
  margin: 0;
  font-size: 13px;
  line-height: 28px;
  letter-spacing: -0.58px;
`;

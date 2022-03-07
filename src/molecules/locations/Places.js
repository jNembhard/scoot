import styled from "styled-components";
import { locations } from "../../data/locations";

export default function Places() {
  return (
    <PlacesWrapper>
      {locations.map((location) => (
        <TitleWrapper key={location.id} id={location.id}>
          <Title>{location.title}</Title>
        </TitleWrapper>
      ))}
    </PlacesWrapper>
  );
}

const PlacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 22px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;
const TitleWrapper = styled.div`
  margin: 8px 0;
  min-width: 311px;

  background-color: ${({ theme }) => theme.colors.lightYellow};
  text-align: center;
`;
const Title = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
`;

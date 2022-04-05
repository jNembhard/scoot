import styled from "styled-components";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import PlacesTwo from "../../molecules/locations/PlacesTwo";

const mobilemap =
  process.env.PUBLIC_URL + "/assets/images/mobile/world-map-mobile.png";
const tabletmap =
  process.env.PUBLIC_URL + "/assets/images/tablet/world-map-tablet.png";
const desktopmap =
  process.env.PUBLIC_URL + "/assets/images/desktop/world-map-desktop.png";

export default function WorldMap() {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width:767px)`);
  return (
    <MapWrapper>
      <MapImageWrapper>
        <MapImage
          src={
            breakPoint1200 ? desktopmap : breakPoint767 ? tabletmap : mobilemap
          }
          alt="world-map"
        />
      </MapImageWrapper>
      <PlacesTwo />
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  margin: 72px 32px 40px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: relative;
    height: 337px;
    margin: 0 auto;
    width: 689px;
    max-width: 800px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      width: 1110px;
      height: 543px;
      max-width: 1110px;
    }
  }
`;

const MapImageWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
  }
`;

const MapImage = styled.img`
  max-width: 100%;
  height: auto;
`;

import styled from "styled-components";

const mobilemap =
  process.env.PUBLIC_URL + "/assets/images/mobile/world-map-mobile.png";

export default function MobileMap() {
  return (
    <MobileMapWrapper>
      <MapImageWrapper>
        <MapImage src={mobilemap} alt="world-map" />
      </MapImageWrapper>
    </MobileMapWrapper>
  );
}

const MobileMapWrapper = styled.div`
  margin: 72px 32px 40px;
`;
const MapImageWrapper = styled.div``;
const MapImage = styled.img`
  max-width: 100%;
  height: auto;
`;

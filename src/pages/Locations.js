import MobileMap from "../atoms/location/MobileMap";
import Places from "../molecules/locations/Places";
import FullArrow from "../organisms/FullArrow";
import SmallHeroFull from "../organisms/SmallHeroFull";

export default function Locations() {
  return (
    <div>
      <SmallHeroFull title="Locations" start={1} end={2} />
      <MobileMap />
      <Places />
      <FullArrow start={6} end={7} />
    </div>
  );
}

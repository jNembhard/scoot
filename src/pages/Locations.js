import WorldMap from "../components/atoms/location/WorldMap";
import { Seo } from "../components/atoms/Seo";
import Places from "../components/molecules/locations/Places";
import FullArrow from "../components/organisms/FullArrow";
import SmallHeroFull from "../components/organisms/SmallHeroFull";

export default function Locations() {
  return (
    <div>
      <Seo
        title="Locations"
        description="If you'd like to see Scoot in your hometown, be sure to let us know."
        type="webapp"
      />
      <SmallHeroFull title="Locations" start={1} end={2} />
      <WorldMap />
      <Places />
      <FullArrow start={6} end={7} />
    </div>
  );
}

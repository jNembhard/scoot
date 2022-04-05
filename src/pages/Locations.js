import { Helmet } from "react-helmet";
import WorldMap from "../components/atoms/location/WorldMap";
import Places from "../components/molecules/locations/Places";
import FullArrow from "../components/organisms/FullArrow";
import SmallHeroFull from "../components/organisms/SmallHeroFull";

export default function Locations() {
  return (
    <div>
      <Helmet>
        <title>Scoot | Locations</title>
      </Helmet>
      <SmallHeroFull title="Locations" start={1} end={2} />
      <WorldMap />
      <Places />
      <FullArrow start={6} end={7} />
    </div>
  );
}

import { Helmet } from "react-helmet";
import WorldMap from "../components/atoms/location/WorldMap";
import Places from "../components/molecules/locations/Places";
import FullArrow from "../components/organisms/FullArrow";
import SmallHeroFull from "../components/organisms/SmallHeroFull";

export default function Locations() {
  return (
    <div>
      <Helmet>
        <title>Locations | Scoot</title>
        <meta
          name="description"
          content="If you'd like to see Scoot in your hometown, be sure to let us know."
        />
      </Helmet>
      <SmallHeroFull title="Locations" start={1} end={2} />
      <WorldMap />
      <Places />
      <FullArrow start={6} end={7} />
    </div>
  );
}

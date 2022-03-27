import { Helmet } from "react-helmet";
import Value from "../molecules/about/Value";
import Accordion from "../molecules/about/Accordion";
import FullArrow from "../organisms/FullArrow";
import SmallHeroFull from "../organisms/SmallHeroFull";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Scoot | About</title>
      </Helmet>
      <SmallHeroFull title="About" start={0} end={1} />
      <FullArrow start={3} end={5} />
      <Value valuetitle="Our values" />
      <Accordion />
    </>
  );
}

import Value from "../components/molecules/about/Value";
import Accordion from "../components/molecules/about/Accordion";
import FullArrow from "../components/organisms/FullArrow";
import SmallHeroFull from "../components/organisms/SmallHeroFull";
import { Seo } from "../components/atoms/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn how Scoot provides mobility for the digital era to enhance your urban living experience."
        type="webapp"
      />
      <SmallHeroFull title="About" start={0} end={1} />
      <FullArrow start={3} end={5} />
      <Value valuetitle="Our values" />
      <Accordion />
    </>
  );
}

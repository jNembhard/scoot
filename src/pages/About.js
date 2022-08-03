import Value from "../components/molecules/about/Value";
import Accordion from "../components/molecules/about/Accordion";
import FullArrow from "../components/organisms/FullArrow";
import SmallHeroFull from "../components/organisms/SmallHeroFull";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Scoot</title>
        <meta
          name="description"
          content="Learn how Scoot provides mobility for the digital era to enhance your urban living experience."
        />
      </Helmet>
      <SmallHeroFull title="About" start={0} end={1} />
      <FullArrow start={3} end={5} />
      <Value valuetitle="Our values" />
      <Accordion />
    </>
  );
}

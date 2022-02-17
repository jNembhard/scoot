import SmallHero from "../molecules/about/SmallHero";
import { herodata } from "../data/herodata.js";
import Value from "../molecules/about/Value";
import Accordion from "../molecules/about/Accordion";
import FullArrow from "../organisms/FullArrow";

export default function About() {
  return (
    <>
      {herodata.slice(0, 1).map((hero) => (
        <SmallHero
          key={hero.id}
          id={hero.id}
          heroimages={hero.heroimages.mobile}
          title="About"
          alt={hero.alt}
        />
      ))}
      <FullArrow start={3} end={5} />
      <Value valuetitle="Our values" />
      <Accordion />
    </>
  );
}

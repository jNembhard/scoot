import { herodata } from "../data/herodata.js";
import SmallHero from "../molecules/about/SmallHero.js";
import styled from "styled-components";

export default function SmallHeroFull({ start, end, title }) {
  return (
    <SmallHeroFullWrapper>
      {herodata.slice(start, end).map((hero) => (
        <SmallHero
          key={hero.id}
          id={hero.id}
          heroimages={hero.heroimages.mobile}
          title={title}
          alt={hero.alt}
        />
      ))}
    </SmallHeroFullWrapper>
  );
}

const SmallHeroFullWrapper = styled.section``;

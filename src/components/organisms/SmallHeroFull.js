import { herodata } from "../../data/herodata.js";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import SmallHero from "../molecules/about/SmallHero.js";
import styled from "styled-components";

export default function SmallHeroFull({ start, end, title }) {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width:767px)`);

  return (
    <SmallHeroFullWrapper>
      {herodata.slice(start, end).map((hero) => (
        <SmallHero
          key={hero.id}
          id={hero.id}
          heroimages={
            breakPoint1200
              ? hero.heroimages.desktop
              : breakPoint767
              ? hero.heroimages.tablet
              : hero.heroimages.mobile
          }
          title={title}
          alt={hero.alt}
        />
      ))}
    </SmallHeroFullWrapper>
  );
}

const SmallHeroFullWrapper = styled.section``;

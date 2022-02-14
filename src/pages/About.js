import AboutHero from "../molecules/about/AboutHero";
import ArrowFeatures from "../molecules/features/ArrowFeatures";
import { arrowfeatures } from "../data/homedata/arrowfeatures.js";
import Value from "../molecules/about/Value";
import styled from "styled-components";
import Accordion from "../molecules/about/Accordion";

export default function About() {
  return (
    <>
      <AboutHero />
      <ArrowWrap>
        {arrowfeatures.slice(3, 5).map((arrowfeature) => (
          <ArrowFeatures
            key={arrowfeature.id}
            id={arrowfeature.id}
            numbers={arrowfeature.id}
            image={arrowfeature.image}
            arrowimage={arrowfeature.arrowimage}
            title={arrowfeature.title}
            description={arrowfeature.description}
          />
        ))}
      </ArrowWrap>
      <Value valuetitle="Our values" />
      <Accordion />
    </>
  );
}

const ArrowWrap = styled.div`
  overflow: hidden;
`;

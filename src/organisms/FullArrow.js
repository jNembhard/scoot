import { arrowfeatures } from "../data/homedata/arrowfeatures.js";
import styled from "styled-components";
import ArrowFeatures from "../molecules/features/ArrowFeatures.js";

export default function FullArrow({ start, end }) {
  return (
    <FullArrowWrap>
      {arrowfeatures.slice(start, end).map((arrowfeature) => (
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
    </FullArrowWrap>
  );
}

const FullArrowWrap = styled.section`
  overflow: hidden;
`;

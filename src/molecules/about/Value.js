import React from "react";
import styled from "styled-components";
import ValueFeatures from "../features/ValueFeatures";
import { valuefeatures } from "../../data/valuefeatures";

function Value({ valuetitle }) {
  return (
    <ValueWrapper>
      <TitleWrapper>
        <Title>{valuetitle}</Title>
      </TitleWrapper>
      {valuefeatures.map((valuefeature) => (
        <ValueFeatures
          key={valuefeature.id}
          id={valuefeature.id}
          number={valuefeature.id}
          image={valuefeature.image}
          title={valuefeature.title}
          description={valuefeature.description}
        />
      ))}
    </ValueWrapper>
  );
}

export default Value;

const ValueWrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 32px;
  margin-bottom: 145px;
`;
const TitleWrapper = styled.div``;
const Title = styled.h4`
  font-size: 32px;
  line-height: 32px;
  letter-spacing: -1.43px;
`;

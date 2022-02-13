import styled from "styled-components";
import HomeFeatures from "./molecules/HomeFeatures";
import HomeHero from "./organisms/HomeHero";
import { homefeatures } from "./data/homedata/homefeatures";
import { arrowfeatures } from "./data/homedata/arrowfeatures";
import ArrowFeatures from "./molecules/features/ArrowFeatures";

function App() {
  return (
    <>
      <HomeHero />
      <HomeFeaturesWrap>
        {homefeatures.map((homefeature) => (
          <HomeFeatures
            key={homefeature.id}
            id={homefeature.id}
            icon={homefeature.icon}
            title={homefeature.title}
            description={homefeature.description}
          />
        ))}
      </HomeFeaturesWrap>
      <ArrowWrap>
        {arrowfeatures.slice(0, 3).map((arrowfeature) => (
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
    </>
  );
}

export default App;

const HomeFeaturesWrap = styled.div`
  margin: 800px 32px 0;
`;

const ArrowWrap = styled.div`
  overflow: hidden;
`;

import styled from "styled-components";
import HomeFeatures from "./molecules/HomeFeatures";
import HomeHero from "./organisms/HomeHero";
import { homefeatures } from "./data/homedata/homefeatures";
import FullArrow from "./organisms/FullArrow";

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
      <FullArrow start={0} end={3} />
    </>
  );
}

export default App;

const HomeFeaturesWrap = styled.div`
  margin: 800px 32px 0;
`;

import styled from "styled-components";
import HomeFeatures from "./components/molecules/HomeFeatures";
import HomeHero from "./components/organisms/HomeHero";
import { homefeatures } from "./data/homedata/homefeatures";
import FullArrow from "./components/organisms/FullArrow";
import { Seo } from "./components/atoms/Seo";

function App() {
  return (
    <AppWrap>
      <Seo
        title="Home"
        description="Use our app to locate the nearest bike, unlock it with a tap, and you're away! Let's get scootin'"
        type="webapp"
      />
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
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    overflow-x: hidden;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      max-width: 1440px;
    }
  }
`;

const HomeFeaturesWrap = styled.div`
  margin: 800px 32px 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 122px 98px 0;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      display: flex;
      margin: 100px 105px 0;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        display: flex;
        margin: 160px 165px 0;
      }
    }
  }
`;

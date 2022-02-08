// import logo from "./logo.svg";
import styled from "styled-components";
import HomeFeatures from "./molecules/HomeFeatures";
import HomeHero from "./organisms/HomeHero";
import { homefeatures } from "./data/homefeatures";

function App() {
  return (
    <>
      <HomeHero />
      <section style={{ margin: "800px 32px 120px" }}>
        {homefeatures.map((homefeature) => (
          <HomeFeatures
            key={homefeature.id}
            id={homefeature.id}
            icon={homefeature.icon}
            title={homefeature.title}
            description={homefeature.description}
          />
        ))}
      </section>
    </>
  );
}

export default App;

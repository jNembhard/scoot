import { Helmet } from "react-helmet";
import Value from "../components/molecules/about/Value.js";
import FullArrow from "../components/organisms/FullArrow.js";
import JobsFull from "../components/organisms/JobsFull.js";
import SmallHeroFull from "../components/organisms/SmallHeroFull.js";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Scoot</title>
        <meta
          name="description"
          content="Check out our openings and support Scoot's mission for better urban living."
        />
      </Helmet>
      <SmallHeroFull title="Careers" start={1} end={2} />
      <FullArrow start={5} end={6} />
      <Value valuetitle="Why join us?" />
      <JobsFull />
    </>
  );
}

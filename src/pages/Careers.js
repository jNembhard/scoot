import { Helmet } from "react-helmet";
import Value from "../molecules/about/Value.js";
import FullArrow from "../organisms/FullArrow.js";
import JobsFull from "../organisms/JobsFull.js";
import SmallHeroFull from "../organisms/SmallHeroFull.js";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Scoot | Careers</title>
      </Helmet>
      <SmallHeroFull title="Careers" start={1} end={2} />
      <FullArrow start={5} end={6} />
      <Value valuetitle="Why join us?" />
      <JobsFull />
    </>
  );
}

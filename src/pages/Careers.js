import { jobs } from "../data/jobs.js";
import Value from "../molecules/about/Value.js";
import Jobs from "../molecules/Jobs.js";
import FullArrow from "../organisms/FullArrow.js";
import SmallHeroFull from "../organisms/SmallHeroFull.js";

export default function Careers() {
  return (
    <>
      <SmallHeroFull title="Careers" start={1} end={2} />
      <FullArrow start={5} end={6} />
      <Value valuetitle="Why join us?" />
      {jobs.map((job) => (
        <Jobs
          key={job.id}
          id={job.id}
          title={job.title}
          location={job.location}
        />
      ))}
    </>
  );
}

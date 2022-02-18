import { herodata } from "../data/herodata.js";
import { jobs } from "../data/jobs.js";
import SmallHero from "../molecules/about/SmallHero.js";
import Value from "../molecules/about/Value.js";
import Jobs from "../molecules/Jobs.js";
import FullArrow from "../organisms/FullArrow.js";

export default function Careers() {
  return (
    <>
      {herodata.slice(1, 2).map((hero) => (
        <SmallHero
          key={hero.id}
          id={hero.id}
          heroimages={hero.heroimages.mobile}
          title="Careers"
          alt={hero.alt}
        />
      ))}
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

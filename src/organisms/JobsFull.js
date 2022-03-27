import styled from "styled-components";
import Jobs from "../molecules/Jobs";
import { jobs } from "../data/jobs";

export default function JobsFull() {
  return (
    <JobsFullWrapper>
      {jobs.map((job) => (
        <Jobs
          key={job.id}
          id={job.id}
          title={job.title}
          location={job.location}
        />
      ))}
    </JobsFullWrapper>
  );
}

const JobsFullWrapper = styled.div`
  margin-bottom: 120px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin: 120px 120px 160px;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      margin: 120px 165px 160px;
    }
  }
`;

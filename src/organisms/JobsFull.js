import React from "react";
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
`;

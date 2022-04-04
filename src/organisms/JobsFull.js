import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Jobs from "../molecules/Jobs";
import { jobs } from "../data/jobs";

export default function JobsFull() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <JobsFullWrapper ref={ref}>
      {jobs.map((job, i) => (
        <motion.div
          custom={i}
          animate={controls}
          initial="hidden"
          variants={titleVariants}
        >
          <Jobs
            key={job.id}
            id={job.id}
            title={job.title}
            location={job.location}
          />
        </motion.div>
      ))}
    </JobsFullWrapper>
  );
}

const titleVariants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.4 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const JobsFullWrapper = styled.div`
  margin-bottom: 120px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin: 120px 120px 160px;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      margin: 120px 165px 160px;
    }
  }
`;

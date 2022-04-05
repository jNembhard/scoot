import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { locations } from "../../../data/locations";
import styled from "styled-components";

export default function Places() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <PlacesWrapper>
      {locations.map((location, i) => (
        <TitleWrapper
          key={location.id}
          id={location.id}
          ref={ref}
          custom={i}
          animate={controls}
          initial="hidden"
          variants={titleVariants}
        >
          <Title>{location.title}</Title>
        </TitleWrapper>
      ))}
    </PlacesWrapper>
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

const PlacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 22px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;
const TitleWrapper = styled(motion.div)`
  margin: 8px 0;
  min-width: 311px;

  background-color: ${({ theme }) => theme.colors.lightYellow};
  text-align: center;
`;
const Title = styled.h4`
  color: ${({ theme }) => theme.colors.darkNavy};
`;

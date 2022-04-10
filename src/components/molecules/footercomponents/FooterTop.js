import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const semicircles =
  process.env.PUBLIC_URL + "/assets/patterns/semi-circles.svg";

const applestore = process.env.PUBLIC_URL + "/assets/icons/app-store.svg";
const googleplay = process.env.PUBLIC_URL + "/assets/icons/google-play.svg";

const appstores = [
  { name: "apple-store", store: applestore },
  { name: "google-play", store: googleplay },
];

export default function FooterTop({ title }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <FooterTopWrap id="signup">
      <BackdropContainer>
        <Backdrop src={semicircles} alt="" />
      </BackdropContainer>
      <TopContainer>
        <CTAWrap
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={titleVariants}
        >
          <CTATablet>{title}</CTATablet>
          <CTAMobile>{title}</CTAMobile>
        </CTAWrap>
        <AppStoreWrap>
          {appstores.map(({ name, store }, index) => (
            <AppImageWrapper
              key={index}
              custom={index}
              animate={controls}
              initial="hidden"
              variants={appVariants}
            >
              <AppImage appstore={name} src={store} alt={name} />
            </AppImageWrapper>
          ))}
        </AppStoreWrap>
      </TopContainer>
    </FooterTopWrap>
  );
}

const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, y: -100 },
};

const appVariants = {
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.3, duration: 0.4 },
  }),
  hidden: { opacity: 0, y: -100 },
};

const FooterTopWrap = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  height: 320px;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 300px;
  }
`;

const BackdropContainer = styled.div`
  position: absolute;
  backgrond-color: ${({ theme }) => theme.colors.dimGrey};
  z-index: 0;
  top: 187px;
  left: -600px;
  right: 10px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    top: 140px;
    left: -390px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      top: 140px;
      left: unset;
      right: -100px;
    }
  }
`;

const Backdrop = styled.img``;

const TopContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
  left: 32px;
  right: 32px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    flex-direction: row;
    margin: 51px 165px 0;
    text-align: left;
    left: 0;
    right: 0;
    justify-content: space-between;
  }
`;
const CTAWrap = styled(motion.div)`
  padding-top: 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding-top: unset;
    margin: 60px 78px 40px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 415px;
      margin: 60px 39px 40px;
    }
  }
`;

const CTATablet = styled.h2`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: unset;
    font-size: 48px;
    letter-spacing: -2.14px;
    color: ${({ theme }) => theme.colors.snow};
    margin-bottom: 40px;
  }
`;
const CTAMobile = styled.h3`
  font-size: 32px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.snow};
  margin-bottom: 40px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const AppStoreWrap = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 88px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin-bottom: -40px;
  }
`;

const AppImageWrapper = styled(motion.div)`
  margin: 0 6px;
`;

const AppImage = styled.img`
  width: ${({ appstore }) => (appstore === "apple-store" ? "113px" : "130px")};
  height: 40px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: ${({ appstore }) =>
      appstore === "apple-store" ? "159px" : "182px"};
    height: 52px;
  }
`;

import React from "react";
import styled from "styled-components";

const semicircles =
  process.env.PUBLIC_URL + "/assets/patterns/semi-circles.svg";

const applestore = process.env.PUBLIC_URL + "/assets/icons/app-store.svg";
const googleplay = process.env.PUBLIC_URL + "/assets/icons/google-play.svg";

const appstores = [
  { name: "apple-store", store: applestore },
  { name: "google-play", store: googleplay },
];

export default function FooterTop() {
  return (
    <FooterTopWrap>
      <BackdropContainer>
        <Backdrop src={semicircles} alt="" />
      </BackdropContainer>
      <TopContainer>
        <CTAWrap>
          <CTA>Sign up and Scoot off today</CTA>
        </CTAWrap>
        <AppStoreWrap>
          {appstores.map(({ name, store }, index) => (
            <AppImageWrapper key={index}>
              <AppImage appstore={name} src={store} alt={name} />
            </AppImageWrapper>
          ))}
        </AppStoreWrap>
      </TopContainer>
    </FooterTopWrap>
  );
}

const FooterTopWrap = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dimGrey};
  height: 320px;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 300px;
  }
`;

const BackdropContainer = styled.div`
  position: absolute;
  backgrond-color: ${({ theme }) => theme.colors.dimNavy};
  z-index: 0;
  top: 187px;
  left: -600px;
  right: 10px;
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
`;
const CTAWrap = styled.div`
  padding-top: 32px;
`;
const CTA = styled.h3`
  font-size: 32px;
  letter-spacing: -1.43px;
  color: ${({ theme }) => theme.colors.snow};
  margin-bottom: 40px;
`;

const AppStoreWrap = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 88px;
`;
const AppImageWrapper = styled.div`
  margin: 0 6px;
`;
const AppImage = styled.img`
  width: ${({ appstore }) => (appstore === "apple-store" ? "113px" : "130px")};
  height: 40px;
`;

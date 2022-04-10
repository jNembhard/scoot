import { Link } from "react-router-dom";
import styled from "styled-components";

const facebook = process.env.PUBLIC_URL + "/assets/icons/facebook.svg";
const instagram = process.env.PUBLIC_URL + "/assets/icons/instagram.svg";
const twitter = process.env.PUBLIC_URL + "/assets/icons/twitter.svg";
const navLinks = [
  { name: "about", url: "/about" },
  { name: "location", url: "/locations" },
  { name: "careers", url: "/career" },
];
const socials = [
  {
    id: 1,
    name: "facebook",
    media: facebook,
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    name: "twitter",
    media: twitter,
    url: "https://twitter.com/",
  },
  {
    id: 3,
    name: "instagram",
    media: instagram,
    url: "https://www.instagram.com/",
  },
];

export default function FooterBottom() {
  return (
    <FooterBottomWrap>
      <Container>
        <LogoContainer>
          <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
            <h3>scoot</h3>
          </Link>
        </LogoContainer>
        <NavContainer>
          {navLinks.map(({ name, url }, index) => (
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={url}
              key={index}
            >
              <NavName>{name}</NavName>
            </Link>
          ))}
        </NavContainer>
        <SocialContainer>
          {socials.map((social) => (
            <a
              key={social.id}
              target="_blank"
              rel="noopener noreferrer"
              href={social.url}
            >
              <SocialIcon src={social.media} alt={social.name} />
            </a>
          ))}
        </SocialContainer>
      </Container>
    </FooterBottomWrap>
  );
}

const FooterBottomWrap = styled.div`
  width: 100%;
  height: 438px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 96px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      height: 76px;
    }
  }
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: center;
    width: 100%;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-height: 76px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 39px 0 0;
    height: 96px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      height: 76px;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.snow};
  }
`;

const NavContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 85px;
  padding: 0 12px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    width: 249px;
    height: 96px;
    margin: 36px 0;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      height: 72px;
      margin: 35px 0 32px;
    }
  }
`;

const NavName = styled.p`
  font-family: "Space Mono", monospace;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dimGrey};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 35px 16px 35px 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  height: 24px;
  margin: 0 105px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    margin: 36px 40px 36px 152px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      flex-direction: row;
      margin: 36px 40px 36px 570px;
    }
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`;

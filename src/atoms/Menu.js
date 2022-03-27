import { Link } from "react-router-dom";
import styled from "styled-components";
const navLinks = [
  { name: "about", url: "/about" },
  { name: "location", url: "/locations" },
  { name: "careers", url: "/career" },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <TitleWrap>
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
          <Title>scoot</Title>
        </Link>
      </TitleWrap>
      <MenuLinks>
        {navLinks.map(({ name, url }, index) => (
          <li key={index}>
            <Link style={{ color: "inherit", textDecoration: "none" }} to={url}>
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </MenuLinks>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <Button>get scootin</Button>
      </Link>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-family: "Space Mono", monospace;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
    margin-top: 22px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0;
      width: 100%;
      justify-content: unset;
    }
  }
`;

const TitleWrap = styled.div`
  width: 107px;
  padding-right: 60px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding-right: 0;
  }
`;

const Title = styled.h3`
  width: 0;
`;

const MenuLinks = styled.ul`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 249px;
    height: 45px;
    display: inline-flex;
    align-items: left;
    justify-content: space-between;
    font-size: 15px;
    margin-right: 64px;

    li {
      height: 45px;
      list-style-type: none;

      p {
        text-transform: capitalize;
        font-family: "Space Mono", monospace;
        color: ${({ theme }) => theme.colors.dimGrey};

        &:hover {
          color: ${({ theme }) => theme.colors.darkNavy};
        }
      }
    }

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin-right: 400px;
      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin-right: 530px;
      }
    }
  }
`;

const Button = styled.button`
  font-family: "Space Mono", monospace;
  font-size: 15px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.snow};
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 180px;
  height: 53px;
  border: 0;
  margin: 22px 0 21px 0;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.yellow};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0;
  }
`;

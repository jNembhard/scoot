import { useEffect, useState, useRef } from "react";
import useScrollBlock from "../../hooks/useScrollBlock";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const closeIcon = process.env.PUBLIC_URL + "/assets/icons/close.svg";
const openIcon = process.env.PUBLIC_URL + "/assets/icons/hamburger.svg";
const navLinks = [
  { name: "about", url: "/about" },
  { name: "location", url: "/locations" },
  { name: "careers", url: "/career" },
];

function BurgerNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const ref = useRef();

  useOnClickOutside(ref, () =>
    setModalOpen(false) ? blockScroll() : allowScroll()
  );

  useEffect(() => {
    const body = document.querySelector("body");
    const scrollY = document.body.style.top;

    body.style.overflow = modalOpen ? "hidden" : "unset";
    body.style.position = modalOpen ? "fixed" : "";

    body.style.top = modalOpen
      ? `-${window.scrollY}px`
      : window.scrollTo(0, parseInt(scrollY || "0") * -1);
  });

  const toggle = () => setModalOpen(!modalOpen);
  const getImageName = () => (modalOpen ? closeIcon : openIcon);
  return (
    <BurgerWrap ref={ref}>
      <BurgerContainer>
        <img onClick={() => toggle()} src={getImageName()} alt="close-icon" />
      </BurgerContainer>
      <SidebarContainer modalOpen={modalOpen}>
        <UL>
          {navLinks.map(({ name, url }, index) => (
            <LinkList key={index}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={url}
              >
                <p onClick={() => toggle()}>{name}</p>
              </Link>
            </LinkList>
          ))}
        </UL>
        <HashLink
          style={{ textDecoration: "none", color: "inherit" }}
          to="#signup"
        >
          <Button onClick={() => toggle()}>get scootin</Button>
        </HashLink>
      </SidebarContainer>
    </BurgerWrap>
  );
}

export default BurgerNav;

const BurgerWrap = styled.div`
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  cursor: pointer;
`;
const SidebarContainer = styled.div`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.darkNavy};
  width: 256px;
  height: 100vh;
  position: fixed;
  top: 68px;
  left: -13px;
  transform: ${(props) =>
    props.modalOpen ? "translateY(0)" : "translateX(-150%)"};
  transition: transform 0.2s ease-in-out;
  z-index: 5;
`;

const UL = styled.ul`
  padding: 33px 135px 0 32px;
`;

const LinkList = styled.li`
  list-style-type: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.snow};
  margin: 12px 0;
  p {
    font-family: "Space Mono", monospace;
    font-size: 18px;
  }
`;

const Button = styled.button`
  font-family: "Space Mono", monospace;
  font-size: 15px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.snow};
  background-color: ${({ theme }) => theme.colors.yellow};
  margin: 339px 32px 38px;
  width: 192px;
  height: 53px;
  border: 0;
  cursor: pointer;
`;

import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export default function ButtonScoot({ word }) {
  return (
    <HashLink
      style={{ color: "inherit", textDecoration: "none" }}
      to={
        word === "learn more"
          ? "/about"
          : word === "get scootin"
          ? "/#signup"
          : "/"
      }
    >
      <Button>{word}</Button>
    </HashLink>
  );
}

const Button = styled.button`
  font-family: "Space Mono", monospace;
  font-size: 15px;
  text-transform: capitalize;
  width: 180px;
  height: 53px;
  color: ${({ theme }) => theme.colors.snow};
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`;

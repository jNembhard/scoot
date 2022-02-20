import styled from "styled-components";

export default function ApplyButton({ word }) {
  return <Button>{word}</Button>;
}

const Button = styled.button`
  font-family: "Space Mono", monospace;
  font-size: 15px;
  text-transform: capitalize;
  width: 247px;
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

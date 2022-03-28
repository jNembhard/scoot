import { createGlobalStyle } from "styled-components";
import SpaceMonoBold from "./fonts/SpaceMono-Bold.ttf";
import LexendDecaRegular from "./fonts/LexendDeca-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    font-family: "Space Mono", monospace;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -2.5px;
  }

  h2 {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -2.14px;
  }

  h3 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.79px;
  }

  h4 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -1.07px;
  }

  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    line-height: 25px;
  }

  @font-face {
    font-family: "Space Mono";
    src: url(${SpaceMonoBold}) format("truetype");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Lexend Deca";
    src: url(${LexendDecaRegular}) format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;

import React from "react";
// import styled from "styled-components";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import Header from "../molecules/Header";
import Footer from "../molecules/footercomponents/Footer";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

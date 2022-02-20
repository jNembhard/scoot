import Header from "../molecules/Header";
import Footer from "../molecules/footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

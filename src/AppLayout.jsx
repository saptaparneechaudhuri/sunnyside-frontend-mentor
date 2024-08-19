import Landing from "./components/Landing";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import Images from "./components/Images";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useRef } from "react";

const AppLayout = () => {
  const ref = useRef(null);
  const handleScroll = () => {
    console.log("clicked");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="w-full h-full">
      <Header />
      <Landing onClickArrow={handleScroll} />
      <Content reference={ref} />
      <Testimonials />
      <Images />
      <Footer />
    </main>
  );
};

export default AppLayout;

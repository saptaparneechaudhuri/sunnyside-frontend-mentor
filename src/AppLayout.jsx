import Landing from "./components/Landing";
import Content from "./components/Content";
import Testimonials from "./components/Testimonials";
import Images from "./components/Images";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <main className="w-full h-full">
      <Header />
      <Landing />
      <Content />
      <Testimonials />
      <Images />
      <Footer />
    </main>
  );
};

export default AppLayout;

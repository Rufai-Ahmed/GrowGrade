import Admission from "./Admission";
import Features from "./Features";
import Fee from "./Fee";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Imageslide from "./Imageslide";
import Student from "./Student";

const Holder = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Imageslide /> */}
      <Features />
      <Fee />
      <Student />
      <Admission />
      <Footer />
    </div>
  );
};

export default Holder;

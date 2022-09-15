import { Fragment } from "react";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Products from "../components/Products/Products";
import Faq from "../components/Section/Faq";
import Features from "../components/Section/Features";
import Feedback from "../components/Section/Feedback";
import Overview from "../components/Section/Overview";
import Section from "../components/Section/Section";
// import Zoom from "react-reveal/Zoom";

const Home = () => {
  return (
    <Fragment>
      <div className="custom-bg-color pb-5">
        <div className="container custom-container">
          <Header />
        </div>
        <Section />
        <div className="container custom-container">
          <Products />
        </div>
      </div>
      <Overview />
      <div className="custom-bg-color mb-7">
        <div className="container custom-container">
          <Faq />
          <Feedback />
          <Features />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;

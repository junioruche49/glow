import Nav from "./Nav";
import nextIcon from "../../assets/img/next-button.png";
import playIcon from "../../assets/img/play.png";
import pngegg from "../../assets/img/pngegg.png";
import rightArw from "../../assets/img/right-arw.png";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <header className="">
      <Fade top>
        <Nav />
      </Fade>
      <div className="row">
        <Fade bottom>
          <div className="col-6">
            <section>
              <h2 className="header-title ">
                Let your skin <br />
                Going Out.
              </h2>
              <p className="para-1 mb-5">
                We want to bring to the world through our products that very
                special feeling joy, healthy and positive energy.
              </p>
              <button className="btn btn-lg btn-1 pl-4 pr-4 pt-3 pb-3">
                Shop Now <img src={rightArw} className="ml-1" />
              </button>
              <button className="btn btn-lg btn-2 btn-default ml-2">
                <img src={playIcon} className="mr-2" />
                How to use
              </button>
            </section>
          </div>
          <div className="col-6">
            <img src={pngegg} className="top-img" />
          </div>
        </Fade>
      </div>
    </header>
  );
};

export default Header;

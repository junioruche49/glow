import { Fragment } from "react";
import Loreal from "../../assets/img/Loreal.png";
import calvinKlein from "../../assets/img/calvin-klein.png";
import framesi from "../../assets/img/logo-framesi-milan.png";
import revlon from "../../assets/img/revlon-logo.png";
import esteeLauder from "../../assets/img/estee-lauder.png";
import moisturizer from "../../assets/img/the-moisturizer.jpeg";
import lotion from "../../assets/img/lotion.jpeg";
import cream from "../../assets/img/cream.jpeg";
import IG from "../../assets/img/IG.png";
import rightArrow from "../../assets/img/right-arrow.png";
import Fade from "react-reveal/Fade";

const Features = () => {
  return (
    <Fragment>
      <section className="row mt-7 pb-7">
        <div className="col-12">
          <Fade right>
            <img src={Loreal} alt="Loreal" className="similarProd" />
            <img src={calvinKlein} alt="calvinKlein" className="similarProd" />
            <img src={framesi} alt="framesi" className="similarProd" />
            <img src={revlon} alt="revlon" className="similarProd" />
            <img src={esteeLauder} alt="esteeLauder" className="similarProd" />
          </Fade>
        </div>
      </section>
      <Fade right>
        <section className="row marginBottom">
          <div className="col-3 ">
            <div className="custBox">
              <img src={moisturizer} alt="moisturizer" className="img-fluid" />
            </div>
          </div>
          <div className="col-3 ">
            <div className="custBox">
              <img
                src={cream}
                alt="cream"
                className="img-fluid"
                style={{ height: "100%" }}
              />
            </div>
          </div>
          <div className="col-3 ">
            <div className="custBox">
              <img src={lotion} alt="lotion" className="img-fluid" />
            </div>
          </div>
          <div className="col-3 ">
            <div className="custBox inquiry">
              <div className="text-center mb-3">
                <img src={IG} alt="IG" className="img-fluid" />
              </div>
              <div className="text-center">
                <p className="text-white">
                  Join us and get all the services we provide
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-cust">
                  <img src={rightArrow} alt="button" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </Fragment>
  );
};

export default Features;

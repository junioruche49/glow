import Image2 from "../../assets/img/pngegg-2.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Overview = () => {
  return (
    <div className="custom-bg-color pt-5">
      {/* <div className="container custom-container mt-7 b-7"> */}
      <div className="row noMargin">
        <div className="col-9 custom-bg-color-2">
          <div className="row spacing-box">
            <div className="col-7">
              <Fade bottom>
                <h2 className="h-3">
                  We make going all natural <span>Beauty</span>.
                </h2>
                <p className="para-3">
                  Made with natures best ingredients - our products transparent
                  ingredient lists allow you to know.
                </p>
                <div className="row mt-7">
                  <div className="col-4 caption text-center">
                    Product <br /> Users <br /> <span>7M+</span>
                  </div>
                  <div className="col-4 caption text-center">
                    Brand <br /> Product <br /> <span>99+</span>
                  </div>
                  <div className="col-4 caption text-center">
                    Product <br /> Reviews <br /> <span>5M+</span>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="col-3 img-curve img-curve2">
          <div className="img-4">
            <Zoom>
              <img src={Image2} className="img-6" />
            </Zoom>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Overview;

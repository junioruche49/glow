import curology from "../../assets/img/curology.jpeg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Section = () => {
  return (
    <section>
      {/* <div className="container custom-container"> */}
      <div className="row mb-5 noMargin">
        <div className="col-4 zIndex">
          <Zoom>
            <img src={curology} className="prd-img" />
          </Zoom>
        </div>
        {/* <Fade top> */}
        <div className="col-8 bg-3">
          <div className="row mb-5">
            <div className="col-12">
              <Fade bottom>
                <h2 className="h-1">
                  The self care brand that's setting a new{" "}
                  <span>standard Clean</span> products.
                </h2>
              </Fade>
            </div>
          </div>
          <Fade bottom>
            <div className="row">
              <div className="col-6">
                <h4 className="h-2 mb-4">Where are products made</h4>
                <p className="para-2">
                  Many brands, especially in period care, carry products that
                  take centuries
                </p>
              </div>
              <div className="col-6 mb-4">
                <h4 className="h-2 mb-4">Where are products made</h4>
                <p className="para-2">
                  Many brands, especially in period care, carry products that
                  take centuries
                </p>
              </div>
            </div>
          </Fade>
        </div>
        {/* </Fade> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Section;

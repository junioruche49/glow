import Curology from "../../assets/img/Curology.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Faq = () => {
  return (
    <div className="row pt-12 pb-7">
      <div className="col-6">
        <Zoom>
          <img src={Curology} className="img-fluid pr-5" />
        </Zoom>
      </div>
      <div className="col-6">
        <Fade bottom>
          <h2 className="h-3 mb-5">
            You have <span> questions</span>, we have answers
          </h2>
          <div id="accordion">
            <div class="card noCardBorder">
              <div class="card-header cardBorder" id="headingOne">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link btn-bold"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Where are products made?
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                </div>
              </div>
            </div>
            <div class="card noCardBorder">
              <div class="card-header cardBorder" id="headingTwo">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed btn-bold"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How to purchase our product?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua
                </div>
              </div>
            </div>
            <div class="card noCardBorder">
              <div class="card-header cardBorder cardBottom" id="headingThree">
                <h5 class="mb-0">
                  <button
                    class="btn btn-link collapsed btn-bold"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How to purchase our product?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body ">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Faq;

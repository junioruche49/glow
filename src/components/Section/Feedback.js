import FeedbackImg from "../../assets/img/pngegg-3.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Feedback = () => {
  return (
    <section className="row  mt-7 ">
      <div className="col-10 bg-white">
        <Fade right>
          <p className="para-5 p-width">
            The UK jewellery awards is an event we always look forward to and we
            are so honoured to be recognised.
          </p>
          <br />
          <h6 className="para-4 mt-4">Jane Cooper</h6>
          <p>Naperville, USA</p>
        </Fade>
      </div>
      <div className="col-2 img-curve">
        <Zoom>
          <img src={FeedbackImg} alt="feedback" className="img-5" />
        </Zoom>
      </div>
    </section>
  );
};

export default Feedback;

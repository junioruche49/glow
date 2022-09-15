import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import linkedin from "../../assets/img/linkedin.png";
import send from "../../assets/img/send.png";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container custom-container">
        <Fade right>
          <div className="row mb-7">
            <div className="col-3">
              <p className="logo-img">
                Glow <span>.</span>
              </p>
              <p className="para-6">
                Keep Up With Our New Releases, Beauty Tips and what Emma's Been
                Up To.
              </p>
              <section className="footer-img">
                <img src={facebook} />
                <img src={instagram} />
                <img src={twitter} />
                <img src={linkedin} />
              </section>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <div className="col-4">
                      <h3>Company</h3>
                      <ul>
                        <li>About</li>
                        <li>Jobs</li>
                        <li>Branding</li>
                        <li>Newsroom</li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h3>Resources</h3>
                      <ul>
                        <li>College</li>
                        <li>Support</li>
                        <li>Safety</li>
                        <li>StreamKit</li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h3>Terms & Condition</h3>
                      <ul>
                        <li>Policy</li>
                        <li>Faq</li>
                        <li>Return & Delivery</li>
                        <li>Tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <h3>Subscribe</h3>
                  <p>Get 10% of your first order</p>
                  <div className="input-img">
                    <input type="text" placeholder="Enter your Email" />
                    <img src={send} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <section className="col-12 text-center ">
              <div className="copyright">
                Copyright 2022 Musemind | All rights reserved.
              </div>
            </section>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;

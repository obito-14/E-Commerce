import { BsDiscord, BsInstagram, BsYoutube } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterContact">
        <div>
          <p>Ready To Get Started?</p>
          <p>Talk Us Today</p>
        </div>
        <div>
          <Link to={"/contact"}>
            <button className="FooterBtn">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="FooterBox1">
        <div className="footerCard">
          <p className="FooterHeads">Vs Store</p>
          <p className="FooterInfo">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="footerCard">
          <p className="FooterHeads">SubScribe To Get Important Updates</p>
          <form>
            <input
              className="FooterInput"
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
              required
            />
            <input className="FooterBtn" type="submit" value="SubScribe" />
          </form>
        </div>
        <div className="footerCard">
          <p className="FooterHeads">Follow Us</p>
          <div className="FooterIconBox">
            <p className="FooterIcon">
              <BsDiscord />
            </p>
            <Link to={"https://www.instagram.com/x_obito._/"}>
              <p className="FooterIcon">
                <BsInstagram />
              </p>
            </Link>
            <Link
              to={"https://www.youtube.com/channel/UCHu2KIqBFOcdJK6jYON-glQ"}>
              <p className="FooterIcon">
                <BsYoutube />
              </p>
            </Link>
          </div>
        </div>
        <div className="footerCard">
          <p className="FooterHeads">Call US</p>
          <p className="FooterInfo">+91 12345678936</p>
        </div>
      </div>
      <hr />
      <div className="FooterBox1">
        <p className="FooterHeads">
          @{new Date().getFullYear()} VsStore.All Rights Revered
        </p>
        <p className="FooterHeads">
          Privacy Policy<p>Terms & Condition</p>
        </p>
      </div>
    </div>
  );
};

export default Footer;

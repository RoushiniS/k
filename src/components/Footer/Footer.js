import "./footer.css";
import Disclaimer from "./Disclaimer";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mainFooter container-fluid">
      <div className="flexCont">
        <div className="leftCont">
          <ul>
            <li>
              {" "}
              <Link className="lnv" to="/">
                About Us
              </Link>
            </li>
            <li>
              {" "}
              <Link className="lnv" to="/reiki">
                Reiki
              </Link>
            </li>
            <li>
              <Link className="lnv" to="/meipadam">
                MeiPadam
              </Link>
            </li>
            <li>
              {" "}
              <Link className="lnv" to="/cosmoenergies">
                Cosmoenergies
              </Link>
            </li>
            <li>
              {" "}
              <Link className="lnv" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Disclaimer />
            </li>
          </ul>
        </div>
      </div>
      <div class="container-fluid icons">
        <BsFacebook className="ic" />
        <BsTwitter className="ic" />
        <BsLinkedin className="ic" />
        <BsInstagram className="ic" />
      </div>

      <h6>@copyright. All rights reserved</h6>
    </div>
  );
};
export default Footer;

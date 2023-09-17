import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-nav">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top nsvj ">
        <div class="container-fluid">
          <div class="webname">Logo</div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse navItem"
            id="navbarSupportedContent"
          >
            <ul class="nv navbar-nav justify-content-center">
              <li class="lnv nav-item">
                <Link className="lnv" to="/">
                  About Us
                </Link>
              </li>
              <li class="lnv nav-item">
                <Link className="lnv" to="/reiki">
                  Reiki
                </Link>
              </li>
              <li class="lnv nav-item">
                <Link className="lnv" to="/meipadam">
                  MeiPadam
                </Link>
              </li>
              <li class="lnv nav-item">
                <Link className="lnv" to="/cosmoenergies">
                  Cosmoenergies
                </Link>
              </li>
              <li class="lnv nav-item">
                <Link className="lnv" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

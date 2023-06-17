import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";

import { Link } from "react-router-dom";

import NavbarSearch from "./Navbar-search";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary shadow-sm"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/contact_us"}
              >
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/login"}
              >
                Login/Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active d-flex"
                aria-current="page"
                to={"/cart"}
              >
                <span>
                  <i className="bi bi-cart2"></i>
                </span>
                <span>Cart</span>
              </Link>
            </li>
          </ul>
          <NavbarSearch />
        </div>
      </div>
    </nav>
  );
};

export default Header;

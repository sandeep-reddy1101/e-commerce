import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Badge from '@mui/material/Badge';

import NavbarSearch from "./Navbar-search";
import { logout } from "../../store";
import { removeUserLoginInfoFromSession } from "../../services/sessions";
import { openSnackBar } from "../../services/service";

const Header = () => {
  const userData = useSelector((state) => state.user.value);
  const userCart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  // Function to log out the user
  // It will remove user login info from session storage and dispatch logout resolver.
  const logoutUser = () => {
    removeUserLoginInfoFromSession();
    dispatch(logout());
    openSnackBar("success", "Logged out successfully", dispatch);
  };

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          e-shop
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
              {userData.login ? (
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={logoutUser}
                >
                  Log Out
                </button>
              ) : (
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/login"}
                >
                  Login/Signup
                </Link>
              )}
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
                <Badge badgeContent={userCart.length} color="primary" showZero>
                  <span>Cart</span>
                </Badge>
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

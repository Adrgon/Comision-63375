
import CardWidget from "../CardWidget/CardWidget";
import {Link, NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ cartCount, title }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/celular"
              >
                Phones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="/category/tablet"
              >
                Tablets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                to="/category/computers"
              >
                Noteboks
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <CardWidget cartCount={cartCount} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

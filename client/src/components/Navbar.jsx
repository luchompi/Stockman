import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useSesionStore as store } from "../stores/sesion.store";
import { successMessage } from "./messages";
const Navbar = ({ dateTime }) => {
  const isLogged = store((state) => state.isLogged);
  const logout = store((state) => state.logout);
  const userData = store((state) => state.userData);
  const cerrarSesion = () => {
    successMessage("Hecho", "Sesión cerrada correctamente");
    logout();
  };
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            {isLogged ? (
              <>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link link-body-emphasis px-2 active"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    About
                  </a>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="nav">
            {isLogged ? (
              <>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sesión iniciada como {userData?.username}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={cerrarSesion}>
                        Salir <i className="bi bi-door"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to={`/login`}
                    className="nav-link link-body-emphasis px-2"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link link-body-emphasis px-2">
                    Sign up
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Sotckman</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input
              type="text"
              readOnly
              value={dateTime}
              className="form-control"
            />
          </form>
        </div>
      </header>
    </>
  );
};

Navbar.propTypes = {
  dateTime: PropTypes.string.isRequired,
};

export default Navbar;

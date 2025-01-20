import Logo from "../Header/Logo";
import "./Navbar.css";
import menuIcon from "/icons/icons-menu.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-2">
        <div className="container-fluid px-0">
          <Logo />
          <button
            className="navbar-toggler"
            style={{ border: "none" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={menuIcon} alt="Menu" className="navbar-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ПРОЕКТЫ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ПОРЯДОК РАБОТЫ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  О КОМПАНИИ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ЧТО ТАКОЕ ТИМ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  КОНТАКТЫ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  КАЛЬКУЛЯТОР
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

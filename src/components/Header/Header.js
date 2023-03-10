import { Link } from "react-router-dom";
import "./Header.scss";
import Button from "../Button/Button";
import logo from "../../assets/Logo/logo.svg";
import mohan from "../../assets/Images/Mohan.jpg";

function Header({ DarkMode, setDarkMode }) {
  return (
    <header className={`header ${DarkMode ? `header--dark-mode` : ``}`}>
      <div className="header__container">
        <Link to="/" title="home">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <button
          className="toggle"
          onClick={() => setDarkMode(!DarkMode)}
        ></button>
        <div className="header__search">
          <form id="header__form" className="header__form">
            <label htmlFor="search" className="header__label"></label>
            <input
              id="search"
              className="header__text"
              type="text"
              placeholder="Search"
              name="searchBar"
            />
          </form>
          <img src={mohan} className="header__avatar" alt="avatar" />
          <Button className="btn--upload" text="Upload" link="/upload" />
        </div>
      </div>
    </header>
  );
}

export default Header;

import "./Header.scss";
import logo from "../../assets/Logo/logo.svg";
import mohan from "../../assets/Images/Mohan.jpg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <form id="header__form" class="header__form">
        <label for="search" class="header__label"></label>
        <input
          id="search"
          class="header__text"
          type="text"
          placeholder="Search"
          name="searchBar"
        />
        <button type="submit">Upload</button>
      </form>
      <img src={mohan} className="header__avatar" alt="avatar" />
    </header>
  );
}

export default Header;

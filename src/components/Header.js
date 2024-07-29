/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
// eslint-disable-next-line quotes

import { Link } from "react-router-dom";
import CoffeeLogo from "../images/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1>Code Café</h1>
      </Link>
    </header>
  );
}

export default Header;

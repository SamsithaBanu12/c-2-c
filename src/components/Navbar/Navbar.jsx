import Button from "../Button/Button";
import { NavbarStyled } from "./NavbarStyled";
import { FaBars } from "react-icons/fa6";

const Navbar = ({ onBarClicked }) => {
  return (
    <NavbarStyled>
      <nav className="navbarWrapper">
        <div className="left-nav">
          <button className="bar-image" onClick={onBarClicked}>
            <FaBars size={20} />
          </button>
          <img src="/galaxeye-white.png" alt="Logo" className="logo-image" />
        </div>
      </nav>
    </NavbarStyled>
  );
};

export default Navbar;

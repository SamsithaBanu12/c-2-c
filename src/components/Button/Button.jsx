import { Link } from "react-router-dom";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({ name, path }) => {
  return (
    <ButtonStyled>
      <Link to={path} className="button-wrapper">
        {name}
      </Link>
    </ButtonStyled>
  );
};

export default Button;

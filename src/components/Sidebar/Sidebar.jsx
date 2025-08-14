import { routes } from "../../utils/routes";
import Button from "../Button/Button";
import { SidebarStyled } from "./SidebarStyled";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <div className="sidebar-wrapper">
        {routes?.map((item, index) => (
          <Button name={item?.routeName} key={index} path={item?.routerPath} />
        ))}
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;

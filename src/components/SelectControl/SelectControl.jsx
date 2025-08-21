import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DropdownStyled } from "./SelectControlStyled";

const SelectControl = ({
  label,
  defaultData,
  data = [],
  isFromTelecommands,
  isOpen,
  onToggle,
  onClose
}) => {
  const [selected, setSelected] = useState(defaultData);

  const handleSelect = (value) => {
    setSelected(value);
    onClose(value);
  };

  const options = isFromTelecommands
    ? data.map((item) => item?.packet_name)
    : [];

  return (
    <DropdownStyled>
      <label>{label}</label>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={onToggle}>
          {selected}{" "}
          {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li onClick={() => handleSelect(defaultData)}>{defaultData}</li>
            {options.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </DropdownStyled>
  );
};

export default SelectControl;

import React from "react";
import { SelectControlStyled } from "./SelectControlStyled";

const SelectControl = ({ label, defaultData, data, isFromTelecommands }) => {
  return (
    <SelectControlStyled>
      <label htmlFor={label}>{label}</label>
      <select id={label} defaultValue={defaultData} value={defaultData}>
        <option value={defaultData}>{defaultData}</option>
        {isFromTelecommands && (
          <>
            {data?.map((item, index) => (
              <option key={index} value={item?.packet_name}>
                {item?.packet_name}
              </option>
            ))}
          </>
        )}
      </select>
    </SelectControlStyled>
  );
};

export default SelectControl;

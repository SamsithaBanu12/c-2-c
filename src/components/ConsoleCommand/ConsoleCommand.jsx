import React, { useEffect, useState } from "react";
import { ConsoleCommandStyled } from "./ConsoleCommandStyled";
import SelectControl from "../SelectControl/SelectControl";
import { useSelector } from "react-redux";
import { sendCommand } from "../../utils/api";
import {
  editedCommandsHistory,
  selectedOptions
} from "../../constants/contants";
import Toggle from "../Toggle/Toggle";
import { filterPacketDetails, getDisplayValue } from "../../utils/utils";

export const ConsoleCommand = () => {
  const commands = useSelector((state) => state?.cmds?.cmds?.result);
  const [commandHistory, setCommandHistory] = useState(editedCommandsHistory);
  const [packetName, setPacketName] = useState("");
  const [packetDetails, setPacketDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHex, setIsHex] = useState(false);
  const [allSelectedOptions, setAllSelectedOptions] = useState([
    {
      label: "Type",
      selectedData: "EMULATOR"
    }
  ]);

  useEffect(() => {
    const packet_name = allSelectedOptions?.find(
      (item) => item?.label === "Command"
    )?.selectedData;

    setPacketName(packet_name);

    const packet_details = commands?.filter(
      (item) => item?.packet_name === packet_name
    );
    const filteredDetails = filterPacketDetails(packet_details);
    setPacketDetails(filteredDetails);
  }, [commands, allSelectedOptions]);

  const handleChange = (index, newValue) => {
    const updatedRows = [...packetDetails];
    updatedRows[index] = { ...updatedRows[index], default: Number(newValue) };
    setPacketDetails(updatedRows);
  };

  const toggleEdit = async () => {
    if (isEditing) {
      try {
        const paramsString = packetDetails
          .map((row) => `${row.name} ${row.default ?? 0}`)
          .join(", ");

        const fullCommand = `EMULATOR 200_EPS_TC_GET_SUB_SYS_INFO with ${paramsString}`;
        await sendCommand([fullCommand]);
      } catch (err) {
        console.error("Error sending commands", err);
      }
    } else {
      let editedCommands = {
        id: new Date().getTime(),
        targetName: "EMULATOR",
        packetName: packetName,
        params: [
          { name: "parameter", value: packetDetails?.parameter_name },
          { name: "maxValue", value: packetDetails?.maximum },
          { name: "minValue", value: packetDetails?.minimum },
          { name: "dataType", value: packetDetails?.data_type },
          { name: "bitSize", value: packetDetails?.bit_size },
          {
            name: "default",
            value: getDisplayValue(false, packetDetails?.default)
          },
          { name: "endianness", value: packetDetails?.endianness },
          { name: "description", value: packetDetails?.description }
        ]
      };
      setCommandHistory((prev) => {
        const updated = [...prev, editedCommands];
        return updated;
      });
    }
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    localStorage.setItem("commandHistory", JSON.stringify(commandHistory));
  }, [commandHistory]);

  const handleSelectedOptions = (item, value) => {
    setOpenDropdown(null);
    setAllSelectedOptions((prev) => {
      const exists = prev.some((opts) => opts?.label === item?.label);

      if (exists) {
        return prev.map((opts) =>
          opts?.label === item?.label
            ? { label: item?.label, selectedData: value }
            : opts
        );
      } else {
        return [...prev, { label: item?.label, selectedData: value }];
      }
    });
  };

  return (
    <ConsoleCommandStyled>
      <div className="console-wrapper">
        <div className="console-header-wrapper">
          <div className="console-header">CONSOLE</div>
          <div className="console-icon"></div>
        </div>
        <div className="console-command-wrapper">
          {selectedOptions?.map((item) => (
            <SelectControl
              key={item?.id}
              label={item?.label}
              defaultData={item?.defaultData}
              data={item?.isFromTelemetry ? commands : item.data}
              isFromTelecommands={item?.isFromTelemetry}
              isOpen={openDropdown === item?.label}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === item?.label ? null : item?.label
                )
              }
              onClose={(value) => handleSelectedOptions(item, value)}
            />
          ))}
        </div>
        {packetName && (
          <div className="console-footer">
            <div className="footer-header">
              <div className="text">Command Data</div>
              <div className="toggle-wrapper">
                <Toggle inHex={isHex} setInHex={setIsHex} />
              </div>
            </div>
            <div className="footer-table">
              <table className="command-table">
                <thead style={{ background: "white", padding: "10px" }}>
                  <tr className="heading-row">
                    <th>Name</th>
                    <th>Value or State</th>
                  </tr>
                </thead>
                <tbody>
                  {packetDetails.map((row, index) => {
                    const displayValue = getDisplayValue(isHex, row.default);
                    return (
                      <tr key={index} className="data-row">
                        <td>{row.name}</td>
                        <td>
                          {isEditing ? (
                            <input
                              type="text"
                              value={displayValue}
                              onChange={(e) =>
                                handleChange(index, e.target.value)
                              }
                              style={{ padding: "4px" }}
                            />
                          ) : (
                            displayValue || "0"
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button onClick={toggleEdit} className="edit-button">
              {isEditing ? "Send" : "Edit"}
            </button>
          </div>
        )}
      </div>
    </ConsoleCommandStyled>
  );
};

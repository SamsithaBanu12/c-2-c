import React, { useEffect, useState } from "react";
import { ConsoleCommandStyled } from "./ConsoleCommandStyled";
import SelectControl from "../SelectControl/SelectControl";
import { useSelector } from "react-redux";
import { sendCommand } from "../../utils/api";

export const ConsoleCommand = () => {
  const commands = useSelector((state) => state?.cmds?.cmds?.result);
  const packet_name = "200_EPS_TC_GET_SUB_SYS_INFO";
  const [packetDetails, setPacketDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const packet_details = commands?.filter(
      (item) => item?.packet_name === packet_name
    );
    setPacketDetails(packet_details?.[0]?.items || []);
  }, [packet_name, commands]);

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
        console.log("Command sent successfully:", fullCommand);
      } catch (err) {
        console.error("Error sending commands", err);
      }
    }
    setIsEditing(!isEditing);
  };

  const getDisplayValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return value.raw ?? JSON.stringify(value);
    }
    return value ?? "";
  };

  return (
    <ConsoleCommandStyled>
      <div className="console-wrapper">
        <div className="console-header-wrapper">
          <div className="console-header">Console</div>
          <div className="console-icon"></div>
        </div>
        <div className="console-type-wrapper">
          <div className="d-flex">
            <button>TT&C</button>
            <button>TASK</button>
          </div>
          <SelectControl
            label="Type"
            defaultData="EMULATOR"
            data={[]}
            isFromTelecommands={false}
          />
        </div>
        <div className="console-command-wrapper">
          <SelectControl
            label="Component"
            defaultData="All"
            data={[]}
            isFromTelecommands={false}
          />
          <SelectControl
            label="Command"
            defaultData="TeleCommands"
            data={commands?.cmds?.result || []}
            isFromTelecommands
          />
        </div>
        <div className="console-footer">
          <div className="footer-header">
            <div className="text">Command Data</div>
          </div>
          <div>
            <button onClick={toggleEdit} style={{ marginBottom: "10px" }}>
              {isEditing ? "Save All" : "Edit All"}
            </button>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr style={{ background: "#12283A", color: "white" }}>
                  <th style={{ padding: "8px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "8px", textAlign: "left" }}>
                    Value or State
                  </th>
                </tr>
              </thead>
              <tbody>
                {packetDetails.map((row, index) => {
                  const displayValue = getDisplayValue(row.default);
                  return (
                    <tr
                      key={index}
                      style={{ borderBottom: "1px solid #2E3A4A" }}
                    >
                      <td style={{ padding: "8px", color: "white" }}>
                        {row.name}
                      </td>
                      <td style={{ padding: "8px", color: "white" }}>
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
        </div>
      </div>
    </ConsoleCommandStyled>
  );
};

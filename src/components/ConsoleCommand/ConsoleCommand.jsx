import React, { useEffect, useState } from "react";
import { ConsoleCommandStyled } from "./ConsoleCommandStyled";
import SelectControl from "../SelectControl/SelectControl";
import { useDispatch, useSelector } from "react-redux";
import { sendEditedCommand, storeEditedCommand } from "../../utils/api";
import {
  editedCommandsHistory,
  selectedOptions,
  target_name
} from "../../constants/contants";
import Toggle from "../Toggle/Toggle";
import { filterPacketDetails, getDisplayValue, getHex, getParamsString, getStoreParamsString, getToastMessage } from "../../utils/utils";
import { sendCommand, storeCommand } from "../../redux/actions/cmdsActions";
import moment from "moment/moment";

export const ConsoleCommand = ({setIsCommandEdited, setIsPacketName}) => {
  const commands = useSelector((state) => state?.cmds?.cmds?.result);
  const [commandHistory, setCommandHistory] = useState(editedCommandsHistory);
  const dispatch = useDispatch();
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
    setIsPacketName(true);
  };

  const toggleEdit = async () => {
      try {
        const fullCommand = `${target_name} ${packetName} with ${getParamsString(packetDetails)}`;
        const data = await sendEditedCommand(fullCommand);
        const dispatched_command = dispatch(sendCommand(data));
        if(dispatched_command?.type === "SEND_COMMAND") {
          getToastMessage(dispatched_command?.payload);
        }
        //second api call
        if(dispatched_command?.payload?.result) {
          const editedCommands = {
            target_name: target_name,
            packet_name: packetName,
            sent_time: moment().format("YYYY-MM-DD HH:mm:ss"), 
            status: 'fetched',
            tctm_type: 'TC',
            params: getStoreParamsString(packetDetails),
            packet_details: packetDetails,
            tctm_id: 23,
          }
          const editedpostCommands = await storeEditedCommand(editedCommands);
          const dispatched_store_command = dispatch(storeCommand(editedpostCommands));

          if(dispatched_store_command?.payload?.detail) {
            console.error('Error', `${dispatched_store_command?.payload?.detail[0]?.type} fields required`);
          }else{
            setIsCommandEdited(prev => !prev);
            console.log('Stored command successfully')
          }
        }
      } catch (err) {
        console.error("Error sending commands", err);
      }
  };

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
            <div className="edit-container">
              <button onClick={()=>setIsEditing(!isEditing)} className="edit-button">
                {isEditing ?'Cancel': 'Edit'}
              </button>
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
            <button onClick={toggleEdit} className="send-button">
              Send
            </button>
          </div>
        )}
      </div>
    </ConsoleCommandStyled>
  );
};

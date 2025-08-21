import { useSelector } from "react-redux";
import { MessageCommandStyled } from "./MessageCommandStyled";
import { useState } from "react";
import { editedCommandsHistory } from "../../constants/contants";

const MessageCommands = () => {
  const commands = useSelector(
    (state) => state?.cmds?.cmds?.result?.[0]?.items
  );
  const [commandsHistory, setCommandsHistory] = useState(
    localStorage.getItem("commandHistory")
      ? JSON.parse(localStorage.getItem("commandHistory"))
      : editedCommandsHistory
  );
  const [commandParameters, setCommandParameters] = useState({});

  return (
    <MessageCommandStyled>
      <div className="message-command-wrapper">
        <div className="message-header">
          <h2 className="message-title">Messages</h2>
        </div>
        <div className="message-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Target Name</th>
                <th>Packet Name</th>
                <th>Parameter Name</th>
                <th>Maximum Value</th>
                <th>Minimum Value</th>
                <th>Data type</th>
                <th>Bit Size</th>
                <th>Default Value</th>
                <th>Endianness</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {commandsHistory &&
                commandsHistory.map((cmd, index) => (
                  <tr key={index}>
                    <td>{cmd?.targetName}</td>
                    <td>{cmd?.packetName}</td>
                    {cmd?.params?.map((item, id) => (
                      <td key={id}>{item?.value}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </MessageCommandStyled>
  );
};

export default MessageCommands;

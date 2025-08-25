import { useSelector } from "react-redux";
import { MessageCommandStyled } from "./MessageCommandStyled";
import { useState } from "react";
import { IoClose } from 'react-icons/io5';

const MessageCommands = () => {
  const commands = useSelector(
    (state) => state?.getstoreCommands?.getstoreCommands
  );
  const [commandData, setCommandData] = useState(null);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const handleRowClick = (cmd) => {
    setCommandData(cmd);
    setIsRowSelected(true);
  }

  return (
    <MessageCommandStyled>
      <div className="message-header">
        <h2 className="message-title">Messages</h2>
      </div>
      <div className={`message-command-wrapper ${isRowSelected ? 'split-view' : ''}`}>
        <div className="message-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Target Name</th>
                <th>Packet Name</th>
                <th>Sent Time</th>
                <th>Status</th>
                <th>TcTm Type</th>
              </tr>
            </thead>
            <tbody>
              {commands.map((cmd, index) => (
                <tr key={index} onClick={() => handleRowClick(cmd)} style={{ cursor: "pointer", height: '40px' }}>
                  <td>{cmd.target_name}</td>
                  <td>{cmd.packet_name}</td>
                  <td>{cmd.sent_time}</td>
                  <td>{cmd.status}</td>
                  <td>{cmd.tctm_type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isRowSelected && commandData && (
          <div className="command-details">
            <div className="command-details-header">
              <h3>Command Details</h3>
              <button className='close' onClick={() => setIsRowSelected(false)}><IoClose size={20} /></button>
            </div>
            <div className="command-details-body">
              <pre className="json-content">
                {JSON.stringify(commandData, null, 2)}
              </pre>
              <div className="parameter">{commandData?.params}</div>
            </div>
          </div>
        )}
      </div>
    </MessageCommandStyled>
  );
};

export default MessageCommands;

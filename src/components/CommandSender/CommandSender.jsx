import { useState } from "react";
import { ConsoleCommand } from "../ConsoleCommand/ConsoleCommand";
import MessageCommands from "../MessageCommand/MessageCommands";
import { CommandSenderStyled } from "./CommandSenderStyled";
import { ScheduleUpload } from "../ScheduleUpload/ScheduleUpload";

const CommandSender = ({ allCommands }) => {
  const [selectedTab, setSelectedTab] = useState("RTC");
  return (
    <CommandSenderStyled>
      <div className="commandSenderWrapper">
        <div className="command-sender-header">Command Sender</div>
        <div className="tabs-wrapper">
          <button
            onClick={() => {
              setSelectedTab("RTC");
            }}
            className={`tab ${selectedTab === "RTC" ? "active" : ""}`}
          >
            RTC
          </button>
          <button
            onClick={() => {
              setSelectedTab("Schedule Upload");
            }}
            className={`tab ${
              selectedTab === "Schedule Upload" ? "active" : ""
            }`}
          >
            Schedule Upload
          </button>
          <button
            onClick={() => {
              setSelectedTab("File Upload");
            }}
            className={`tab ${selectedTab === "File Upload" ? "active" : ""}`}
          >
            File Upload
          </button>
        </div>
        <div className="command-sender-bottom">
          {selectedTab === "RTC" && (
            <>
              <ConsoleCommand />
              <div className="vertical"></div>
              <MessageCommands />
            </>
          )}
          {selectedTab === "Schedule Upload" && (
            <>
              <ScheduleUpload />
            </>
          )}
        </div>
      </div>
    </CommandSenderStyled>
  );
};

export default CommandSender;

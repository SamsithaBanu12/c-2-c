import { useEffect, useState } from "react";
import { ConsoleCommand } from "../ConsoleCommand/ConsoleCommand";
import MessageCommands from "../MessageCommand/MessageCommands";
import { CommandSenderStyled } from "./CommandSenderStyled";
import { ScheduleUpload } from "../ScheduleUpload/ScheduleUpload";
import { getStoredEditedCommands } from "../../utils/api";
import { useDispatch } from "react-redux";
import { getstoreCommands } from "../../redux/actions/cmdsActions";

const CommandSender = () => {
  const [selectedTab, setSelectedTab] = useState("RTC");
  const [isCommandEdited, setIsCommandEdited] = useState(false);
  const [isPacketName, setIsPacketName] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllStoredCommands = async () => {
      try {
        const getAllCommands = await getStoredEditedCommands();
        const resultAction = dispatch(getstoreCommands(getAllCommands)); 

        if (resultAction?.payload?.message) {
          console.error('Error fetching stored commands:', resultAction.payload.message);
        } else {
          console.log('✅ Fetched all stored commands');
        }
      } catch (error) {
        console.error('❌ Failed to fetch stored commands:', error);
      }
    };

    fetchAllStoredCommands();
  }, [isCommandEdited, dispatch]);
  
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
              <ConsoleCommand setIsCommandEdited={setIsCommandEdited} setIsPacketName={setIsPacketName} />
              <div className="vertical"></div>
              {isPacketName &&
                <MessageCommands />
              }
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

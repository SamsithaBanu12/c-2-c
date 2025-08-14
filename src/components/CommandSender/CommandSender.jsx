import { ConsoleCommand } from "../ConsoleCommand/ConsoleCommand";
import MessageCommands from "../MessageCommand/MessageCommands";
import { CommandSenderStyled } from "./CommandSenderStyled";

const CommandSender = ({ allCommands }) => {
  return (
    <CommandSenderStyled>
      <div className="commandSenderWrapper">
        <ConsoleCommand />
        <div className="vertical"></div>
        <MessageCommands />
      </div>
    </CommandSenderStyled>
  );
};

export default CommandSender;

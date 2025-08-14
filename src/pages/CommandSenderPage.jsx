import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCmds } from "../redux/actions/cmdsActions.js";
import CommandSender from "../components/CommandSender/CommandSender.jsx";
import { getAllCommands } from "../utils/api.jsx";

const CommandSenderPage = () => {
  const dispatch = useDispatch();
  const cmds = useSelector((state) => state.cmds);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCommands();
      dispatch(setCmds(data));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <CommandSender allCommands={cmds} />
    </div>
  );
};

export default CommandSenderPage;

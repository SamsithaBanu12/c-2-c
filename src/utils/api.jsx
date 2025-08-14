import {
  method_types,
  backend_api,
  headers,
  method_name,
  target_name
} from "../constants/contants";

export const getAllCommands = async () => {
  const res = await fetch(`${backend_api}/api`, {
    method: method_types["POST"],
    headers: headers,
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: method_name["GET_ALL_COMMANDS"],
      params: [target_name],
      id: 1234567890,
      keyword_params: { scope: "DEFAULT" }
    })
  });

  const data = await res.json();
  return data;
};

export const sendCommand = async (command) => {
  try {
    const res = await fetch(`${backend_api}/api`, {
      method: method_types["POST"],
      headers: headers,
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: method_name["COMMAND"],
        params: command,
        id: 9,
        keyword_params: {
          scope: "DEFAULT"
        }
      })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Command sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending command:", error);
    throw error;
  }
};

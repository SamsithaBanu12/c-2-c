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

export const sendEditedCommand = async (command) => {
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
    if(res.ok){
      const data = await res.json();
      return data;
    }else{
      return await res.json();
    }
  } catch (error) {
    console.error("Error sending command:", error);
    return error;
  }
};

export const storeEditedCommand = async (editedCommands) => {
  try {
    const res = await fetch('http://127.0.0.1:8000/edit-commands/', {
      method: method_types["POST"],
      headers: headers,
      body: JSON.stringify(editedCommands)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error storing edited command:", error);
    return error;
  }
}

export const getStoredEditedCommands = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/edit-commands/', {
            method: method_types["GET"],
            headers: headers,
    });
    const data = await res.json();
    return data;
  } catch (error) {
      console.error("Error fetching stored edited commands:", error);
      return error;
  }
};  
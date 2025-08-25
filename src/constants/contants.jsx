export const backend_api = "http://127.0.0.1:2900/openc3-api";
export const method_types = {
  POST: "POST",
  GET: "GET"
};
export const headers = {
  "Content-Type": "application/json",
  Authorization: "mos12345"
};
export const method_name = {
  GET_ALL_COMMANDS: "get_all_cmds",
  COMMAND: "cmd"
};
export const target_name = "EMULATOR";

export const selectedOptions = [
  {
    id: 1,
    label: "Type",
    defaultData: "EMULATOR",
    isFromTelemetry: false,
    data: []
  },
  {
    id: 2,
    label: "Component",
    defaultData: "All",
    isFromTelemetry: false,
    data: []
  },
  {
    id: 3,
    label: "Command",
    defaultData: "Telecommands",
    isFromTelemetry: true,
    data: []
  }
];

export const editedCommandsHistory = [
  {
    id: 1,
    targetName: "EMULATOR",
    packetName: "200_EPS_TC_GET_SUB_SYS_INFO",
    params: [
      { name: "parameter", value: "CSPHEADER" },
      { name: "maxValue", value: "2562356736" },
      { name: "minValue", value: "2562356736" },
      { name: "dataType", value: "UINT" },
      { name: "bitSize", value: "32" },
      { name: "default", value: "0" },
      { name: "endianness", value: "BIG_ENDIAN" },
      { name: "description", value: "CSPHEADER is the header of the packet." }
    ]
  },
  {
    id: 2,
    targetName: "EMULATOR",
    packetName: "200_EPS_TC_GET_SUB_SYS_INFO",
    params: [
      { name: "parameter", value: "SOF1" },
      { name: "maxValue", value: "256235636" },
      { name: "minValue", value: "256236734" },
      { name: "dataType", value: "UINT" },
      { name: "bitSize", value: "8" },
      { name: "default", value: "0" },
      { name: "endianness", value: "BIG_ENDIAN" },
      { name: "description", value: "CSPHEADER is the header of the packet." }
    ]
  },
  {
    id: 3,
    targetName: "EMULATOR",
    packetName: "200_EPS_TC_GET_SUB_SYS_INFO",
    params: [
      { name: "parameter", value: "SOF2" },
      { name: "maxValue", value: "256235636" },
      { name: "minValue", value: "256236734" },
      { name: "dataType", value: "UINT" },
      { name: "bitSize", value: "32" },
      { name: "default", value: "0" },
      { name: "endianness", value: "BIG_ENDIAN" },
      { name: "description", value: "CSPHEADER is the header of the packet." }
    ]
  },
  {
    id: 4,
    targetName: "EMULATOR",
    packetName: "200_EPS_TC_GET_SUB_SYS_INFO",
    params: [
      { name: "parameter", value: "TC_CTRL" },
      { name: "maxValue", value: "2562356736" },
      { name: "minValue", value: "123" },
      { name: "dataType", value: "UINT" },
      { name: "bitSize", value: "32" },
      { name: "default", value: "0" },
      { name: "endianness", value: "BIG_ENDIAN" },
      { name: "description", value: "CSPHEADER is the header of the packet." }
    ]
  },
  {
    id: 5,
    targetName: "EMULATOR",
    packetName: "200_EPS_TC_GET_SUB_SYS_INFO",
    params: [
      { name: "parameter", value: "RM_ID" },
      { name: "maxValue", value: "190" },
      { name: "minValue", value: "186" },
      { name: "dataType", value: "UINT" },
      { name: "bitSize", value: "8" },
      { name: "default", value: "0" },
      { name: "endianness", value: "BIG_ENDIAN" },
      { name: "description", value: "CSPHEADER is the header of the packet." }
    ]
  }
];

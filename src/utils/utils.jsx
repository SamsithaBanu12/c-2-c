import { toast } from "react-toastify";

export const getDisplayValue = (isHex, value) => {
  let updatedValue = value;

 if (typeof value === "object" && value !== null && Array.isArray(value.raw)) {
  if (isHex) {
    updatedValue =
      "0x" +
      value.raw
        .map((v) => v.toString(16).toUpperCase()) 
        .join(""); 
  } else {
    updatedValue = value.raw.join("");
  }
  } else if (isHex) {
    updatedValue = value?.toString(16).toUpperCase() ?? "";
  }

  return updatedValue;
};

export const filterPacketDetails = (packetDetails) => {
  return packetDetails?.[0]?.items.filter(
    (item) =>
      item?.name !== "PACKET_TIMESECONDS" &&
      item?.name !== "PACKET_TIMEFORMATTED" &&
      item?.name !== "RECEIVED_TIMESECONDS" &&
      item?.name !== "RECEIVED_TIMEFORMATTED" &&
      item?.name !== "RECEIVED_COUNT"
  );
};
export const getHex = (name) =>{
    if (name === "DA_ID" || name === "TC_ID" || name=== 'RM_ID') {
      return true;
    }
    return false;
}

export const getToastMessage =(message)=>{
  if (message?.error) {
    toast.error(`Error: ${message.error.message}`);
  } else if (message?.result) {
    toast.success(`Edited command sent successfully`);
  } else {
    toast.warn("Unknown response");
  }
}

export const getParamsString = (packetDetails) => {
  return  packetDetails
    .map((row) => `${row.name} ${getDisplayValue(getHex(row.name), row.default) ?? 0}`)
    .join(", ");
}

export const getStoreParamsString = (packetDetails) => {
  return packetDetails
    .map((row) => `${getDisplayValue(true, row.default) ?? 0}`)
    .join(" ");
}
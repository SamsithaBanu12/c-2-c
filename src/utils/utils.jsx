export const getDisplayValue = (isHex, value) => {
  let updatedValue = value;

  if (typeof value === "object" && value !== null && Array.isArray(value.raw)) {
    if (isHex) {
      updatedValue = value.raw
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

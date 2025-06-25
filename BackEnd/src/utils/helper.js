import { nanoid } from "nanoid";

export const generateNanoId = (len) => {
  const id = nanoid(len);
  if (!id) {
    throw new Error("Failed to generate a unique ID");
  }
  return id;
};

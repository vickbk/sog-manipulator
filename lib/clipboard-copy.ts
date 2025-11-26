import { toast } from "react-toastify";

export const clipboardCopy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    toast.error("Failed to copy text to clipboard.");
    console.error("Failed to copy text: ", err);
  }
};

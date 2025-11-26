import getFormFields from "@lib/get-form-fields";
import { getModMixes } from "@lib/mod-mixes";
import { getModifiers } from "@lib/modifier/handle-modifiers";

export async function downloadManipulators(_: unknown, data: FormData) {
  const { filename: filename } = getFormFields<{ filename: string }>(data);
  try {
    const mixes = getModMixes();
    const modifiers = getModifiers();

    const blob = new Blob([JSON.stringify({ mixes, modifiers }, null, 2)], {
      type: "application/json",
    });
    const url = await URL.createObjectURL(blob);
    return {
      url,
      filename: filename.endsWith(".json") ? filename : `${filename}.json`,
    };
  } catch (error) {
    console.error("Error downloading manipulators:", error);
    return null;
  }
}

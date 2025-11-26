import getFormFields from "@lib/get-form-fields";
import { getModMixes } from "@lib/mod-mixes";
import { getModifiers } from "@lib/modifier/handle-modifiers";

export async function downloadManipulators(_: unknown, data: FormData) {
  const { name } = getFormFields<{ name: string }>(data);
  const mixes = getModMixes();
  const modifiers = getModifiers();

  const content = JSON.stringify({ mixes, modifiers }, null, 2);
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  return {
    url,
    name: name.endsWith(".json") ? name : `${name}.json`,
  };
}

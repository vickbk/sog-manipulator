import getFormFields from "@lib/get-form-fields";
import { getModMixes } from "@lib/get-mod-mixes";
import setMemoItem from "@lib/memorization/set-item";
import { ModifierType } from "@lib/types/modifier-types";

export function addModMixes({
  data,
  modifiers,
}: {
  data: FormData;
  modifiers: ModifierType[];
}) {
  const { mixname } = getFormFields<{ mixname: string }>(data);

  const allMixes = getModMixes();
  setMemoItem("mixes", [
    ...allMixes.filter(({ name }) => name !== mixname),
    { name: mixname, modifiers },
  ]);
  return true;
}

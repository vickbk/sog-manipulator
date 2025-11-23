import getFormFields from "@lib/get-form-fields";
import getMemoItem from "@lib/memorization/get-item";
import setMemoItem from "@lib/memorization/set-item";
import { MixModsType, ModifierType } from "@lib/types/modifier-types";

export function addModMixes({
  data,
  modifiers,
}: {
  data: FormData;
  modifiers: ModifierType[];
}) {
  const { mixname } = getFormFields<{ mixname: string }>(data);

  const allMixes = getMemoItem<MixModsType[]>("mixes") || [];
  setMemoItem(
    "mixes",
    allMixes
      .filter(({ name }) => name !== mixname)
      .push({ name: mixname, modifiers })
  );
  return true;
}

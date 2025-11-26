import getMemoItem from "@lib/memorization/get-item";
import setMemoItem from "@lib/memorization/set-item";
import { ModifierType } from "@lib/types/modifier-types";

const saveModifiers = (modifiers: ModifierType[]) =>
  setMemoItem("modifiers", modifiers);

const getModifiers = () => getMemoItem<ModifierType[]>("modifiers") || [];

export { saveModifiers, getModifiers };

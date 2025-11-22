import getFormFields from "@lib/get-form-fields";
import getMemoItem from "@lib/memorization/get-item";
import setMemoItem from "@lib/memorization/set-item";
import { modifierExist } from "@lib/modifier/modifier-exist";
import { ModifierType } from "@lib/types/modifier-types";

export function addModifier(_: unknown, data: FormData) {
  // get modifier object
  const dataObject = getFormFields<ModifierType>(data);
  //   load all previous modifiers
  const allModifiers = getMemoItem<ModifierType[]>("modifiers") || [];
  //   check if a similar modifier has already been saved or save it this time
  if (!modifierExist(dataObject, allModifiers)) {
    allModifiers.push(dataObject);
    //   save the new modifiers list in memory
    setMemoItem("modifiers", allModifiers);
  }

  //   return the object
  return dataObject;
}

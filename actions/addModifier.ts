import getFormFields from "@lib/get-form-fields";
import { getModifiers, saveModifiers } from "@lib/modifier/handle-modifiers";
import { modifierExist } from "@lib/modifier/modifier-exist";
import { ModifierType } from "@lib/types/modifier-types";

export function addModifier(_: unknown, data: FormData) {
  // get modifier object
  const dataObject = getFormFields<ModifierType>(data);
  //   load all previous modifiers
  const allModifiers = getModifiers();
  //   check if a similar modifier has already been saved or save it this time
  if (!modifierExist(dataObject, allModifiers)) {
    allModifiers.push(dataObject);
    saveModifiers(allModifiers);
  }

  //   return the object
  return dataObject;
}

import { modifierExist } from "@lib/modifier/modifier-exist";
import { ModifierType } from "@lib/types/modifier-types";
import { Dispatch, RefObject, SetStateAction } from "react";

const manipulatorHelpers = (
  [modifiers, setModifiers]: [
    ModifierType[],
    Dispatch<SetStateAction<ModifierType[]>>
  ],
  [modifier, , modState]: [
    ModifierType | null,
    (payload: FormData) => void,
    boolean
  ],
  [, setModEdit]: [
    ModifierType | null,
    Dispatch<SetStateAction<ModifierType | null>>
  ],
  textRef: RefObject<HTMLTextAreaElement | null>
) => {
  const mh = {
    removeModifier(id: number) {
      setModifiers(modifiers.filter((_, key) => key !== id));
    },
    editModifier(id: number) {
      setModEdit(modifiers[id]);
      mh.removeModifier(id);
    },
    addHistoricalModifier(modifier: ModifierType) {
      if (!modifierExist(modifier, modifiers)) {
        setModifiers([...modifiers, modifier]);
      }
    },
    handleModifierAddition() {
      if (!modState && modifier && !modifierExist(modifier, modifiers)) {
        setModifiers([...modifiers, modifier]);
        setModEdit(null);
      }
    },
    manipulateText() {
      let text = textRef.current?.value;
      modifiers
        .map(
          ({ text, replacement }) =>
            [new RegExp(text, "g"), replacement] as const
        )
        .forEach(([toReplace, replacement]) => {
          text = text?.replace(toReplace, replacement);
        });
      console.log(text);
    },
  };
  return mh;
};

export default manipulatorHelpers;

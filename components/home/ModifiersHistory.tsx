import ModifierElement from "@components/common/ModifierElement";
import getMemoItem from "@lib/memorization/get-item";
import setMemoItem from "@lib/memorization/set-item";
import {
  HistoryModifierAddFunction,
  ModifierType,
} from "@lib/types/modifier-types";
import { useEffect, useState } from "react";

export default function ModifierHistory({
  addModifier,
}: {
  addModifier: HistoryModifierAddFunction;
}) {
  const [modifiers, setModifiers] = useState<ModifierType[]>([]);
  const removeModifier = (id: number) => {
    const remaining = modifiers.filter((_, key) => key !== id);
    setMemoItem("modifiers", remaining);
    setModifiers(remaining);
  };

  const [added, setAdded] = useState<number[]>([]);
  const addHistoricalModifier = (modifier: ModifierType) => {
    addModifier(modifier);
    setAdded([
      ...added,
      modifiers.findIndex(
        ({ text, replacement }) =>
          text === modifier.text && replacement === modifier.replacement
      ),
    ]);
  };
  useEffect(() => {
    setModifiers(getMemoItem("modifiers") || []);
  }, []);
  useEffect(() => console.log(added), [added]);
  return (
    <ul className="flex gap-4 flex-wrap">
      {modifiers.map((modifier, key) => (
        <ModifierElement
          modifier={modifier}
          modifierKey={key}
          removeModifier={removeModifier}
          addModifier={
            added.indexOf(key) === -1 ? addHistoricalModifier : undefined
          }
          key={key}
        />
      ))}
    </ul>
  );
}

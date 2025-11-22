import ModifierElement from "@components/common/ModifierElement";
import getMemoItem from "@lib/memorization/get-item";
import setMemoItem from "@lib/memorization/set-item";
import { ModifierType } from "@lib/types/modifier-types";
import { useEffect, useState } from "react";

export default function ModifierHistory() {
  const [modifiers, setModifiers] = useState<ModifierType[]>([]);
  const removeModifier = (id: number) => {
    const remaining = modifiers.filter((_, key) => key !== id);
    setMemoItem("modifiers", remaining);
    setModifiers(remaining);
  };
  useEffect(() => {
    setModifiers(getMemoItem("modifiers") || []);
  }, []);
  return (
    <ul className="flex gap-4 flex-wrap">
      {modifiers.map((modifier, key) => (
        <ModifierElement
          modifier={modifier}
          modifierKey={key}
          removeModifier={removeModifier}
        />
      ))}
    </ul>
  );
}

import XIcon from "@components/common/icons/XIcon";
import getMemoItem from "@lib/memorization/get-item";
import { useEffect, useRef, useState } from "react";
import ModifiersHistory from "./ModifiersHistory";
import {
  HistoryModifierAddFunction,
  ModifierType,
} from "@lib/types/modifier-types";
import CustomDialog from "@components/common/CustomDialog";
import DialogCloser from "@components/common/DialogCloser";

export default function HistoryManipulators({
  showHistory: hideHistory,
  addModifier,
}: {
  showHistory: (hide: false) => void;
  addModifier: HistoryModifierAddFunction;
}) {
  const [display, setDisplay] = useState<"modifiers" | "mixes">("modifiers");
  const displays = {
    modifiers: <ModifiersHistory addModifier={addModifier} />,
    mixes: <></>,
  };
  return (
    <CustomDialog
      className="m-auto p-4 relative w-full md:max-w-200 blue-900 c-white"
      isOpen={true}
      onClose={() => hideHistory(false)}
    >
      <DialogCloser onClose={hideHistory}>
        Fermer l'historique de manipilateurs
      </DialogCloser>
      <ul className="flex gap-4 justify-center">
        {(
          [
            { text: "Manipulateurs", index: "modifiers" },
            { text: "Combinaisons", index: "mixes" },
          ] as const
        ).map(({ text, index }, key) => (
          <li key={key}>
            <button
              className={`py-4 ${
                display === index ? "border-b-2 outline-0" : ""
              }`}
              type="button"
              onClick={() => setDisplay(index)}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
      <section className="pt-12">
        <h4 className="sr-only">
          La liste de manipilateurs utilisés dans le passé
        </h4>
        {displays[display]}
      </section>
    </CustomDialog>
  );
}

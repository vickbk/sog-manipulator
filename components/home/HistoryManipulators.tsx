import XIcon from "@components/common/icons/XIcon";
import getMemoItem from "@lib/memorization/get-item";
import { useEffect, useRef, useState } from "react";
import ModifiersHistory from "./ModifiersHistory";
import {
  HistoryModifierAddFunction,
  ModifierType,
} from "@lib/types/modifier-types";

export default function HistoryManipulators({
  hideHistory,
  addModifier,
}: {
  hideHistory: (hide: false) => void;
  addModifier: HistoryModifierAddFunction;
}) {
  const dialogElement = useRef<HTMLDialogElement>(null);
  const [display, setDisplay] = useState<"modifiers" | "mixes">("modifiers");
  const displays = {
    modifiers: <ModifiersHistory addModifier={addModifier} />,
    mixes: <></>,
  };
  useEffect(() => {
    dialogElement.current?.showModal();
  }, []);
  useEffect(() => {
    const items = getMemoItem(display);
    console.log(items);
  }, [display]);
  return (
    <dialog
      className="m-auto p-4 relative w-full md:max-w-200 blue-900 c-white"
      ref={dialogElement}
    >
      <button
        className="p-4 absolute right-0 rounded-lg top-0 c-blue-900 white"
        type="button"
        onClick={() => hideHistory(false)}
      >
        <XIcon />{" "}
        <span className="sr-only">Fermer l'historique de manipilateurs</span>
      </button>
      <ul className="flex gap-4 justify-center">
        {(
          [
            { text: "Manipulateurs", index: "modifiers" },
            { text: "Combinaisons", index: "mixes" },
          ] as const
        ).map(({ text, index }) => (
          <li key={text}>
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
    </dialog>
  );
}

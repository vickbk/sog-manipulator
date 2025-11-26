import { useEffect, useState } from "react";
import ModifiersHistory from "./ModifiersHistory";
import {
  HistoryModifierAddFunction,
  HistoryPages,
  ModifiersSetter,
} from "@lib/types/modifier-types";
import CustomDialog from "@components/common/CustomDialog";
import DialogCloser from "@components/common/DialogCloser";
import MixesManipulators from "./MixesManipulators";
import getMemoItem from "@lib/memorization/get-item";
import setMemoItem from "@lib/memorization/set-item";
import { ExternalManager } from "./history/ExternalManager";

export default function HistoryManipulators({
  showHistory,
  addModifier,
  setModifiers,
}: {
  showHistory: (hide: false) => void;
  addModifier: HistoryModifierAddFunction;
  setModifiers: ModifiersSetter;
}) {
  const dialogCloser = () => showHistory(false);
  const [display, setDisplay] = useState<HistoryPages>("modifiers");
  const displays = {
    modifiers: <ModifiersHistory addModifier={addModifier} />,
    mixes: (
      <MixesManipulators
        closeDialog={dialogCloser}
        setModifiers={setModifiers}
      />
    ),
    external: <ExternalManager />,
  };

  const setLastVisited = (page: HistoryPages) => {
    setMemoItem("last-history-page", page);
    setDisplay(page);
  };

  useEffect(() => {
    setDisplay(getMemoItem<HistoryPages>("last-history-page") ?? "modifiers");
  }, []);
  return (
    <CustomDialog
      className="m-auto p-4 relative w-full md:max-w-200 c-blue-900 white"
      isOpen={true}
      onClose={() => showHistory(false)}
    >
      <DialogCloser onClose={showHistory}>
        Fermer l'historique de manipilateurs
      </DialogCloser>
      <ul className="flex flex-wrap gap-x-4 justify-center">
        {(
          [
            { text: "Manipulateurs", index: "modifiers" },
            { text: "Combinaisons", index: "mixes" },
            { text: "Sauvegarde", index: "external" },
          ] as const
        ).map(({ text, index }, key) => (
          <li key={key}>
            <button
              className={`pt-4 ${
                display === index ? "border-b-2 outline-0" : ""
              }`}
              type="button"
              onClick={() => setLastVisited(index)}
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

import ArrowLeftRight from "@components/common/icons/ArrowLeftRight";
import ClockIcon from "@components/common/icons/ClockIcon";
import PencilIcon from "@components/common/icons/PencilIcon";
import TrashIcon from "@components/common/icons/TrashIcon";
import { ModifierType } from "@lib/types/modifier-types";
import { CSSProperties, useState } from "react";
import HistoryManipulators from "./HistoryManipulators";
import ModifierElement from "@components/common/ModifierElement";

export default function ManipulatorList({
  modifiers,
  removeModifier,
  editModifier,
  addHistoryModifier,
}: {
  modifiers: ModifierType[];
  removeModifier: (id: number) => void;
  editModifier: (id: number) => void;
  addHistoryModifier: (modifier: ModifierType) => void;
}) {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <section className="flex items-center gap-4">
      <h3 className="sr-only">Liste de modificateurs selectionnés</h3>
      <button
        type="button"
        onClick={() => setShowHistory(!showHistory)}
        className="active p-4 border rounded-lg"
      >
        <ClockIcon />{" "}
        <span className="sr-only">
          liste de manipulateur utilisés auparavant.
        </span>
      </button>
      {showHistory && (
        <HistoryManipulators
          hideHistory={setShowHistory}
          addModifier={addHistoryModifier}
        />
      )}
      <ul className="flex flex-wrap gap-4 grow">
        {modifiers.map((modifier, key) => (
          <ModifierElement
            modifier={modifier}
            modifierKey={key}
            editModifier={editModifier}
            removeModifier={removeModifier}
          />
        ))}
      </ul>
    </section>
  );
}

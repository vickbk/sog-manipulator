import ClockIcon from "@components/common/icons/ClockIcon";
import { ModifiersSetter, ModifierType } from "@lib/types/modifier-types";
import { useState } from "react";
import HistoryManipulators from "./HistoryManipulators";
import ModifierElement from "@components/common/ModifierElement";
import FloppyIcon from "@components/common/icons/FloppyIcon";
import SaveModifier from "./SaveModifiers";

export default function ManipulatorList({
  modifiers,
  removeModifier,
  editModifier,
  addHistoryModifier,
  setModifiers,
}: {
  modifiers: ModifierType[];
  setModifiers: ModifiersSetter;
  removeModifier: (id: number) => void;
  editModifier: (id: number) => void;
  addHistoryModifier: (modifier: ModifierType) => void;
}) {
  const [showHistory, setShowHistory] = useState(false);
  const [showSave, setShowSave] = useState(false);
  return (
    <section className="flex items-center gap-4">
      <h3 className="sr-only">Liste de modificateurs selectionnés</h3>
      <div className="grid gap-4">
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

        {modifiers.length !== 0 && (
          <button
            type="button"
            onClick={() => setShowSave(!showHistory)}
            className="active p-4 border rounded-lg"
          >
            <FloppyIcon />{" "}
            <span className="sr-only">
              Enregistrer la list actuelle de manipulateur.
            </span>
          </button>
        )}
      </div>
      {showHistory && (
        <HistoryManipulators
          showHistory={setShowHistory}
          addModifier={addHistoryModifier}
          setModifiers={setModifiers}
        />
      )}
      {showSave && (
        <SaveModifier showSaveForm={setShowSave} modifiers={modifiers} />
      )}
      <ul className="flex flex-wrap gap-4 grow">
        {modifiers.map((modifier, key) => (
          <ModifierElement
            modifier={modifier}
            modifierKey={key}
            editModifier={editModifier}
            removeModifier={removeModifier}
            key={key}
          />
        ))}
      </ul>
    </section>
  );
}

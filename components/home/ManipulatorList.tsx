import ArrowLeftRight from "@components/common/icons/ArrowLeftRight";
import ClockIcon from "@components/common/icons/ClockIcon";
import PencilIcon from "@components/common/icons/PencilIcon";
import TrashIcon from "@components/common/icons/TrashIcon";
import { ModifierType } from "@lib/types/modifier-types";
import { CSSProperties, useState } from "react";
import HistoryManipulators from "./HistoryManipulators";

export default function ManipulatorList({
  modifiers,
  removeModifier,
  editModifier,
}: {
  modifiers: ModifierType[];
  removeModifier: (id: number) => void;
  editModifier: (id: number) => void;
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
      {showHistory && <HistoryManipulators hideHistory={setShowHistory} />}
      <ul className="flex flex-wrap gap-4 grow">
        {modifiers.map(({ text, replacement }, key) => (
          <li className="manipulator" key={key}>
            <button className="manipulator__element active">
              {text} <ArrowLeftRight /> {replacement}
            </button>
            <div className="manipulator__overlay">
              <button
                className="p-2 blue-900 rounded-lg active"
                type="button"
                style={{ "--bg-accent": 1 } as CSSProperties}
                onClick={() => editModifier(key)}
              >
                <PencilIcon />
                <span className="sr-only">Edit modifier</span>
              </button>
              <button
                className="active p-2 blue-900 rounded-lg text-red-500"
                type="button"
                style={{ "--bg-accent": 1 } as CSSProperties}
                onClick={() => removeModifier(key)}
              >
                <TrashIcon />
                <span className="sr-only">Delete Modifier</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

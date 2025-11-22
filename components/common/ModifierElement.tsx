import { CSSProperties } from "react";
import ArrowLeftRight from "./icons/ArrowLeftRight";
import PencilIcon from "./icons/PencilIcon";
import TrashIcon from "./icons/TrashIcon";
import { ModifierType } from "@lib/types/modifier-types";

export default function ModifierElement({
  modifier: { text, replacement },
  modifierKey: key,
  removeModifier,
  editModifier,
}: {
  modifier: ModifierType;
  modifierKey: number;
  removeModifier: (key: number) => void;
  editModifier?: (key: number) => void;
}) {
  return (
    <li className="manipulator">
      <button className="manipulator__element active">
        {text} <ArrowLeftRight /> {replacement}
      </button>
      <div className="manipulator__overlay">
        {editModifier && (
          <button
            className="p-2 blue-900 rounded-lg active"
            type="button"
            style={{ "--bg-accent": 1 } as CSSProperties}
            onClick={() => editModifier(key)}
          >
            <PencilIcon />
            <span className="sr-only">Edit modifier</span>
          </button>
        )}
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
  );
}

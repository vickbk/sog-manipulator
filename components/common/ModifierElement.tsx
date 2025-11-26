import { CSSProperties } from "react";
import ArrowLeftRight from "./icons/ArrowLeftRight";
import PencilIcon from "./icons/PencilIcon";
import TrashIcon from "./icons/TrashIcon";
import { ModifierType } from "@lib/types/modifier-types";
import PlusIcon from "./icons/PlusIcon";
import { ModifierElementAction } from "./ModifierElementAction";

export default function ModifierElement({
  modifier: { text, replacement },
  modifierKey: key,
  removeModifier,
  editModifier,
  addModifier,
}: {
  modifier: ModifierType;
  modifierKey: number;
  removeModifier: (key: number) => void;
  editModifier?: (key: number) => void;
  addModifier?: (modifier: ModifierType) => void;
}) {
  return (
    <li className="manipulator">
      <button className="manipulator__element active">
        <span className="sr-only">Le text "</span> {text}{" "}
        <span className="sr-only">" sera remplacé par le texte "</span>{" "}
        <ArrowLeftRight /> {replacement} <span className="sr-only">".</span>
      </button>
      <div className="manipulator__overlay">
        {(
          [
            [
              addModifier && (() => addModifier({ text, replacement })),
              <PlusIcon />,
              "Ajouter le manipulateur.",
              "text-green-500",
            ],
            [
              editModifier && (() => editModifier(key)),
              <PencilIcon />,
              "Modifier le manipulateur.",
            ],
            [
              () => removeModifier(key),
              <TrashIcon />,
              "Supprimer le manipulateur.",
              "text-red-500",
            ],
          ] as const
        ).map(
          ([action, Icon, text, textColor], index) =>
            action && (
              <ModifierElementAction
                text={text}
                textColor={textColor}
                action={action}
                key={index}
              >
                {Icon}
              </ModifierElementAction>
            )
        )}
      </div>
    </li>
  );
}

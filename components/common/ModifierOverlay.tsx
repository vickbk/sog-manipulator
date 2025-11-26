import {
  ModifierElementProps,
  ModifierOverlayData,
} from "@lib/types/modifier-types";
import PencilIcon from "./icons/PencilIcon";
import PlusIcon from "./icons/PlusIcon";
import TrashIcon from "./icons/TrashIcon";
import { ModifierElementAction } from "./ModifierElementAction";

export const ModifierOverlay = ({
  actions: { addModifier, editModifier, removeModifier },
  modifier,
  modifierKey: key,
}: ModifierElementProps) => {
  // Prepare the data for the overlay actions component
  const actionsData = [
    addModifier && [
      () => addModifier(modifier),
      <PlusIcon />,
      "Ajouter le manipulateur.",
      "text-green-500",
    ],
    editModifier && [
      () => editModifier(key),
      <PencilIcon />,
      "Modifier le manipulateur.",
    ],
    [
      () => removeModifier(key),
      <TrashIcon />,
      "Supprimer le manipulateur.",
      "text-red-500",
    ],
  ].filter(Boolean) as ModifierOverlayData;
  return (
    <div className="manipulator__overlay">
      {actionsData.map(
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
  );
};

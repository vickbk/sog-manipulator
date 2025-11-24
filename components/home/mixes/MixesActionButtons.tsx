import ArrowUpCircle from "@components/common/icons/ArrowUpCircle";
import InfoCircleIcon from "@components/common/icons/InfoCircleIcon";
import TrashIcon from "@components/common/icons/TrashIcon";
import { MixModsType, ModifierType } from "@lib/types/modifier-types";
import { CSSProperties } from "react";

export default function MixesActionButtons({
  modifiers,
  actionsHelpers: { setModifiers, closeDialog, deleteMix, showDetails },
  mixKey: key,
}: {
  modifiers: ModifierType[];
  actionsHelpers: {
    setModifiers: (mods: MixModsType["modifiers"]) => void;
    closeDialog: () => void;
    deleteMix: (id: number) => void;
    showDetails: () => void;
  };
  mixKey: number;
}) {
  return (
    <div className="flex justify-evenly">
      {(
        [
          {
            text: "Voir les details.",
            icon: <InfoCircleIcon />,
            click: showDetails,
            additionalClasses: "",
          },
          {
            text: "Utiliser la combinaison.",
            icon: <ArrowUpCircle />,
            click: () => {
              setModifiers(modifiers);
              closeDialog();
            },
            additionalClasses: "",
          },
          {
            text: "Supprimer la combination.",
            icon: <TrashIcon />,
            click: () => deleteMix(key),
            additionalClasses: " text-red-500",
          },
        ] as const
      ).map(({ click, text, icon, additionalClasses }) => (
        <button
          className={`p-2 white rounded-lg active${additionalClasses}`}
          type="button"
          style={{ "--bg-accent": 0.25 } as CSSProperties}
          onClick={click}
        >
          {icon}
          <span className="sr-only">{text}</span>
        </button>
      ))}
    </div>
  );
}

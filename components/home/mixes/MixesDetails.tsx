import XIcon from "@components/common/icons/XIcon";
import { MixModsType } from "@lib/types/modifier-types";
import { CSSProperties } from "react";

export default function MixesDetails({
  mix: { name, description },
  closeDetails,
}: {
  mix: MixModsType;
  closeDetails: () => void;
}) {
  return (
    <article
      className="absolute p-4 inset-0 flex flex-col justify-center blue-900 rounded-lg"
      style={{ "--bg-accent": 0.8 } as CSSProperties}
    >
      <button
        className="text-red-500 absolute -top-4 -right-4 outline p-2 active rounded-lg"
        onClick={closeDetails}
        type="button"
      >
        <XIcon />
        <span className="sr-only">Fermer les details de la combinaison</span>
      </button>
      <h3 className="text-center text-2xl mb-4">{name}</h3>
      <p>
        {description || "Aucune description fournie pour cette combinaison."}
      </p>
    </article>
  );
}

import ModifierElement from "@components/common/ModifierElement";
import MixesActionButtons from "./MixesActionButtons";
import MixesDetails from "./MixesDetails";
import { MixModsType } from "@lib/types/modifier-types";
import { useState } from "react";

export default function MixElement({
  mix,
  mixKey: key,
  mixHelpersFunctions: {
    setModifiers,
    closeDialog,
    deleteMix,
    deleteMixModifier,
  },
}: {
  mix: MixModsType;
  mixKey: number;
  mixHelpersFunctions: {
    setModifiers: (mods: MixModsType["modifiers"]) => void;
    closeDialog: () => void;
    deleteMix: (id: number) => void;
    deleteMixModifier: (mixId: number, modId: number) => void;
  };
}) {
  const { name, modifiers, description } = mix;
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="relative border rounded-lg p-4 grow md:max-w-48/100">
      <h5>{name}</h5>
      <ul className="py-4 flex gap-4 flex-wrap">
        {modifiers.map((modifier, modKey) => (
          <ModifierElement
            key={modKey}
            modifier={modifier}
            modifierKey={modKey}
            removeModifier={(modKey) => deleteMixModifier(key, modKey)}
          />
        ))}
      </ul>
      <MixesActionButtons
        modifiers={modifiers}
        mixKey={key}
        actionsHelpers={{
          setModifiers,
          closeDialog,
          deleteMix,
          showDetails() {
            setShowDetails(true);
          },
        }}
      />
      {showDetails && (
        <MixesDetails mix={mix} closeDetails={() => setShowDetails(false)} />
      )}
    </article>
  );
}

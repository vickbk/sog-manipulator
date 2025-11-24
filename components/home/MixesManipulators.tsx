import { getModMixes, setModMixes } from "@lib/mod-mixes";
import { MixModsType, ModifiersSetter } from "@lib/types/modifier-types";
import { useEffect, useState } from "react";
import MixElement from "./mixes/MixElement";

export default function MixesManipulators({
  setModifiers,
  closeDialog,
}: {
  setModifiers: ModifiersSetter;
  closeDialog: () => void;
}) {
  const [mixes, setMixes] = useState<MixModsType[]>([]);

  const deleteMix = (id: number) => {
    const remaining = mixes.filter((_, key) => key !== id);
    setModMixes(remaining);
    setMixes(remaining);
  };

  const deleteMixModifier = (mixId: number, modId: number) => {
    const mix = mixes[mixId];
    mix.modifiers = mix.modifiers.filter((_, key) => key !== modId);
    const newMixes = [...mixes];
    setMixes(newMixes);
    setModMixes(newMixes);
  };

  useEffect(() => {
    setMixes(getModMixes());
  }, []);
  return (
    <section className="grid gap-4 py-4">
      <h4 className="text-center">Liste des combinaisons enregistrées</h4>
      <section className="flex flex-wrap gap-4 items-start">
        {mixes.map((mix, key) => (
          <MixElement
            key={key}
            mix={mix}
            mixKey={key}
            mixHelpersFunctions={{
              setModifiers,
              closeDialog,
              deleteMix,
              deleteMixModifier,
            }}
          />
        ))}
      </section>
    </section>
  );
}

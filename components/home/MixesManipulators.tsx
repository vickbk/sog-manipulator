import ArrowUpCircle from "@components/common/icons/ArrowUpCircle";
import TrashIcon from "@components/common/icons/TrashIcon";
import ModifierElement from "@components/common/ModifierElement";
import { CSSProperties } from "react";

export default function MixesManipulators() {
  return (
    <section className="grid gap-4 py-4">
      <h4 className="text-center">Liste des combinaisons enregistrées</h4>
      <section className="flex flex-wrap gap-4">
        <article className="border rounded-lg p-4">
          <h5>name</h5>
          <ul className="py-4 flex gap-4 flex-wrap">
            {[
              { text: "text", replacement: "replacement" },
              { text: "text", replacement: "replac" },
            ].map((modifier, key) => (
              <ModifierElement
                key={key}
                modifier={modifier}
                modifierKey={key}
                removeModifier={(key) => {}}
              />
            ))}
          </ul>
          <div className="flex justify-evenly">
            <button
              className="p-2 white rounded-lg active"
              type="button"
              style={{ "--bg-accent": 0.25 } as CSSProperties}
              onClick={() => {}}
            >
              <ArrowUpCircle />
              <span className="sr-only">Utiliser la combinaison.</span>
            </button>
            <button
              className="active p-2 white rounded-lg text-red-500"
              type="button"
              style={{ "--bg-accent": 0.25 } as CSSProperties}
              onClick={() => {}}
            >
              <TrashIcon />
              <span className="sr-only">Supprimer la combination.</span>
            </button>
          </div>
        </article>
      </section>
    </section>
  );
}

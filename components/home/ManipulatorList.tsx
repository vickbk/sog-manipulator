import ArrowLeftRight from "@components/common/icons/ArrowLeftRight";
import PencilIcon from "@components/common/icons/PencilIcon";
import TrashIcon from "@components/common/icons/TrashIcon";
import { ModifierType } from "@lib/types/modifier-types";
import { CSSProperties } from "react";

export default function ManipulatorList({
  modifiers,
}: {
  modifiers: ModifierType[];
}) {
  return (
    <section>
      <h3 className="sr-only">Liste de modificateurs selectionnés</h3>
      <ul className="flex flex-wrap gap-4">
        {modifiers.map(({ text, replacement }, key) => (
          <li className="manipulator" key={key}>
            <button className="manipulator__element">
              {text} <ArrowLeftRight /> {replacement}
            </button>
            <div className="manipulator__overlay">
              <button
                className="p-2 blue-900 rounded-lg"
                type="button"
                style={{ "--bg-accent": 1 } as CSSProperties}
              >
                <PencilIcon />
                <span className="sr-only">Edit modifier</span>
              </button>
              <button
                className="p-2 blue-900 rounded-lg text-red-500"
                type="button"
                style={{ "--bg-accent": 1 } as CSSProperties}
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

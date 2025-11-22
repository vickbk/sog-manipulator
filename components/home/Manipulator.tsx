"use client";
import { addModifier } from "@actions/addModifier";
import ArrowUpDown from "@components/common/icons/ArrowUpDown";
import PlusIcon from "@components/common/icons/PlusIcon";
import InputWithLabel from "@components/common/InputWithLabel";
import { modifierExist } from "@lib/modifier/modifier-exist";
import { ModifierType } from "@lib/types/modifier-types";
import { useActionState, useEffect, useState } from "react";
import ManipulatorList from "./ManipulatorList";

export default function Manipulator() {
  const [modifiers, setModifiers] = useState<ModifierType[]>([]);
  const [modifier, addModifierAction, modState] = useActionState(
    addModifier,
    null
  );
  const [modEdit, setModEdit] = useState<ModifierType | null>(null);

  const removeModifier = (id: number) => {
    setModifiers(modifiers.filter((_, key) => key !== id));
  };
  const editModifier = (id: number) => {
    setModEdit(modifiers[id]);
    removeModifier(id);
  };
  useEffect(() => {
    if (!modState && modifier && !modifierExist(modifier, modifiers)) {
      setModifiers([...modifiers, modifier]);
      setModEdit(null);
    }
  }, [modifier, modState]);
  return (
    <article className="grid gap-4 text-lg">
      <h2 className="text-center text-2xl">Manipulateur de text</h2>
      <label className="grid gap-2">
        Text a manipuler
        <textarea
          className="border active p-4 resize-none rounded-lg"
          rows={3}
          name="text"
        ></textarea>
      </label>
      <ManipulatorList
        removeModifier={removeModifier}
        editModifier={editModifier}
        modifiers={modifiers}
      />
      <form className="flex gap-4 items-center" action={addModifierAction}>
        <div className="grow">
          <InputWithLabel
            label="Text a remplacer"
            name="text"
            defaultValue={modEdit?.text}
          />
          <InputWithLabel
            label="Remplacer avec"
            name="replacement"
            defaultValue={modEdit?.replacement}
          />
        </div>
        <button className="border active rounded-lg p-4 ">
          <PlusIcon /> <span className="sr-only">Ajouter manipulateur</span>
        </button>
      </form>

      <div className="flex flex-wrap gap-4 justify-center">
        <button className="grow flex justify-center items-center gap-4 border rounded-lg active p-4">
          <ArrowUpDown /> Manipuler le text
        </button>
        <button className="grow rounded-lg p-4 c-blue-900 white">
          Creer le format SOG
        </button>
      </div>
    </article>
  );
}

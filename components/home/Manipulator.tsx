"use client";
import { addModifier } from "@actions/addModifier";
import ArrowUpDown from "@components/common/icons/ArrowUpDown";
import { ModifierType } from "@lib/types/modifier-types";
import { useActionState, useEffect, useRef, useState } from "react";
import ManipulatorList from "./ManipulatorList";
import ModifierAdder from "./ModifierAdder";
import manipulatorHelpers from "@actions/manipulatorHelpers";
import TrashIcon from "@components/common/icons/TrashIcon";
import { ActionButton } from "@components/common/ActionButton";

export default function Manipulator({
  setText,
  swipped,
}: {
  setText: (text: string) => void;
  swipped: boolean;
}) {
  const [modifiers, setModifiers] = useState<ModifierType[]>([]);
  const [modifier, addModifierAction, modState] = useActionState(
    addModifier,
    null
  );
  const [modEdit, setModEdit] = useState<ModifierType | null>(null);

  const textRef = useRef<HTMLTextAreaElement>(null);

  const enableClear = modEdit || modifiers.length > 0;

  const {
    removeModifier,
    editModifier,
    addHistoricalModifier,
    handleModifierAddition,
    manipulateText,
    clearForm,
  } = manipulatorHelpers(
    [modifiers, setModifiers],
    [modifier, addModifierAction, modState],
    [modEdit, setModEdit],
    textRef,
    setText
  );

  useEffect(handleModifierAddition, [modifier, modState]);

  return (
    <article
      className={`grid gap-4 text-lg transition-transform duration-500${
        swipped ? " md:-translate-x-[calc(100%+var(--spacing)*4)]" : ""
      }`}
    >
      <h2 className="text-center text-2xl">Manipulateur de text</h2>

      <label className="grid gap-2">
        Text a manipuler
        <textarea
          className="border active p-4 resize-none rounded-lg"
          rows={3}
          name="text"
          ref={textRef}
        ></textarea>
      </label>

      <ManipulatorList
        removeModifier={removeModifier}
        editModifier={editModifier}
        modifiers={modifiers}
        setModifiers={setModifiers}
        addHistoryModifier={addHistoricalModifier}
      />

      <ModifierAdder modEdit={modEdit} addModifierAction={addModifierAction} />

      <div className="flex flex-wrap gap-4 justify-center">
        <ActionButton
          moreClass="md:grow blue-900 c-white"
          onClick={manipulateText}
        >
          <ArrowUpDown /> Manipuler le text
        </ActionButton>
        {enableClear && (
          <ActionButton moreClass="md:grow" onClick={clearForm}>
            <TrashIcon />
            Effacer tout
          </ActionButton>
        )}
      </div>
    </article>
  );
}

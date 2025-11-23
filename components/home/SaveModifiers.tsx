import { addModMixes } from "@actions/addModMixes";
import CustomDialog from "@components/common/CustomDialog";
import DialogCloser from "@components/common/DialogCloser";
import FloppyIcon from "@components/common/icons/FloppyIcon";
import InputWithLabel from "@components/common/InputWithLabel";
import ModifierElement from "@components/common/ModifierElement";
import { ModifierType } from "@lib/types/modifier-types";
import { useActionState, useEffect, useRef, useState } from "react";

export default function SaveModifier({
  showSaveForm,
  modifiers,
}: {
  showSaveForm: (state: false) => void;
  modifiers: ModifierType[];
}) {
  const [response, saveAction, saving] = useActionState(
    (_: unknown, data: FormData) => addModMixes({ data, modifiers: modList }),
    null
  );
  const [modList, setModList] = useState(modifiers);
  const deleteModifier = (id: number) => {
    setModList(modList.filter((_, index) => id !== index));
  };

  useEffect(() => {
    if (!saving && response) {
      showSaveForm(false);
    }
  }, [response, saving]);
  return (
    <CustomDialog
      className="m-auto relative p-4 blue-900 c-white w-full md:max-w-100"
      isOpen={true}
      onClose={() => showSaveForm(false)}
    >
      <DialogCloser onClose={() => showSaveForm(false)}>
        Fermer le formulaire d'enregistrement
      </DialogCloser>
      <section>
        <h4 className="text-center">Enregistrer les manipulateurs de text</h4>
        <form className="py-8 grid gap-4" action={saveAction}>
          <InputWithLabel label="Nom de la selection" name="mixname" />
          <ul className="flex flex-wrap gap-4">
            {modList.map((modifier, key) => (
              <ModifierElement
                modifier={modifier}
                modifierKey={key}
                removeModifier={deleteModifier}
                key={key}
              />
            ))}
          </ul>
          <button
            className="flex justify-center items-center p-4 gap-4 active outline rounded-lg"
            type="submit"
          >
            {" "}
            <FloppyIcon /> Enregistrer{" "}
            <span className="sr-only">la selection</span>
          </button>
        </form>
      </section>
    </CustomDialog>
  );
}

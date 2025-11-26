import { addModMixes } from "@actions/addModMixes";
import CustomDialog from "@components/common/CustomDialog";
import DialogCloser from "@components/common/DialogCloser";
import FloppyIcon from "@components/common/icons/FloppyIcon";
import InputWithLabel from "@components/common/InputWithLabel";
import ModifierElement from "@components/common/ModifierElement";
import { ModifierType } from "@lib/types/modifier-types";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

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
      toast.success("Modificateurs enregistrés avec succès !");
    }
  }, [response, saving]);
  return (
    <CustomDialog
      className="m-auto relative p-4 c-blue-900 white w-full md:max-w-100"
      isOpen={true}
      onClose={() => showSaveForm(false)}
    >
      <DialogCloser onClose={() => showSaveForm(false)}>
        Fermer le formulaire d'enregistrement
      </DialogCloser>
      <section>
        <h4 className="text-center">Enregistrer les manipulateurs de text</h4>
        <form className="py-8 grid gap-4" action={saveAction}>
          <InputWithLabel label="Nom de la selection" name="mixname" required />
          <ul className="flex flex-wrap gap-4">
            {modList.map((modifier, key) => (
              <ModifierElement
                modifier={modifier}
                modifierKey={key}
                actions={{ removeModifier: deleteModifier }}
                key={key}
              />
            ))}
          </ul>
          <label className="grid gap-2">
            Description de la combinaison (optionnel)
            <textarea
              className="border active p-4 resize-none rounded-lg"
              rows={3}
              name="description"
            ></textarea>
          </label>
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

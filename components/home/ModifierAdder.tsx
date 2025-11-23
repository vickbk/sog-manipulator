import PlusIcon from "@components/common/icons/PlusIcon";
import InputWithLabel from "@components/common/InputWithLabel";
import { ModifierType } from "@lib/types/modifier-types";

export default function ModifierAdder({
  addModifierAction,
  modEdit,
}: {
  addModifierAction: (payload: FormData) => void;
  modEdit: ModifierType | null;
}) {
  return (
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
  );
}

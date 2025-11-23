import getFormFields from "@lib/get-form-fields";
import { getModMixes, setModMixes } from "@lib/mod-mixes";
import { ModifierType } from "@lib/types/modifier-types";

export function addModMixes({
  data,
  modifiers,
}: {
  data: FormData;
  modifiers: ModifierType[];
}) {
  const { mixname } = getFormFields<{ mixname: string }>(data);

  const allMixes = getModMixes();
  setModMixes([
    ...allMixes.filter(({ name }) => name !== mixname),
    { name: mixname, modifiers },
  ]);
  return true;
}

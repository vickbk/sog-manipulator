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
  const { mixname, description } = getFormFields<{
    mixname: string;
    description: string;
  }>(data);

  if (!mixname || modifiers.length === 0) {
    return false;
  }
  setModMixes([
    ...getModMixes().filter(({ name }) => name !== mixname),
    { name: mixname, modifiers, description },
  ]);
  return true;
}

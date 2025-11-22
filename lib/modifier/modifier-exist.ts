import { ModifierType } from "@lib/types/modifier-types";

export const modifierExist = (
  { text, replacement }: ModifierType,
  modifierSet: ModifierType[]
) =>
  modifierSet.some(
    (mod) => mod.text === text && mod.replacement === replacement
  );

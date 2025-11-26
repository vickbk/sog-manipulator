import { addModifier } from "@actions/addModifier";
import { addModMixes } from "@actions/addModMixes";
import getFormFields from "@lib/get-form-fields";
import { objectToFormData } from "@lib/object-to-formdata";
import { readJsonFile } from "@lib/read-json-file";
import { MixModsType, ModifierType } from "@lib/types/modifier-types";

export const uploadModifiers = async (_: unknown, data: FormData) => {
  try {
    const { file } = getFormFields<{ file: File }>(data);
    if (!file || !file.name) throw new Error("No file provided");
    const { mixes, modifiers } = await readJsonFile<{
      mixes: MixModsType[];
      modifiers: ModifierType[];
    }>(file);
    if (!mixes || !modifiers) throw new Error("Invalid file format");
    addMixes(mixes);
    addModifiers(modifiers);
    return true;
  } catch (error: any) {
    console.error("Error uploading modifiers:", error);
    return null;
  }
};

const addMixes = async (mixes: MixModsType[]) => {
  mixes.forEach(({ name, modifiers, description }) => {
    addModMixes({
      data: objectToFormData({ mixname: name, description }),
      modifiers,
    });
  });
};

const addModifiers = async (modifiers: ModifierType[]) => {
  modifiers.forEach((modifier) => {
    addModifier(null, objectToFormData(modifier));
  });
};

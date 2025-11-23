import getMemoItem from "./memorization/get-item";
import { MixModsType } from "./types/modifier-types";

export function getModMixes() {
  return getMemoItem<MixModsType[]>("mixes") || [];
}

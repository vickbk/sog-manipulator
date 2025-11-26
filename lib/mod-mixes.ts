import getMemoItem from "./memorization/get-item";
import setMemoItem from "./memorization/set-item";
import { MixModsType } from "./types/modifier-types";

export function getModMixes() {
  return getMemoItem<MixModsType[]>("mixes") || [];
}

export function setModMixes(mixes: MixModsType[]) {
  setMemoItem("mixes", mixes);
}

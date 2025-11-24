export type ModifierType = {
  text: string;
  replacement: string;
};

export type HistoryModifierAddFunction = (modifier: ModifierType) => void;

export type MixModsType = {
  name: string;
  modifiers: ModifierType[];
  description?: string;
};

export type ModifiersSetter = (modifiers: ModifierType[]) => void;

export type HistoryPages = "modifiers" | "mixes";

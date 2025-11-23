export type ModifierType = {
  text: string;
  replacement: string;
};

export type HistoryModifierAddFunction = (modifier: ModifierType) => void;

export type MixModsType = {
  name: string;
  modifiers: ModifierType[];
};

export type ModifierType = {
  text: string;
  replacement: string;
};

export type HistoryModifierAddFunction = (modifier: ModifierType) => void;

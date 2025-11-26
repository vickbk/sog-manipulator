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

export type ModifierActions = {
  removeModifier: (key: number) => void;
  editModifier?: (key: number) => void;
  addModifier?: (modifier: ModifierType) => void;
};

export type ModifierElementProps = {
  modifier: ModifierType;
  modifierKey: number;
  actions: ModifierActions;
};

export type ModifierOverlayData = [
  () => void,
  React.ReactElement,
  string,
  string | undefined
][];

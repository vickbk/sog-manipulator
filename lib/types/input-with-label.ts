export type InputWithLabelProps = {
  label: string;
  name?: string;
  defaultValue?: string;
  labelAttrs?: React.LabelHTMLAttributes<HTMLLabelElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

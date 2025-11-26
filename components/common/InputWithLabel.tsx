import { InputWithLabelProps } from "@lib/types/input-with-label";
import { forwardRef } from "react";

const InputWithLabel = forwardRef<HTMLLabelElement, InputWithLabelProps>(
  ({ label, name, defaultValue, labelAttrs, ...inputProps }, ref) => {
    return (
      <label className="c-input" {...labelAttrs}>
        <input
          className="c-input__field"
          type="text"
          placeholder=""
          name={name || "name"}
          defaultValue={defaultValue}
          {...inputProps}
        />
        <span className="c-input__label">{label}</span>
      </label>
    );
  }
);

InputWithLabel.displayName = "InputWithLabel";
export default InputWithLabel;

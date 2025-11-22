export default function InputWithLabel({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name?: string;
  defaultValue?: string;
}) {
  return (
    <label className="c-input">
      <input
        className="c-input__field"
        type="text"
        placeholder=""
        name={name || "name"}
        defaultValue={defaultValue}
      />
      <span className="c-input__label">{label}</span>
    </label>
  );
}

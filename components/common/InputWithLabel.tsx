export default function InputWithLabel({
  label,
  name,
}: {
  label: string;
  name?: string;
}) {
  return (
    <label className="c-input">
      <input
        className="c-input__field"
        type="text"
        placeholder=""
        name={name || "name"}
      />
      <span className="c-input__label">{label}</span>
    </label>
  );
}

export default function InputWithLabel({ label }: { label: string }) {
  return (
    <label className="c-input">
      <input className="c-input__field" type="text" placeholder="" />
      <span className="c-input__label">{label}</span>
    </label>
  );
}

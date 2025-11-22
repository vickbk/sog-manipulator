export default function InputWithLabel({ label }: { label: string }) {
  return (
    <div className="relative">
      <label>
        <input type="text" />
        {label}
      </label>
    </div>
  );
}

export function ModifierElementAction({
  children,
  text,
  textColor,
  action,
}: {
  children: React.ReactNode;
  text: string;
  textColor?: string;
  action: () => void;
}) {
  return (
    <button
      className={`p-2 white rounded-lg active ${
        textColor ? textColor : "c-blue-900"
      }`}
      type="button"
      style={{ "--bg-accent": 1 } as React.CSSProperties}
      onClick={action}
    >
      {children}
      <span className="sr-only">{text}</span>
    </button>
  );
}

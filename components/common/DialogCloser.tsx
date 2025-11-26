import {
  ButtonHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import XIcon from "./icons/XIcon";

const DialogCloser = forwardRef<
  HTMLButtonElement,
  { onClose: (state: false) => void } & ButtonHTMLAttributes<HTMLButtonElement>
>(({ onClose, children, ...props }, ref) => {
  const buttonRef = useRef(null);
  // Exposes the dialogRef.current to the parent component when using forwardRef.
  useImperativeHandle(ref, () => buttonRef.current!, []);
  return (
    <button
      className="p-4 rounded-lg blue-900 c-white active"
      type="button"
      onClick={() => {
        onClose(false);
      }}
      ref={buttonRef}
    >
      <XIcon /> <span className="sr-only">{children}</span>
    </button>
  );
});

DialogCloser.displayName = "DialogCloser";
export default DialogCloser;

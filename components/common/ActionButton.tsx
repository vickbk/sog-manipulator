import { forwardRef } from "react";
import { SROnly } from "./SROnly";

export const ActionButton = forwardRef<
  HTMLButtonElement,
  {
    srText?: string;
    moreClass?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children = <>

    </>, srText, moreClass = "", type = "button", ...props }, ref) => {
  return (
    <button
      className={`flex justify-center items-center gap-4 border rounded-lg active p-4 ${moreClass}`}
      type={type}
    >
      {children}
      {srText && <SROnly text="action button" />}
    </button>
  );
});

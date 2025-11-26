import ArrowLeftRight from "./icons/ArrowLeftRight";
import { ModifierElementProps } from "@lib/types/modifier-types";
import { ModifierOverlay } from "./ModifierOverlay";

export default function ModifierElement({ ...props }: ModifierElementProps) {
  const {
    modifier: { text, replacement },
  } = props;
  return (
    <li className="manipulator">
      <button className="manipulator__element active">
        <span className="sr-only">Le text "</span> {text}{" "}
        <span className="sr-only">" sera remplacé par le texte "</span>{" "}
        <ArrowLeftRight /> {replacement} <span className="sr-only">".</span>
      </button>
      <ModifierOverlay {...props} />
    </li>
  );
}

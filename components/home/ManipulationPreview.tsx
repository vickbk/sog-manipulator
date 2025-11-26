import { createSOGFormat } from "@lib/handle-SOG";
import { useState } from "react";

export default function ManipulationPreview({
  text,
  swipped,
}: {
  text: string;
  swipped: boolean;
}) {
  const [sogText, setSogText] = useState(null);
  const createSOGFormatx = () => {
    const sog = createSOGFormat(text, true);
    console.log(sog);
    // setSogText(sog);
  };
  return (
    <article
      className={`md:col-start-1 transition-transform duration-500${
        swipped ? " md:translate-x-[calc(100%+var(--spacing)*4)]" : ""
      } md:row-start-1 flex flex-col`}
    >
      <h2 className="text-center text-2xl">Texte déjà modifié</h2>
      <p className="grow py-4">{text}</p>
      <footer className="flex justify-center border-t pt-4">
        <button
          className="rounded-lg p-4 blue-900 c-white active"
          type="button"
          onClick={createSOGFormatx}
        >
          Creer le format SOG
        </button>
      </footer>
    </article>
  );
}

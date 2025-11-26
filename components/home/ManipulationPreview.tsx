import { ActionButton } from "@components/common/ActionButton";
import { CopyIcon } from "@components/common/icons/CopyIcon";
import { clipboardCopy } from "@lib/clipboard-copy";
import { createSOGFormat } from "@lib/handle-SOG";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ManipulationPreview({
  text,
  swipped,
}: {
  text: string;
  swipped: boolean;
}) {
  const [sogText, setSogText] = useState<string | null>(null);
  const createSOGFormatx = () => {
    const sog = createSOGFormat(text, true) as string;
    console.log(sog);
    setSogText(sog);
    toast.success("Le format SOG a ete cree avec succes !");
  };

  const copySOGToClipboard = async () => {
    if (sogText) {
      const success = await clipboardCopy(sogText);
      if (success) {
        setSogText(null);
        toast.success("Texte SOG copié dans le presse-papier !");
      }
    }
  };

  return (
    <article
      className={`md:col-start-1 contain-size transition-transform duration-500${
        swipped ? " md:translate-x-[calc(100%+var(--spacing)*4)]" : ""
      } md:row-start-1 flex flex-col`}
    >
      <h2 className="text-center text-2xl">Texte déjà modifié</h2>
      <p className="grow py-4 overflow-y-auto">{text}</p>
      <footer className="flex justify-center gap-4 items-center border-t pt-4">
        <ActionButton moreClass="blue-900 c-white" onClick={createSOGFormatx}>
          Creer le format SOG
        </ActionButton>
        {text && sogText && (
          <ActionButton srText="le text SOG" onClick={copySOGToClipboard}>
            <CopyIcon /> Copier
          </ActionButton>
        )}
      </footer>
    </article>
  );
}

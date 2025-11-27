import { downloadManipulators } from "@actions/history/downloadManipulators";
import { ActionButton } from "@components/common/ActionButton";
import { CloudDownloadIcon } from "@components/common/icons/CloudDownloadIcon";
import InputWithLabel from "@components/common/InputWithLabel";
import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

export const DownloadManipulators = () => {
  const [data, downloadAction, state] = useActionState(
    downloadManipulators,
    null
  );
  const linkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!state && data && linkRef.current) {
      linkRef.current.click();
      toast.success(
        "Le fichier de manipulateurs est en cours de téléchargement !"
      );
    }
  }, [data, state]);
  return (
    <form className="grid gap-4" action={downloadAction}>
      <h5 className="mb-2 text-xl text-center font-semibold">
        Exporter la liste de manipulateurs actuellement enregistés
      </h5>
      <InputWithLabel
        label="Nom du fichier"
        name="filename"
        defaultValue={"manipulateurs-sog"}
        required
      />
      <ActionButton srText="la liste de manipulateurs" type="submit">
        <CloudDownloadIcon />
        Telecharger
      </ActionButton>
      {data && (
        <Link href={data.url} download={data.filename} hidden ref={linkRef} />
      )}
    </form>
  );
};

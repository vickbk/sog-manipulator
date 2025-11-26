import { uploadModifiers } from "@actions/history/uploadModifiers";
import { ActionButton } from "@components/common/ActionButton";
import { FileIcon } from "@components/common/icons/FileIcon";
import FloppyIcon from "@components/common/icons/FloppyIcon";
import { SROnly } from "@components/common/SROnly";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const UploadManipulators = () => {
  const [uploadResult, uploadAction, uploadState] = useActionState(
    uploadModifiers,
    null
  );
  let [fileName, setFileName] = useState("");
  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name || "");
  };

  useEffect(() => {
    if (!uploadState && uploadResult !== null) {
      if (uploadResult === true) {
        toast.success("Manipulateurs importés avec succès !");
      } else {
        toast.error("Échec de l'importation des manipulateurs.");
      }
      setFileName("");
    }
  }, [uploadResult, uploadState]);

  return (
    <form className="grid gap-4 items-center" action={uploadAction}>
      <h5 className="mb-2 text-xl text-center font-semibold">
        Importer une liste de manipulateurs actuellement enregistés sur cet
        appareil
      </h5>

      <label className="cursor-pointer flex justify-center gap-4 items-center">
        <input
          onChange={showFile}
          type="file"
          name="file"
          accept="application/json"
          className="sr-only"
          required
        />
        <FileIcon /> {fileName || "Choisir un fichier..."}
        <SROnly text="Choisir un fichier à importer" />
      </label>
      <ActionButton srText="la liste de manipulateurs" type="submit">
        <FloppyIcon />
        Enregister
      </ActionButton>
    </form>
  );
};

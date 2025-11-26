import { ActionButton } from "@components/common/ActionButton";
import { FileIcon } from "@components/common/icons/FileIcon";
import FloppyIcon from "@components/common/icons/FloppyIcon";
import { SROnly } from "@components/common/SROnly";

export const UploadManipulators = () => {
  return (
    <form className="grid gap-4 items-center" action="">
      <h5 className="mb-2 text-xl text-center font-semibold">
        Importer une liste de manipulateurs actuellement enregistés sur cet
        appareil
      </h5>

      <label className="cursor-pointer">
        <input type="file" name="file" accept="application/json" hidden />
        <FileIcon />
        <SROnly text="Choisir un fichier à importer" />
      </label>
      <ActionButton srText="la liste de manipulateurs" type="submit">
        <FloppyIcon />
        Enregister
      </ActionButton>
    </form>
  );
};

import { ActionButton } from "@components/common/ActionButton";
import { CloudDownloadIcon } from "@components/common/icons/CloudDownloadIcon";
import InputWithLabel from "@components/common/InputWithLabel";

export const DownloadManipulators = () => {
  return (
    <form className="grid gap-4" action="">
      <h5 className="mb-2 text-xl text-center font-semibold">
        Exporter la liste de manipulateurs actuellement enregistés sur cet
        appareil
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
    </form>
  );
};

import ArrowUpDown from "@components/common/icons/ArrowUpDown";
import Plus from "@components/common/icons/Plus";
import InputWithLabel from "@components/common/InputWithLabel";

export default function Manipulator() {
  return (
    <article className="grid gap-4 text-lg">
      <h2 className="text-center text-2xl">Manipulateur de text</h2>
      <label className="grid gap-2">
        Text a manipuler
        <textarea
          className="border active p-4 resize-none rounded-lg"
          rows={3}
          name="text"
        ></textarea>
      </label>
      <form className="flex gap-4 items-center" action="">
        <div className="grow">
          <InputWithLabel label="Text a remplacer" />
          <InputWithLabel label="Remplacer avec" />
        </div>
        <button className="border active rounded-lg p-4 ">
          <Plus /> <span className="sr-only">Ajouter manipulateur</span>
        </button>
      </form>

      <div className="flex flex-wrap gap-4 justify-center">
        <button className="flex justify-center items-center gap-4 border rounded-lg active p-4">
          <ArrowUpDown /> Manipuler le text
        </button>
        <button className="rounded-lg p-4 c-blue-900 white">
          Creer le format SOG
        </button>
      </div>
    </article>
  );
}

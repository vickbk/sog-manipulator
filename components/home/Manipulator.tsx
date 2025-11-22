import ArrowUpDown from "@components/common/icons/ArrowUpDown";
import Plus from "@components/common/icons/Plus";
import InputWithLabel from "@components/common/InputWithLabel";

export default function Manipulator() {
  return (
    <article>
      <h2>Manipulateur de text</h2>
      <label>
        Text a manipuler
        <textarea name="text"></textarea>
      </label>
      <form action="">
        <InputWithLabel label="Text a remplacer" />
        <InputWithLabel label="Remplacer avec" />
        <button>
          <Plus /> Ajouter manipulateur
        </button>
      </form>

      <div>
        <button>
          <ArrowUpDown /> Manipuler le text
        </button>
        <button>Creer le format SOG</button>
      </div>
    </article>
  );
}

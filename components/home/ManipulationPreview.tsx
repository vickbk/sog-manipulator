export default function ManipulationPreview({ text }: { text: string }) {
  return (
    <article className="md:col-start-1 md:row-start-1 flex flex-col">
      <h2 className="text-center text-2xl">Texte déjà modifié</h2>
      <p className="grow py-4">{text}</p>
      <footer className="flex justify-center border-t pt-4">
        <button className="rounded-lg p-4 blue-900 c-white" type="button">
          Creer le format SOG
        </button>
      </footer>
    </article>
  );
}

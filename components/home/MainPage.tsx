"use client";

import MainContainer from "@components/common/MainContainer";
import Manipulator from "./Manipulator";
import ManipulationPreview from "./ManipulationPreview";
import { CSSProperties, useState } from "react";
import ArrowLeftRight from "@components/common/icons/ArrowLeftRight";

export default function MainPage() {
  const [text, setText] = useState("");
  const [swipped, setSwipped] = useState(false);
  return (
    <MainContainer>
      <article className="grid relative md:grid-cols-2 gap-16 md:gap-4 max-w-250 mx-auto">
        <Manipulator setText={setText} swipped={swipped} />
        <ManipulationPreview text={text} swipped={swipped} />
        <button
          className="active absolute white c-blue-900 border p-4 inset-x-0 w-12 aspect-square rounded-lg hidden md:block m-auto"
          type="button"
          style={{ "--bg-accent": 0.2 } as CSSProperties}
          onClick={() => setSwipped(!swipped)}
        >
          <ArrowLeftRight />{" "}
          <span className="sr-only">
            Permitter les places du manipulateur et de l'affichage
          </span>
        </button>
      </article>
    </MainContainer>
  );
}

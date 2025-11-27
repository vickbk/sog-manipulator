"use client";

import MainContainer from "@components/common/MainContainer";
import Manipulator from "./Manipulator";
import ManipulationPreview from "./ManipulationPreview";
import { useState } from "react";
import ArrowLeftRight from "@components/common/icons/ArrowLeftRight";
import { ActionButton } from "@components/common/ActionButton";

export default function MainPage() {
  const [text, setText] = useState("");
  const [swipped, setSwipped] = useState(false);
  return (
    <MainContainer>
      <article className="grid relative md:grid-cols-2 gap-16 md:gap-4 max-w-250 mx-auto">
        <Manipulator setText={setText} swipped={swipped} />
        <ManipulationPreview text={text} swipped={swipped} />
        <ActionButton
          moreClass="absolute inset-x-0 w-12 aspect-square hidden md:block m-auto"
          srText="Permitter les places du manipulateur et de l'affichage"
          onClick={() => setSwipped(!swipped)}
        >
          <ArrowLeftRight />
        </ActionButton>
      </article>
    </MainContainer>
  );
}

"use client";

import MainContainer from "@components/common/MainContainer";
import Manipulator from "./Manipulator";
import ManipulationPreview from "./ManipulationPreview";
import { useState } from "react";

export default function MainPage() {
  const [text, setText] = useState("Nothing yet");
  return (
    <MainContainer>
      <article className="grid md:grid-cols-2 gap-16 md:gap-4 max-w-250 mx-auto">
        <Manipulator setText={setText} />
        <ManipulationPreview text={text} />
      </article>
    </MainContainer>
  );
}

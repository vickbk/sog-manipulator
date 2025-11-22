import MainContainer from "@components/common/MainContainer";
import Manipulator from "./Manipulator";

export default function MainPage() {
  return (
    <MainContainer>
      <article className="grid md:grid-cols-2 max-w-250 mx-auto">
        <Manipulator />
        <article className="col-start-1 row-start-1"></article>
      </article>
    </MainContainer>
  );
}

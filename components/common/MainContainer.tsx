import { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return <main className="px-4">{children}</main>;
}

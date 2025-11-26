import getMemo from "./get-memo";

export default function getMemoItem<T = any>(params: string): T {
  const path = params.split(".");
  return getNested(getMemo(), path) as T;
}

function getNested(obj: Record<string, any>, path: string[]) {
  return path.reduce((o, p) => (o ? o[p] : undefined), obj);
}

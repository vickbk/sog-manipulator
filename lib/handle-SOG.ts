import { SOGSong, SOGSongHead } from "./types/SOG-types";

export const createSOGFormat = (text: string, asString: boolean = false) => {
  const songs = text.split("{#}");
  const SOGSongs = songs.map((song) => {
    const head = getSOGSongHead(song);
    const body = getSOGSongBody(song);
    if (!head) return null;
    return { head, body };
  });
  const songsFiltered = SOGSongs.filter((song) => song !== null);
  return asString
    ? songsFiltered.map((song) => SOGSongToString(song)).join("\n\n")
    : songsFiltered;
};

const SOGSongToString = (song: SOGSong) => {
  const headString = `${song.head.number}\n${song.head.title}\n`;
  const bodyString = song.body.join("\n");
  return headString + bodyString;
};

const getSOGSongHead = (songText: string): null | SOGSongHead => {
  const [head] = songText.split("$$");
  if (!head) return null;
  const lastSpaceIndex = head.lastIndexOf(" ");
  const number = head.substring(lastSpaceIndex + 1);
  const title = head.substring(0, lastSpaceIndex);
  return { number, title };
};

const getSOGSongBody = (songText: string) => {
  const [, ...body] = songText.replaceAll(/\$\$\$/g, "$$").split("$$");
  if (body.length === 0) return [""];
  return body.map((part) => breakLongLines(part).join("\n"));
};

export const breakLongLines = (
  text: string,
  maxLineLength: number = 200,
  minLineLength: number = 10
): string[] => {
  // check if text is shorter than max length
  if (text.length <= maxLineLength) return [text];
  // get best break index
  let breakIndex = getBestTextBreaker({
    maxLineLength,
    minLineLength,
    text,
  });

  if (breakIndex === null) return [text];
  //   return array of broken lines
  return [
    text.substring(0, breakIndex).trim(),
    ...breakLongLines(
      text.substring(breakIndex).trim(),
      maxLineLength,
      minLineLength
    ),
  ];
};

const getNearestTextBreaker = (text: string, reverse = false) => {
  const breakers = [". ", "... ", "! ", "? "];

  let best: { breaker: string; index: number } | null = null;

  const direction = reverse ? "lastIndexOf" : "indexOf";
  for (const breaker of breakers) {
    const idx = text[direction](breaker);
    if (idx === -1) continue;
    const index = reverse ? text.length - (idx + breaker.length) : idx;
    if (best === null || index < best.index) best = { breaker, index };
  }

  return best;
};

const getBestTextBreaker = ({
  minLineLength,
  maxLineLength,
  text,
}: {
  maxLineLength: number;
  minLineLength: number;
  text: string;
}) => {
  //   split text into first part and rest following max length
  const firstText = text.substring(0, maxLineLength);
  const restOfText = text.substring(maxLineLength + 1);
  //  find nearest text breakers in both parts
  let previousBreaker = getNearestTextBreaker(firstText, true)?.index ?? null;
  const nextBreaker = getNearestTextBreaker(restOfText)?.index ?? null;

  if (
    previousBreaker !== null &&
    maxLineLength - previousBreaker < minLineLength
  )
    previousBreaker = null;
  // return null if no breakers found
  if (previousBreaker === null && nextBreaker === null) return null;

  let breakIndex: number = Infinity;
  //   determine best breaker to use
  if (nextBreaker === null) breakIndex = -previousBreaker! - 2;
  if (previousBreaker === null) breakIndex = nextBreaker!;
  if (previousBreaker !== null && nextBreaker !== null)
    breakIndex =
      nextBreaker < previousBreaker ? nextBreaker : -previousBreaker - 2;
  // add offset to break index if using next breaker
  breakIndex += maxLineLength + 2;
  return breakIndex;
};

const stringReverse = (text: string) => text.split("").reverse().join("");

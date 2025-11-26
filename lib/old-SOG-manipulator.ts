import { AutoDiv } from "../../AutoDiv";
import { Colors } from "../../Colors";
import { DOMComponents } from "../../DOM/DOMComponents";
import DOMLoader from "../../DOM/DOMLoader";
import { FocusCute } from "../../FocusCute";
import { FocusDOM } from "../../FocusDOM";
import { FocusGlobals } from "../../FocusGlobals";
import { FocusString } from "../../FocusString";
import { Forms } from "../../Forms";
import { foreach } from "../../objects/Iterator";
import NWDetector from "./NWDetector";

export interface SOGSongHead {
  number: string;
  title: string;
  head?: number;
}
export interface SOGSong {
  head: SOGSongHead;
  body: string | string[];
}

export default class MakeSOG {
  private static displayer: HTMLElement;
  static objectFormat: boolean = false;

  static getDisplayer(): HTMLElement {
    MakeSOG.displayer =
      MakeSOG.displayer ?? document.getElementById("sog-text-displayer");
    return MakeSOG.displayer;
  }
  static manipulateText(form: HTMLFormElement): void {
    let textarea: HTMLTextAreaElement = form.querySelector(
        "textarea[name=text]"
      ),
      bruteText: string = textarea.value,
      toReplace: NodeListOf<HTMLInputElement> = form.querySelectorAll(
        "input[name=to-replace]"
      ),
      toBeReplaced: NodeListOf<HTMLInputElement> = form.querySelectorAll(
        "input[name=replacement]"
      ),
      toReplaceValues: string[] = [],
      toBeReplacedValues: string[] = [];
    foreach(toReplace, (input) => toReplaceValues.push(input.value));
    foreach(toBeReplaced, (input) => toBeReplacedValues.push(input.value));

    FocusDOM.setDataIn(
      MakeSOG.getDisplayer(),
      MakeSOG.replaceAllText(
        bruteText,
        toReplaceValues.join("-,-"),
        toBeReplacedValues.join("-,-")
      )
    );
  }
  static replaceAllText(text: string, select: string, replace: string): string {
    let allReplaces: [RegExp, string][] = [],
      allReplacements: string[] = replace.split("-,-"),
      allSelects: string[] = select.split("-,-");
    if (allSelects.length === allReplacements.length)
      foreach(allSelects, (toReplace, index: number) => {
        allReplaces.push([new RegExp(toReplace, "g"), allReplacements[index]]);
      });
    else allReplaces.push([new RegExp(allSelects[0], "g"), allReplacements[0]]);
    return FocusString.replaceMultiple(text, ...allReplaces);
  }
  static format() {
    if (!MakeSOG.getDisplayer) {
      console.error("impossible de determiner le displayer");
      return;
    }
    let container: HTMLElement = MakeSOG.displayer,
      songs: string[] = container.innerText.split("{#}"),
      SOGText: string = "",
      SOGSongs: (string | SOGSong)[] = MakeSOG.songs(songs);
    if (MakeSOG.objectFormat) {
      AutoDiv.alert({
        title: "chansons en format SOG",
        content: FocusDOM.createElement("sog-songs", { songs: SOGSongs }),
      });
      console.log(SOGSongs);
    } else {
      SOGText = SOGSongs.join("\n\n");
      console.log(SOGText);
    }
  }
  static songs(songs: string[]): (string | SOGSong)[] {
    let SOGSongs: (string | SOGSong)[] = [];
    foreach(songs, (song) => {
      let head: SOGSongHead = MakeSOG.songHead(song),
        body: string | string[] = MakeSOG.songBody(song);
      SOGSongs.push(
        MakeSOG.objectFormat
          ? { head, body }
          : [head.number, head.title, body].join("\n")
      );
    });
    return SOGSongs;
  }
  static songHead(song: string): SOGSongHead {
    let songComponents: string[] = song.split("$$"),
      head: string[] = [],
      number: string,
      title: string;
    if (songComponents.length > 0) {
      head = FocusString.trim(songComponents[0]).split(" ");
      number = head.pop();
      title = head.join(" ");
      return { number: number, title: title, head: head.length };
    }
  }
  static songBody(song: string): string | string[] {
    let body: string[] = FocusString.replaceMultiple(song, [
        /\$\$\$/g,
        "$$",
      ]).split("$$"),
      bodyComponents: string[] = [];
    body.shift();
    foreach(body, (component) =>
      bodyComponents.push(MakeSOG.breakLongText(component))
    );
    return MakeSOG.objectFormat ? bodyComponents : bodyComponents.join("\n");
  }
  static breakLongText(text: string, limit: number = 250): string {
    if (typeof text !== "string") return "";
    if (text.length <= limit) return text;
    let newText: string,
      restOfText: string = text.substr(limit + 1),
      firstText: string = text.substr(0, limit),
      newDotIndex: number = restOfText.indexOf(". "),
      lastDotIndex: number = firstText.lastIndexOf(". "),
      index: number;

    lastDotIndex = lastDotIndex < 10 ? -1 : limit - lastDotIndex;
    index =
      limit +
      (lastDotIndex > -1 && (lastDotIndex < newDotIndex || newDotIndex < 0)
        ? -lastDotIndex
        : newDotIndex !== -1
        ? newDotIndex
        : limit);
    newText = FocusString.trim(text.substr(0, index + 2));
    restOfText = FocusString.trim(text.substr(index + 2));
    return (
      newText +
      (restOfText.length > 0
        ? "\n" + MakeSOG.breakLongText(restOfText, limit)
        : "")
    );
  }
}
FocusGlobals.add(["MakeSOG", MakeSOG], ["NWDetector", NWDetector]);
FocusCute.defaults = true;
// DOMLoaderDefaults.addAll();
DOMLoader.add(
  Forms.get,
  FocusDOM.openNextElement,
  FocusDOM.copyPreviousElement
);
window.addEventListener("load", () => {
  Colors.getCSSCode();
  DOMComponents.default = true;
});

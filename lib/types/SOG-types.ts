export interface SOGSongHead {
  number: string;
  title: string;
}

export interface SOGSong {
  head: SOGSongHead;
  body: string | string[];
}

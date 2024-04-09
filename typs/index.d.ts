type SessionInfo = {
  type: string,
  title: string,
  presenter: string,
  description?: string,
  labels?: string[],
  bio?: string,
  socials?: string[],
}

export type CardInfo = {
  type: string; // time, info, keynote, or session
  content: string | SessionInfo[];
  size: string; // md:col-span-1, 3, 6, or 9
  track?: string | string[];
  labels?: string[];
  keynoteSpeaker?: string;
}

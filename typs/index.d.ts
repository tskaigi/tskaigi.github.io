interface SessionInfo {
  type?: string;
  title: string;
  displayName: string;
  org?: string;
  username?: string;
}

interface SessionDetail {
  title: string,
  displayName: string,
  sessionAbstract: string;
  role: string;
  org: string;
  bio: string;
  speakerImage: string;
  labels: {
    track: string;
    type: string;
    time: string;
  };
  socials: {
    xAccount?: string;
    github: string;
  };
  additionalInfo?: string;
}

export type CardInfo = {
  type: string; // time, info, keynote, or session
  content: string | SessionInfo[];
  size: string; // md:col-span-1, 3, 6, or 9
  track?: string | string[];
  labels?: string[];
  keynoteSpeaker?: string;
};

import { LABEL_BG_COLOR } from "@/constants";
import { CardInfo, SessionInfo } from "@/typs";
import SessionCardLabels from "./SessionCardLabels";

interface SessionProps {
  session: SessionInfo;
}

// Create a session row
const Session = ({ session }: SessionProps) => {
  const { title, presenter } = session;
  return (
    <div className="py-2">
      <p className="text-base font-normal text-[#040404]">{title}</p>
      <p className="text-xs font-normal text-[#040404]">{presenter}</p>
    </div>
  );
};

interface SessionListProps {
  sessions: SessionInfo[];
}

// Create a list of sessions in the session card
const SessionList = ({ sessions }: SessionListProps) => {
  return (
    <div className="px-4 pb-4">
      {sessions.map((session, index) => (
        <Session key={session.title + "-" + index} session={session} />
      ))}
    </div>
  );
};

interface SessionCardProps {
  cardInfo: CardInfo;
}

const SessionCard = ({ cardInfo }: SessionCardProps) => {
  const { content, track, labels } = cardInfo;
  const bgColor = typeof track === "string" ? LABEL_BG_COLOR[track] : "";

  return (
    <div className="min-h-24 rounded-lg bg-white md:col-span-3">
      {Array.isArray(labels) && <SessionCardLabels labels={labels} bgColor={bgColor} />}
      {Array.isArray(content) && <SessionList sessions={content} />}
    </div>
  );
};

export default SessionCard;

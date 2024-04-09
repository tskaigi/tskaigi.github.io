import { CardInfo } from "@/typs";
import InformationCardLabels from "./InformationCardLabels";

interface InformationCardProps {
  cardInfo: CardInfo;
}

const InformationCard = ({ cardInfo }: InformationCardProps) => {
  const { type, content, size, track, labels, keynoteSpeaker } = cardInfo;
  
  const cardClassNames =
    type === "time"
      ? "md:items-center md:justify-center md:rounded-lg md:bg-white"
      : type === "close"
        ? "min-h-16 content-center justify-center rounded-lg bg-white"
        : "md:min-h-24 min-h-20 items-center justify-center rounded-lg bg-white";

  const contentClassNames =
    type === "time"
      ? "text-white md:px-2 md:text-neutral-950"
      : type === "close"
        ? "flex justify-center text-neutral-950"
        : "pb-4 pl-4 pt-2 text-neutral-950";

  return (
    <div className={`md:flex md:flex-col ${size} ${cardClassNames}`}>
      {track && <InformationCardLabels track={track} labels={labels} />}
      {typeof content === "string" && (
        <div className={`text-base md:p-0 ${contentClassNames}`}>{content}</div>
      )}
      {keynoteSpeaker && (
        <p className="-mt-4 pb-4 pl-4 text-xs text-neutral-900 md:m-0 md:p-0">{keynoteSpeaker}</p>
      )}
    </div>
  );
};

export default InformationCard;

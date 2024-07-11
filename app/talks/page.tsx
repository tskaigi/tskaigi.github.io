import InformationCard from "@/components/session-time-table/InformationCard";
import SessionCard from "@/components/session-time-table/SessionCard";
import SessionTimeTableHeader from "@/components/session-time-table/SessionTimeTableHeader";
import { TIME_TABLE_DATA } from "@/constants";
import { CardInfo } from "@/typs";

interface SessionTimeTableRowProps {
  timeTableRow: CardInfo[];
}

const SessionTimeTableRow = ({ timeTableRow }: SessionTimeTableRowProps) => {
  return (
    <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
      {timeTableRow.map((cardInfo, index) => {
        if (!["keynote", "session"].includes(cardInfo.type)) {
          return <InformationCard cardInfo={cardInfo} key={cardInfo.size + "-" + index} />;
        } else {
          return <SessionCard cardInfo={cardInfo} key={cardInfo.size + "-" + index} />;
        }
      })}
    </div>
  );
};

const SessionTimeTable = () => {
  return (
    <div className="flex justify-center p-4 md:p-8">
      <div className="flex w-full max-w-screen-xl flex-col gap-4">
        <SessionTimeTableHeader />

        {TIME_TABLE_DATA.map((row, index) => (
          <SessionTimeTableRow key={index} timeTableRow={row} />
        ))}
      </div>
    </div>
  );
};

export default SessionTimeTable;

import SessionLabel from "./SessionLabel";

interface SessionCardLabels {
  labels: string[];
  bgColor: string;
}

const SessionCardLabels = ({ labels, bgColor }: SessionCardLabels) => {
  return (
    <div className="flex gap-3.5 pl-4 pt-4">
      {labels.map((label, index) => (
        <SessionLabel key={label + "-" + index} label={label} bgColor={bgColor} />
      ))}
    </div>
  );
};

export default SessionCardLabels;

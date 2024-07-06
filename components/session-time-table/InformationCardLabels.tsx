import { LABEL_BG_COLOR } from "@/constants";
import SessionLabel from "./SessionLabel";

interface InformationCardLabelsProps {
  track: string | string[];
  labels: string[] | undefined;
}

const InformationCardLabels = ({ track, labels }: InformationCardLabelsProps) => {
  let labelBgColor: string | string[];
  if (!Array.isArray(track)) {
    labelBgColor = LABEL_BG_COLOR[track];
  } else {
    labelBgColor = [LABEL_BG_COLOR[track[0]], LABEL_BG_COLOR[track[1]]];
  }

  return (
    <div className="flex gap-3.5 pl-4 pt-4 md:hidden">
      {Array.isArray(labelBgColor)
        ? labels?.map((label, index) => (
            <SessionLabel key={label + "-" + index} label={label} bgColor={labelBgColor[index]} />
          ))
        : labels?.map(
            (label, index) =>
              typeof labelBgColor === "string" && (
                <SessionLabel key={label + "-" + index} label={label} bgColor={labelBgColor} />
              ),
          )}
    </div>
  );
};

export default InformationCardLabels;

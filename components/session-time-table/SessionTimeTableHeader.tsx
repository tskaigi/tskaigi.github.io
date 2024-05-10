import { LABEL_BG_COLOR, TRACK_HEADER_HASHTAGS, TRACK_HEADER_NAMES } from "@/constants";

const SessionTimeTableHeader = () => {
  return (
    <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
      <div className="md:flex md:min-h-24 md:rounded-lg md:bg-white" />

      {TRACK_HEADER_NAMES.map((headerName: string, index: number) => (
        <div
          key={headerName + index}
          className={`hidden md:col-span-3 md:flex md:flex-col md:items-center md:rounded-lg ${LABEL_BG_COLOR[headerName]} md:min-h-24 md:justify-center`}
        >
          <div className="text-wrap text-base text-neutral-800 md:px-2 md:text-2xl">
            {headerName}
          </div>
          <p className="text-sm text-neutral-500">{TRACK_HEADER_HASHTAGS[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default SessionTimeTableHeader;

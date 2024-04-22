import { LABEL_BG_COLOR, TRACK_HEADER_NAMES } from "@/constants";

const SessionTimeTableHeader = () => {
  return (
    <div className="grid size-full grid-flow-row gap-4 md:grid-cols-10">
      <div className="md:flex md:min-h-24 md:rounded-lg md:bg-white" />

      {TRACK_HEADER_NAMES.map((headerName, index) => (
        <div
          key={headerName + index}
          className={`hidden md:col-span-3 md:flex md:items-center md:rounded-lg ${LABEL_BG_COLOR[headerName]} md:min-h-24 md:justify-center`}
        >
          <div className="text-wrap text-base text-neutral-800 md:px-2 md:text-2xl">
            {headerName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionTimeTableHeader;

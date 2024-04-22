interface SessionLabelProps {
  label: string;
  bgColor: string;
  isSessionDetail?: boolean;
}

const SessionLabel = ({ label, bgColor, isSessionDetail }: SessionLabelProps) => {
  let hiddenLabel = "";
  if (label === "トラックA" || label === "トラックB" || label === "トラックC") {
    hiddenLabel = "md:hidden";
  }

  return (
    <div
      className={`flex h-auto min-w-[88px] items-center justify-center rounded-lg ${bgColor} p-1 text-xs ${!isSessionDetail && 'text-neutral-900'} ${!isSessionDetail && hiddenLabel} ${isSessionDetail && 'border'}`}
    >
      <p>{label}</p>
    </div>
  );
};

export default SessionLabel;

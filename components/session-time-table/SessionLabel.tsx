interface SessionLabelProps {
  label: string;
  bgColor: string;
}

const SessionLabel = ({ label, bgColor }: SessionLabelProps) => {
  let hiddenLabel = "";
  if (label === "トラックA" || label === "トラックB" || label === "トラックC") {
    hiddenLabel = "md:hidden";
  }

  return (
    <div
      className={`flex h-5 min-w-[88px] items-center justify-center rounded-lg ${bgColor} p-2 text-xs text-neutral-900 ${hiddenLabel}`}
    >
      <p>{label}</p>
    </div>
  );
};

export default SessionLabel;

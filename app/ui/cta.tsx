export default function Cta({
  prevent,
  subLink,
  subLinkText,
  mainLink,
  mainLinkText,
}: {
  prevent?: boolean;
  subLink?: string;
  subLinkText?: string;
  mainLink: string;
  mainLinkText: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-4 lg:flex-row lg:gap-8">
        {subLink && subLinkText && (
          <a
            href={subLink}
            rel="noopener noreferrer"
            target="_blank"
            className={`link link-primary w-full max-w-xs ${prevent ? "pointer-events-none cursor-not-allowed opacity-50" : ""}`}
          >
            <div className="btn w-full lg:btn-md">{subLinkText}</div>
          </a>
        )}
        <a
          href={mainLink}
          rel="noopener noreferrer"
          target="_blank"
          className={`link link-primary w-full max-w-xs ${prevent ? "pointer-events-none cursor-not-allowed opacity-50" : ""}`}
        >
          <div className="btn btn-accent w-full overflow-hidden whitespace-nowrap bg-gradient-to-r from-accent to-[#FFCDA8] font-bold text-primary-content lg:btn-md hover:opacity-90">
            {mainLinkText}
          </div>
        </a>
      </div>
    </>
  );
}

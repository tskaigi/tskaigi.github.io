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
      <div className="flex flex-col items-center justify-center lg:flex-row py-4 gap-4 lg:gap-8">
        {subLink && subLinkText && (
        <a
          href={subLink}
          rel="noopener noreferrer"
          target="_blank"
          className={`link link-primary w-full max-w-xs ${ prevent ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}
          >
          <div className="btn lg:btn-md w-full">{subLinkText}</div>
        </a>
        )}
        <a
          href={mainLink}
          rel="noopener noreferrer"
          target="_blank"
          className={`link link-primary w-full max-w-xs ${ prevent ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}
        >
          <div className="btn lg:btn-md btn-accent font-bold text-primary-content w-full bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90 overflow-hidden whitespace-nowrap">
            {mainLinkText}
          </div>
        </a>
      </div>
    </>
  );
}

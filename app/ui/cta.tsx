export default function Cta({
  subLink,
  subLinkText,
  mainLink,
  mainLinkText,
}: {
  subLink: string;
  subLinkText: string;
  mainLink: string;
  mainLinkText: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:flex-row h-32 gap-4 lg:gap-8 my-8">
        <a
          href={subLink}
          rel="noopener noreferrer"
          target="_blank"
          className="link link-primary w-full max-w-xs"
        >
          <div className="btn lg:btn-lg w-full">{subLinkText}</div>
        </a>
        <a
          href={mainLink}
          rel="noopener noreferrer"
          target="_blank"
          className="w-full max-w-xs"
        >
          <div className="btn lg:btn-lg btn-accent w-full bg-gradient-to-r to-[#FFCDA8] from-accent hover:opacity-90 overflow-hidden whitespace-nowrap">
            {mainLinkText}
          </div>
        </a>
      </div>
    </>
  );
}

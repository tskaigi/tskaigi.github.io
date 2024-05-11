import SessionLabel from "@/components/session-time-table/SessionLabel";
import { SESSION_SPEAKERS } from "@/constants";
import { SESSION_DETAILS } from "@/constants/session_details";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return SESSION_SPEAKERS.map((username) => ({
    username: username,
  }));
}

interface SessionDetailPageProps {
  params: {
    username: string;
  };
}
export default function Page({ params }: SessionDetailPageProps) {
  const { username } = params;
  const detailInfo = SESSION_DETAILS[username];
  const slash = detailInfo.role && detailInfo.org ? '/' : '';

  return (
    <div className="p-8 md:flex md:flex-col md:items-center md:justify-center">
      <div className="flex w-full max-w-screen-md flex-col content-center">
        <div className="">
          <div className="border-b pb-2 text-3xl">{detailInfo.title}</div>
          <div className="flex gap-2 pt-2">
            <SessionLabel label={detailInfo.labels.track} bgColor="" isSessionDetail={true} />
            <SessionLabel label={detailInfo.labels.type} bgColor="" isSessionDetail={true} />
            <SessionLabel label={detailInfo.labels.time} bgColor="" isSessionDetail={true} />
          </div>
        </div>
        <div className="whitespace-pre-line pb-8 pt-4">
          <p>{detailInfo.sessionAbstract}</p>
        </div>
        <div className="md:flex md:gap-8">
          {detailInfo.speakerImage && <Image
            className="size-20 rounded-full"
            src={`/speaker_images/${detailInfo.speakerImage}`}
            width={80}
            height={80}
            alt={`${username}_image`}
            unoptimized
          />}
          <div>
            <div className="text-base font-bold">{detailInfo.displayName}</div>
            <p className="text-sm">{`${detailInfo.org} ${slash} ${detailInfo.role}`}</p>
            <p className="whitespace-pre-line pt-4 text-base">{detailInfo.bio}</p>
            {detailInfo.additionalInfo && (
              <Link
                className="pt-1 text-sm font-semibold hover:underline"
                href={detailInfo.additionalInfo}
              >
                {detailInfo.additionalInfo}
              </Link>
            )}
            <div className="flex items-center gap-2 pt-2">
              {detailInfo.socials.github && (
                <Link href={`https://github.com/${detailInfo.socials.github}`}>
                  <Image
                    src={"/social_logos/github-mark-white.svg"}
                    width={24}
                    height={24}
                    alt="github_link"
                    unoptimized
                  />
                </Link>
              )}
              {detailInfo.socials.xAccount && (
                <Link href={`https://twitter.com/${detailInfo.socials.xAccount}`}>
                  <Image src={"/social_logos/logo.svg"} width={22} height={22} alt="twitter_link" unoptimized/>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

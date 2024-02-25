import Card from "../ui/card"
import Color from "../ui/color"
import Container from "../ui/container";
import { selectionCommittee } from '@/app/lib/data';
import News from "../ui/news";
import Cta from "../ui/cta";
import { SponsorList } from "../lib/definitions";
import { sponsorList } from "../lib/data";
export default function Sponsor() {
  const plans: (keyof SponsorList)[] = Object.keys(sponsorList) as (keyof SponsorList)[];
  return (
    <div>
      <Container>
        <Color />
        <Card cardData={selectionCommittee} />
        <News />
        <h2 className="text-center text-3xl m-4">ぷらちなすぽ</h2>
        <div className="h-12 flex justify-center">
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        </div>
        <div className="divider"></div>

        <h2 className="text-center text-3xl m-4">ごるどすぽ</h2>
        <div className="h-12 flex justify-center">
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        </div>
        <div className="divider"></div>
        <h2 className="text-center text-3xl m-4">しるばすぽ</h2>
        <div className="h-12 flex justify-center">
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        <img src="/logo.svg" className="w-24" alt="" />
        </div>
        {plans.map((plan) => (
          <>
            <h3 key={plan}>{plan}</h3>
            <div>
              {sponsorList[plan].map((sponsor) => (
                <div key={sponsor.name}>
                  <h4>{sponsor.name}</h4>
                  <p>{sponsor.description}</p>
                  <img src={sponsor.imageUrl} alt={sponsor.name} />
                  <ul>
                    {sponsor.links.map((link) => (
                      <li key={link}>
                        <a href={link}>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ))}
      </Container>
    </div>
  )
}
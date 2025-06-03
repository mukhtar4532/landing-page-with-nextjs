import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-4xl 2xl:rounded-4xl`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex h-full p-6 flex-col items-start justify-between lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className=" rounded-full bg-green-500 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-[700] text-white">{title} </h4>
            <p className="text-[14px] font-[400] text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="text-[16px] font-[700] md:text-[20px] md:font-[700] text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="flex flex-col relative py-10 xl:mb-20 2xl:mx-auto 2xl:max-w-[1440px] lg:mb-10 lg:py-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="/img-1.png"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="/img-2.png"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 w-full rounded-3xl relative overflow-hidden lg:max-w-[500px] xl:max-w-[734px] xl:rounded-4xl xl:px-16 xl:py-20">
          <h2 className="text-[24px] font-[400] md:text-[32px] md:font-[400] 2xl:text-[64px] 2xl:font-[400] 2xl:leading-[120%] capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-[14px] font-[400] xl:text-[16px] xl:font-[400] mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing loction, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;

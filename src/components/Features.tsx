import { FEATURES } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section
      className="flex items-center justify-center flex-col bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('/feature-bg.png')" }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
          />
        </div>

        <div className="z-20 flex flex-col lg:mt-24 w-full lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%]">
              Our Features
            </h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20 lg:mg-20">
            {FEATURES.map((feature) => (
              <FeatureItems
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
type FeatureProps = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};

const FeatureItems = ({ title, icon, variant, description }: FeatureProps) => {
  return (
    <li className="flex flex-1 flex-col items-start w-full">
      <div
        className={`rounded-full p-4 lg:p-7 ${
          variant == "green" ? "bg-green-500" : "bg-orange-500"
        }`}
      >
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2 className="text-[20px] font-[700] mt-5 capitalize lg:text-[32px] lg:font-[700] lg:leading-[120%]">
        {title}
      </h2>
      <p className="text-[16px] font-[400] mt-5 bg-white/80 text-gray-500 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;

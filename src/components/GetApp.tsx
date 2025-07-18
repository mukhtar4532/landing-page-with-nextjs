import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="flex items-center justify-center w-full flex-col pb-[100px]">
      <div
        className="mx-auto max-w-[1440px] relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-gray-800 bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-4xl"
        style={{ backgroundImage: "url('/pattern.png')" }}
      >
        <div>
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[40px] lg:font-[700] lg:leading-[120%] xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="text-[16px] font-[400] text-gray-200">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="border-white bg-white px-8 py-5 text-green-500"
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="border-gray-200 bg-green-800 px-8 py-5 text-white"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;

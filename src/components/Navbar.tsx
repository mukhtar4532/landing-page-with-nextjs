import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 py-5 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] relative z-30">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>

      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] font-[400] text-gray-500 flex items-center justify-center cursor-pointer hover:font-bold pb-1.5 transition-all"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        <Button type="button" title="login" icon="/user.svg" />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;

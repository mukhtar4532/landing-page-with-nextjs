import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full cursor-pointer ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="text-[16px] font-[700] whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;

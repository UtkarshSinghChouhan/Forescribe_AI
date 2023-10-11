import Image from "next/image";

const MenuButton = ({ icon, name }) => {
  return (
    <>
      <div
        className={`${
          name === "Integrations" ? "bg-[#8B3DFF]/[0.08]" : "bg-white"
        } flex justify-start w-full py-3 pl-5 gap-3 rounded-md cursor-pointer hover:bg-[#ebebed] relative`}
      >
        <span
          className={`${
            name === "Integrations" ? "" : "hidden"
          } absolute w-1 h-[calc(100%-20px)] bg-[#8B3DFF] rounded-[40px] left-0`}
        ></span>
        <Image src={icon} width={22} height={22} />
        <p className="font-normal text-base">{name}</p>
      </div>
    </>
  );
};

export default MenuButton;

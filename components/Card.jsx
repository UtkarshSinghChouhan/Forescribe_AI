import Image from "next/image";
import Button from "./Button";
import highlight from "../public/extended_assests/highlight.svg";
import triangle from "../public/extended_assests/triangle.svg";

const Card = ({ symbol, icon, title, detail, bgcolor, btn }) => {
  console.log(bgcolor);
  return (
    <>
      <div
        className={` ${
          icon.length === 0 ? "opacity-[0.65]" : "opacity-100"
        } flex justify-between items-center border-2 border-[#EFEFEF] rounded-3xl py-6 px-5 card_background w-full h-full `}
      >
        <div className="flex gap-2 items-center">
          <div
            style={{ background: `#${bgcolor}` }}
            className={`flex justify-center items-center w-[52px] h-[52px] p-2 rounded-[10px]`}
          >
            <Image src={symbol} width={26} height={35} alt="symbol" />
          </div>
          <div className="info flex flex-col">
            <div className="title flex gap-2">
              <h1 className="text-lg font-medium text-[#19154E]">{title}</h1>

              {icon.length != 0 && (
                <div className="flex justify-center items-center gap-2 bg-[#9867EA]/[0.2] rounded-lg w-[61px] h-[26px]">
                  {icon.length > 1 ? (
                    <>
                      <Image src={icon[0]} width={15} height={15} />
                      <Image src={icon[1]} width={15} height={15} />
                    </>
                  ) : (
                    <Image src={icon[0]} width={47} height={19} />
                  )}
                </div>
              )}
            </div>
            <div className="content text-[#6B778C] text-base font-normal">
              {detail}
            </div>
          </div>
        </div>

        {btn ? (
          <Button />
        ) : (
          <>
            <div
              style={{ backgroundColor: "rgba(255, 141, 21, 1)" }}
              className="relative z-10 bg-[#FF8D15] cursor-pointer py-1 px-5 rounded-tl-[5px] rounded-tr-[5px] rounded-br-0 rounded-bl-[5px] mr-[-37px]"
            >
              <div className="absolute top-[-15px] left-[-11px] z-40">
                <Image src={highlight} width={21} height={21} alt="highlight" />
              </div>
              <p className="text-white cursor-pointer text-sm">Comming Soon</p>
              <div className="absolute z-[-1] right-0 bottom-[-12px]">
                <Image src={triangle} width={16} height={13} alt="highlight" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;

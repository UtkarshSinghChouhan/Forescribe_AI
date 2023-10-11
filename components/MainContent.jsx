import Image from "next/image";

import {
  mc_integration,
  mc_accounting,
  mc_engagement,
} from "../constants/index.js";
import Card from "./Card";
import SubHeading from "./SubHeading.jsx";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col gap-12 main_content pl-12 pr-12 py-8 ">
        <div className="header flex flex-col">
          <h1 className="font-semibold text-[#19154E] text-3xl">
            Integrations
          </h1>
          <p className="text-base font-normal text-[#3F4C5A]">
            Missing your favorite Integration? You can request one{" "}
            <span className="text-[#8B3DFF] cursor-pointer">here</span>.
          </p>
        </div>

        <div className="identity flex flex-col gap-5 w-full">
          <SubHeading sub_heading="Identity and Single Sign On" />

          <div className="flex flex-col gap-5">
            {mc_integration.map((obj) => {
              const { id, symbol, icon, title, detail, bgcolor, btn } = obj;

              return (
                <Card
                  key={id}
                  symbol={symbol}
                  icon={icon}
                  title={title}
                  detail={detail}
                  bgcolor={bgcolor}
                  btn={btn}
                />
              );
            })}
          </div>
        </div>

        <div className="accounting flex flex-col gap-5">
          <SubHeading sub_heading="Accounting" />
          <div className="flex flex-col gap-5">
            {mc_accounting.map((obj) => {
              const { id, symbol, icon, title, detail, bgcolor, btn } = obj;

              return (
                <Card
                  key={id}
                  symbol={symbol}
                  title={title}
                  detail={detail}
                  icon={icon}
                  bgcolor={bgcolor}
                  btn={btn}
                />
              );
            })}
          </div>
        </div>
        <div className="engagement flex flex-col gap-5">
          <SubHeading sub_heading="Engagement" />
          <div className="flex flex-col gap-5 ">
            {mc_engagement.map((obj) => {
              const { id, symbol, title, icon, detail, bgcolor, btn } = obj;

              return (
                <Card
                  key={id}
                  symbol={symbol}
                  title={title}
                  icon={icon}
                  detail={detail}
                  bgcolor={bgcolor}
                  btn={btn}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;

// opacity-[0.65]

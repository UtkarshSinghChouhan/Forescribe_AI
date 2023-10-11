import logo from "../public/sidebar_assests/logo.svg";
import Image from "next/image";

import MenuButton from "./MenuButton";
import { menu_info, settings_info } from "../constants";
import insights from "../public/sidebar_assests/insights.svg";
import person from "../public/sidebar_assests/person-workspace-icon-1.svg";
import downward_arrow from "../public/sidebar_assests/downward_arrow.svg";

// 220px

const Sidebar = () => {
  return (
    <>
      <div className="w-[17%] h-full sticky top-0 bottom-0 left-0 flex flex-col border-r-2  bg-white">
        <div className="logo w-full py-5 flex justify-center items-center border-b-2 box-border overflow-hidden ">
          <Image className="cursor-pointer" src={logo} width={110} alt="logo" />
        </div>

        <div className="flex h-full flex-col justify-between items-center  pt-5">
          <div className="navigation w-full px-3">
            <MenuButton icon={insights} name={"Insights"} />
            <div className="menu pt-4">
              <p className="cursor-default text-xs text-light-gray font-normal uppercase pl-5 pb-2">
                Menu
              </p>
              {menu_info.map((obj) => {
                const { id, name, icon } = obj;
                return <MenuButton key={id} icon={icon} name={name} />;
              })}
            </div>
            <div className="settings pt-4">
              <p className="cursor-default text-sm text-light-gray font-normal uppercase pl-5 pb-2">
                Settings
              </p>
              {settings_info.map((obj) => {
                const { id, name, icon } = obj;
                return <MenuButton key={id} icon={icon} name={name} />;
              })}
            </div>
          </div>

          <div className="flex justify-between email border-t-2 w-full py-4 px-7">
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center bg-[#8B3DFF] rounded-[3px] p-2 cursor-pointer">
                <Image src={person} width={12} alt="email" />
              </div>
              <div className="cursor-default">
                <p className="text-xs font-normal">Webex Starship</p>
                <p className="text-[10px] text-light-gray">charlie@webex.com</p>
              </div>
            </div>

            <div className="flex items-center cursor-pointer">
              <Image src={downward_arrow} width={7} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

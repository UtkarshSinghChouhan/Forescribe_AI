import logo from "../public/sidebar_assests/logo.svg";
import Image from "next/image";

import MenuButton from "./MenuButton";
import { menu_info, settings_info } from "../constants";
import insights from "../public/sidebar_assests/insights.svg";
import person from "../public/sidebar_assests/person-workspace-icon-1.svg";
import downward_arrow from "../public/sidebar_assests/downward_arrow.svg";

const Sidebar = () => {
  return (
    <>
      <div className="w-1/6 h-full sticky top-0 bottom-0 left-0">
        <div className="flex flex-col h-screen border-r-2  bg-white">
          <div className="logo w-full py-5 flex justify-center items-center border-b-2 box-border overflow-hidden">
            <Image src={logo} width={146} height={34} />
          </div>

          <div className="flex h-full flex-col justify-between items-center  pt-10">
            <div className="navigation w-full px-3">
              <MenuButton icon={insights} name={"Insights"} />
              <div className="menu pt-6">
                <p className="text-sm text-light-gray font-normal uppercase pl-5 pb-5">
                  Menu
                </p>
                {menu_info.map((obj) => {
                  const { id, name, icon } = obj;
                  return <MenuButton key={id} icon={icon} name={name} />;
                })}
              </div>
              <div className="settings pt-6">
                <p className="text-sm text-light-gray font-normal uppercase pl-5 pb-5">
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
                <div className="flex justify-center items-center w-8 h-8 bg-[#8B3DFF] rounded-[3px]">
                  <Image src={person} width={16} height={16} />
                </div>
                <div>
                  <p className="text-base font-normal">Webex Starship</p>
                  <p className="text-xs text-light-gray">charlie@webex.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <Image src={downward_arrow} width={10} height={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

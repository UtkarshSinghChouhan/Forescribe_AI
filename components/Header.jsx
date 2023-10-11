import Image from "next/image";
import header_left_arrow from "../public/header_assets/header_left_arrow.svg";
import invite_member from "../public/header_assets/invite_member.svg";
import notification from "../public/header_assets/notification.svg";
import profile_image from "../public/header_assets/profile_image.svg";
import downward_arrow from "../public/sidebar_assests/downward_arrow.svg";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div className="header flex  justify-between items-center px-7 py-[11.5px] border-b-2 sticky top-0 z-10 bg-white">
        <div className="left flex gap-8 items-center">
          <div className="cursor-pointer">
            <Image src={header_left_arrow} width={20} alt="left_arrow" />
          </div>

          <SearchBar />
        </div>
        <div className="right flex gap-3 items-center justify-evenly h-full">
          <div className="flex gap-[10px] bg-[#F6F0FF] px-5 py-2 rounded-md cursor-pointer">
            <Image src={invite_member} width={19} alt="invite_member" />
            <p className="font-normal text-xs text-[#8B3DFF]">Invite members</p>
          </div>
          <div className="cursor-pointer">
            <Image src={notification} width={16} alt="notification" />
          </div>
          <div className="flex gap-2 items-center">
            <Image
              className="cursor-pointer"
              src={profile_image}
              width={28}
              alt="profile_image"
            />
            <Image
              className="cursor-pointer"
              src={downward_arrow}
              width={8}
              alt="down_ward"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

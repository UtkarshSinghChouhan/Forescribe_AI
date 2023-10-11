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
      <div className="header flex  justify-between px-7 py-[13.5px] border-b-2 sticky top-0 z-10 bg-white">
        <div className="left flex gap-8 items-center">
          <div>
            <Image src={header_left_arrow} width={24} height={24} />
          </div>

          <SearchBar />
        </div>
        <div className="right flex gap-3 items-center justify-evenly h-full">
          <div className="flex gap-[10px] bg-[#F6F0FF] px-5 py-2 rounded-md">
            <Image src={invite_member} width={22} height={16} />
            <p className="font-normal text-base text-[#8B3DFF]">
              Invite members
            </p>
          </div>
          <div>
            <Image src={notification} width={18} height={25} />
          </div>
          <div className="flex gap-2 items-center">
            <Image src={profile_image} width={36} height={36} />
            <Image src={downward_arrow} width={10} height={5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

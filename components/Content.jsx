import Image from "next/image";
import Header from "./Header";
import MainContent from "./MainContent";
import message from "../public/message.svg";

const Content = ({ toggle, setToggle }) => {
  return (
    <div className="w-full h-screen overflow-y-scroll relative">
      <Header />
      <MainContent />
      <div className="flex justify-center items-center w-[80px] h-[80px] fixed right-3 bottom-0 z-30 cursor-pointer ">
        <Image src={message} width={80} alt="message" />
      </div>
    </div>
  );
};

export default Content;

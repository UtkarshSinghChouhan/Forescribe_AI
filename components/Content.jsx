import Image from "next/image";
import Header from "./Header";
import MainContent from "./MainContent";
import message from "../public/message.svg";

const Content = () => {
  return (
    <div className="w-5/6 h-screen relative">
      <Header />
      <MainContent />
      <div className="flex justify-center items-center w-[64px] h-[64px] fixed right-3 bottom-0 z-30 cursor-pointer ">
        <Image src={message} width={64} height={64} alt="message" />
      </div>
    </div>
  );
};

export default Content;

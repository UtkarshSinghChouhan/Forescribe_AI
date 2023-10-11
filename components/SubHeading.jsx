import Image from "next/image";
import React from "react";
import question_icon from "../public/mainContent_assests/question-icon.svg";

const SubHeading = ({ sub_heading }) => {
  return (
    <div className="sub_heading_1 flex gap-2">
      <h1 className="text-[#19154E]">{sub_heading}</h1>
      <Image src={question_icon} width={18} height={18} />
    </div>
  );
};

export default SubHeading;

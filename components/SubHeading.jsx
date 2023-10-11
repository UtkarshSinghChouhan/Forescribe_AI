import Image from "next/image";
import React from "react";
import question_icon from "../public/mainContent_assests/question-icon.svg";

const SubHeading = ({ sub_heading }) => {
  return (
    <div className="sub_heading_1 flex gap-2 cursor-default">
      <h1 className="text-[#19154E] text-base">{sub_heading}</h1>
      <Image
        className="cursor-pointer"
        src={question_icon}
        width={14}
        alt="question_icon"
      />
    </div>
  );
};

export default SubHeading;

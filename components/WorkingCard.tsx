import React from "react";
import Image from "next/image";

interface WorkingCardProps {
  image: string;
  text1: string;
  text2: string;
}

const WorkingCard: React.FC<WorkingCardProps> = ({ image, text1, text2 }) => {
  return (
    <div className="w-[218px] h-[216px] flex flex-col items-center justify-between text-center">
      <Image src={image} alt="icon" width={100} height={100} />
      <p className="w-[212px] h-[24px] text-[20px] leading-[25px] font-medium text-[#F0F0F0] mt-2">
        {text1}
      </p>
      <p className="w-[218px] h-[40px] text-[16px] leading-[20px] font-normal text-[#E0E0E0] mt-1">
        {text2}
      </p>
    </div>
  );
};

export default WorkingCard;

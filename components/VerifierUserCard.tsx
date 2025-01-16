import React from "react";

interface VerifierUserCardProps {
  image: string;
  text1: string;
}

const VerifierUserCard: React.FC<VerifierUserCardProps> = ({
  image,
  text1,
}) => {
  return (
    <div
      className="w-[394px] h-[170px] border-t-[1.35px]  rounded-[16px] 
        bg-[radial-gradient(100%_100%_at_50%_0%,_#272436_0%,_#0B081C_50.32%,_#09061A_100%)] 
        border-[linear-gradient(180deg,_#484554_0%,_#120F22_100%)] flex flex-col justify-evenly items-start gap-2 p-4"
    >
      <img
        src={image}
        alt="User"
        width={60}
        height={60}
        className="object-contain"
      />
      <p className="w-[233px] h-[29px] text-[24px] leading-[30px] text-[#F0F0F0] font-medium">
        {text1}
      </p>
    </div>
  );
};

export default VerifierUserCard;

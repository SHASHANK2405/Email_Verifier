import React from "react";
import WorkingCard from "./WorkingCard";

const Working = () => {
  return (
    <div className="w-[884px] h-[399px] flex flex-col items-center justify-between mx-auto m-16 p-3">
      <div className="w-[514px] h-[111px] flex flex-col items-center justify-between gap-6">
        <p className="w-[382px] h-[65px] font-medium text-[58px] leading-[64px] text-[#F0F0F0] text-center">
          How it works
        </p>
        <p className="w-[513px] h-[22px] text-normal text-[18px] leading-[22px] text-[#E0E0E0] text-center">
          It's super easy to verify your email addresses with Verifier.
        </p>
      </div>
      <div className="w-[884px] h-[216px] flex justify-between">
        <WorkingCard
          image={"/assets/icon.png"}
          text1={"Upload"}
          text2={"Upload your email lists in .csv format"}
        />
        <WorkingCard
          image={"/assets/icon2.png"}
          text1={"Verify"}
          text2={"Let Verifier perform, ensuring email validity"}
        />
        <WorkingCard
          image={"/assets/icon3.png"}
          text1={"Download"}
          text2={"Download your clean and verified email list"}
        />
      </div>
    </div>
  );
};

export default Working;

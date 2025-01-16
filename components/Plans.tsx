import React from "react";
import Image from "next/image";

const Plans = () => {
  return (
    <div className="w-[1020px] h-[761px] flex flex-col items-center mx-auto p-2 gap-16">
      <div className="w-[858px] h-[111px] flex flex-col items-center justify-center gap-6 text-center">
        <p className="w-[858px] h-[65px] font-medium text-[58px] leading-[64px] text-[#F0F0F0]">
          Choose the right plan for you
        </p>
        <p className="w-[329px] h-[22px] text-normal text-[18px] leading-[22px] text-[#E0E0E0]">
          With great power comes great plans
        </p>
      </div>
      <div className="w-[1020px] h-[570px] flex justify-center items-center">
        <div
          className="w-[600px] h-[570px] gap-0 rounded-[16px] 
  bg-[linear-gradient(112.96deg,_rgba(69,_81,_116,_0.64)_0%,_rgba(33,_50,_98,_0.24)_100%)] 
  backdrop-blur-[24px] shadow-inner-[0px_0px_5px_0px_#08003F2B]"
        >
          <Image
            src="/assets/credit selector.png"
            alt="cs"
            width={600}
            height={570}
          />
        </div>
        <div
          className="w-[420px] h-[532px] gap-[28px] rounded-[16px]
  bg-[radial-gradient(191.31%_100%_at_50%_0%,_#281E38_0%,_rgba(11,_8,_28,_0.6)_100%)] 
  backdrop-blur-[12px] shadow-[1px_2px_36px_0px_#38EBEB1A] shadow-inner-[0px_0px_5px_0px_#08003F2B] flex flex-col items-start p-4 "
        >
          <p className="w-[142px] h-[24px] text-[20px] leading-[25px] font-semibold text-[#F0F0F0]">
            Monthly rates
          </p>
          <div className="w-[340px] h-[406px] flex flex-col gap-[8px] ">
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between bg-[#596793] pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 2,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.009 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 5,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.008 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 10,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.0075 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 25,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.0007 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 50,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.0007 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 100,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.0039 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 250,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.0035 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 500,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.003 USD
              </p>
            </div>
            <div className="w-[340px] h-[38px] pt-2.5 rounded-[8px] flex justify-between pl-3">
              <p className="w-[173px] h-[22px] font-medium text-[18px] leading-[22px] text-[#F0F0F0]">
                from 1,000,000/mo
              </p>
              <p className="w-[116px] h-[22px] font-medium text-[18px] leading-[22px] text-[#DDDDE1]">
                0.00225 USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

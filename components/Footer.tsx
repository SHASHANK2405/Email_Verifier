import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full h-[300px] bg-gradient-to-b from-[#1C2232] via-[#020513] to-[#020513] border-t-[1.5px] border-solid backdrop-blur-[6px] mt-16 flex justify-evenly items-center p-5"
      style={{
        borderImageSource:
          "linear-gradient(89.99deg, rgba(0, 0, 0, 0) 0.01%, #5F638B 50%, rgba(0, 0, 0, 0) 99.99%)",
      }}
    >
      <div className="w-[438px] h-[120px] flex flex-col items-start gap-3">
        <img src="/assets/Logo.png" alt="Logo" width={150} height={40} />
        <p className="w-[260px] h-[18px] text-[16px] leading-[18px] font-medium text-[#F0F0F0]">
          2024 Verifier. All rights reserved.
        </p>
        <p className="w-[438px] h-[32px] font-normal text-[14px] leading-[16px] text-[#A3A3A3]">
          All trademarks, logos, and brand names are the property of their
          respective owners.
        </p>
      </div>
      <div className="w-[400px] h-[18px] flex justify-between">
        <p className="w-[176px] h-[18px] font-medium text-[16px] leading-[18px] text-[#F0F0F0]">
          Terms and conditions
        </p>
        <p className="w-[130px] h-[18px] font-medium text-[16px] leading-[18px] text-[#F0F0F0]">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;

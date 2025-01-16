import React from "react";
import Image from "next/image";

import VerifierUserCard from "./VerifierUserCard";

const WhoUsingVerifier = () => {
  return (
    <div className="w-[1140px] h-[596px] flex flex-col gap-16 mx-auto items-center">
      <p className="w-[641px] h-[72px] text-[58px] leading-[72px] font-medium text-[#F0F0F0] z-10">
        Who is using Verifier?
      </p>

      <div className="w-[1140px] h-[444px] relative flex flex-col gap-6 items-center">
        <div
          className="w-[600px] h-[600px] absolute top-[-108px] left-[250px] backdrop-blur-[300px] z-1"
          style={{
            backgroundImage: "url('/assets/background blur2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-[1140px] h-[360px] flex gap-2 items-center z-10">
          <div className="w-[394px] h-[360px] flex flex-col gap-5 items-center">
            <VerifierUserCard
              image={"/assets/who2.png"}
              text1={"Sales and marketing teams"}
            />
            <VerifierUserCard
              image={"/assets/who3.png"}
              text1={"Software & IT companies"}
            />
          </div>
          <div
            className="w-[312px] h-[360px] p-4 rounded-[16px] border-t-[1.35px] border-solid 
            bg-[radial-gradient(100%_100%_at_50%_0%,_#272436_0%,_#0B081C_50.32%,_#09061A_100%)] 
             border-[linear-gradient(180deg,_#484554_0%,_#120F22_100%)] flex flex-col items-start gap-6"
          >
            <p className="w-[287px] h-[132px] font-semibold text-[36px] leading-[44px] text-[linear-gradient(180deg,_#EEEEEE_0%,_#808080_100%)]">
              Irreplaceable tool for businesses
            </p>
            <Image src="/assets/who1.png" alt="who1" width={60} height={60} />
            <p className="w-[209px] h-[29px] font-medium text-[24px] leading-[30px] text-[#F0F0F0]">
              Service providers
            </p>
          </div>
          <div className="w-[394px] h-[360px] flex flex-col gap-5 items-center">
            <VerifierUserCard image={"/assets/who4.png"} text1={"Recruiters"} />
            <VerifierUserCard
              image={"/assets/who5.png"}
              text1={"Backlinks outreach"}
            />
          </div>
        </div>
        <button
          className="w-[140px] h-[52px] px-[30px] py-[10px] z-10 bg-gradient-to-r from-[#2D58BD] via-[#3A78D0] to-[#1892F5] 
                    border border-t-[1px] 
                    border-[rgba(122,167,234,1)] 
                    backdrop-blur-[8px] shadow-[0px_0px_28px_-1px_#58DAF247] 
                    rounded-[12px] text-white text-[20px] font-semibold"
        >
          Dive in!
        </button>
      </div>
    </div>
  );
};

export default WhoUsingVerifier;

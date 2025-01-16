import React from "react";

const ActionSection = () => {
  return (
    <div className="w-[743px] h-[272px] relative flex flex-col items-center mx-auto gap-10">
      <div
        className="w-[341px] h-[341px] absolute top-[-88px] left-[200px] backdrop-blur-[300px] z-[-1]"
        style={{
          backgroundImage: "url('/assets/background blur2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="w-[610px] h-[152px] text-[74px] font-montserrat font-semibold leading-[76px] text-center text-gradient-to-b from-[#EBEBEB] to-[#A3A3A3] inline-block">
        TrySee Verifier in action
      </p>
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
  );
};

export default ActionSection;

import React from "react";

const VerifierUser = () => {
  return (
    <div>
      <div className="w-[700px] h-[82px] flex flex-col items-center gap-[40px] m-8 mx-auto">
        <p className="text-center text-[#E0E0E0] text-[24px] font-normal leading-[30px] tracking-[0.02em] decoration-skip-ink">
          Modern companies are using{" "}
          <span className="text-center text-[#E0E0E0] font-semibold text-[24px] leading-[30px]">
            Verifiers
          </span>
        </p>
        <div className="w-[1080px] h-[44px] flex justify-between">
          <div className="flex justify-between">
            <img
              src="/assets/Frame.png"
              alt="Frame"
              width={24} // Set width to 1060px
              height={24} // Set height to 300px
              className="object-cover" // This ensures the img covers the container without distortion
            />
            <img
              src="/assets/logo 1.png"
              alt="logo 1"
              width={204} // Set width to 1060px
              height={24} // Set height to 300px
              className="object-cover" // This ensures the img covers the container without distortion
            />
          </div>

          <img
            src="/assets/logo 2.png"
            alt="logo 2"
            width={150} // Set width to 1060px
            height={24} // Set height to 300px
            className="object-cover" // This ensures the img covers the container without distortion
          />
          <img
            src="/assets/logo 3.png"
            alt="logo 3"
            width={83} // Set width to 1060px
            height={34} // Set height to 300px
            className="object-cover" // This ensures the img covers the container without distortion
          />
          <img
            src="/assets/logo 4.png"
            alt="logo 4"
            width={46} // Set width to 1060px
            height={29} // Set height to 300px
            className="object-cover" // This ensures the img covers the container without distortion
          />
          <img
            src="/assets/logo 5.png"
            alt="logo 5"
            width={61} // Set width to 1060px
            height={33} // Set height to 300px
            className="object-cover" // This ensures the img covers the container without distortion
          />
        </div>
      </div>
    </div>
  );
};

export default VerifierUser;

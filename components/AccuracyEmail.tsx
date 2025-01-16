import React from "react";

const AccuracyEmail = () => {
  return (
    <div className="w-[1200px] h-[1539px] flex flex-col relative mb-16">
      {/* Background Blur 2 */}
      <div
        className="w-[1000px] h-[1000px] absolute top-[-108px] left-[100px] backdrop-blur-[300px] z-0"
        style={{
          backgroundImage: "url('/assets/background blur2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Background Blur 3 with Text Content */}
      <div
        className="w-[2830px] h-[1415px] absolute top-[176px] left-[-775px] z-1 flex justify-center backdrop-blur-[300px]"
        style={{
          backgroundImage: "url('/assets/background blur3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#09061A",
        }}
      >
        {/* Text Content on Background Blur 3 */}
        <div className="w-[1094px] h-[1253px] flex flex-col items-center gap-16 mt-20">
          <div className="w-[905px] h-[176px] flex flex-col items-center justify-center gap-6 text-center">
            <p className="w-[905px] h-[130px] font-medium text-[58px] leading-[64px] text-[#F0F0F0]">
              World’s most accurate email verifier and validator online
            </p>
            <p className="w-[505px] h-[22px] text-normal text-[18px] leading-[22px] text-[#E0E0E0]">
              Clean and validate your email addresses in just one click
            </p>
          </div>
          <div className="w-[1094px] h-[1011px] flex justify-between">
            <div className="w-[989px] h-[485px] flex  justify-evenly">
              <div className="w-[500px] h-[376px] flex flex-col justify-evenly items-start">
                <div className="w-[500px] h-[376px] flex flex-col justify-evenly py-8 gap-8 items-start">
                  <div className="w-[267px] h-[30px] flex justify-between">
                    <img
                      src="/assets/icon4.png"
                      alt="icon4"
                      width={30}
                      height={30}
                    />
                    <p className="w-[217px] h-[30px] font-normal text-[24px] leading-[30px] text-[#C2C2C2]">
                      Bulk email verifier
                    </p>
                  </div>
                  <p className="w-[407px] h-[30px] text-[24px] leading-[30px] font-semibold text-[#E0E0E0]">
                    Verify your email lists effortlessly
                  </p>
                  <p className="w-[500px] h-[40px] font-normal text-[16px] leading-[20px] text-[#E0E0E0]">
                    Use the bulk email verifier to improve email deliverability
                    and sender reputation.
                  </p>
                  <div className="w-[215px] h-[100px] flex flex-col gap-5 ">
                    <div className="w-[215px] h-[20px] flex gap-3">
                      <img
                        src="/assets/SUCCESS.png"
                        alt="SUCCESS"
                        width={18}
                        height={18}
                      />
                      <p className="w-[215px] h-[20px] text-[16px] leading-[20px] font-normal text-[#E0E0E0]">
                        Remove wrong emails
                      </p>
                    </div>
                    <div className="w-[215px] h-[20px] flex gap-3">
                      <img
                        src="/assets/SUCCESS.png"
                        alt="SUCCESS"
                        width={18}
                        height={18}
                      />
                      <p className="w-[179px] h-[20px] text-[16px] leading-[20px] font-normal text-[#E0E0E0]">
                        Avoid spam traps
                      </p>
                    </div>
                    <div className="w-[215px] h-[20px] flex gap-3">
                      <img
                        src="/assets/SUCCESS.png"
                        alt="SUCCESS"
                        width={18}
                        height={18}
                      />
                      <p className="w-[179px] h-[20px] text-[16px] leading-[20px] font-normal text-[#E0E0E0]">
                        Reduce bounces
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-[140px] h-[52px] px-[30px] py-[10px] bg-gradient-to-r from-[#2D58BD] via-[#3A78D0] to-[#1892F5] 
                    border border-t-[1px] 
                    border-[rgba(122,167,234,1)] 
                    backdrop-blur-[8px] shadow-[0px_0px_28px_-1px_#58DAF247] 
                    rounded-[12px] text-white text-[20px] font-semibold"
                  >
                    Dive in!
                  </button>
                </div>
              </div>
              <img
                src="/assets/accurate.png"
                alt="accurate"
                width={421}
                height={445}
              />
            </div>
          </div>
          <div className="w-[1094px] h-[1011px] flex justify-between">
            {/* <div className="w-[989px] h-[485px] flex  justify-evenly"> */}
            <img
              src="/assets/accurate2.png"
              alt="accurate2"
              width={421}
              height={445}
            />
            <div className="w-[500px] h-[376px] flex flex-col justify-evenly items-start">
              <div className="w-[500px] h-[376px] flex flex-col justify-evenly py-8 gap-8 items-start">
                <div className="w-[309px] h-[30px] flex justify-between">
                  <img
                    src="/assets/icon4.png"
                    alt="icon5"
                    width={30}
                    height={30}
                  />
                  <p className="w-[259px] h-[30px] font-normal text-[24px] leading-[30px] text-[#C2C2C2]">
                    Email Verification API
                  </p>
                </div>
                <p className="w-[500px] h-[60px] text-[24px] leading-[30px] font-semibold text-[#E0E0E0]">
                  Prevent inaccurate data with real-time email validation{" "}
                </p>
                <p className="w-[500px] h-[40px] font-normal text-[16px] leading-[20px] text-[#E0E0E0]">
                  Guard your system against inaccurate data by instantly
                  filtering out invalid addresses!
                </p>
                <div className="w-[464px] h-[100px] flex flex-col gap-5 ">
                  <div className="w-[464px] h-[20px] flex gap-3">
                    <img
                      src="/assets/SUCCESS.png"
                      alt="SUCCESS"
                      width={18}
                      height={18}
                    />
                    <p className="w-[464px] h-[40px] text-[16px] leading-[20px] font-normal text-[#E0E0E0]">
                      Elegant and secure HTTPS-based RESTful API, with JSON as
                      its core data format
                    </p>
                  </div>
                  <div className="w-[464px] h-[20px] flex gap-3">
                    <img
                      src="/assets/SUCCESS.png"
                      alt="SUCCESS"
                      width={18}
                      height={18}
                    />
                    <p className="w-[464px] h-[20px] text-[16px] leading-[20px] font-normal text-[#E0E0E0]">
                      Validate emails before they enter your database{" "}
                    </p>
                  </div>
                  <div className="w-[464px] h-[20px] flex gap-3">
                    <img
                      src="/assets/SUCCESS.png"
                      alt="SUCCESS"
                      width={18}
                      height={18}
                    />
                    <p className="w-[464px] h-[20px] text-[16px] leading-[20px] font-normal text-[#E0E0E0]">
                      Integrate the Verifier's real-time API into your website's
                      registration process.{" "}
                    </p>
                  </div>
                </div>
                <button
                  className="w-[140px] h-[52px] px-[30px] py-[10px] bg-gradient-to-r from-[#2D58BD] via-[#3A78D0] to-[#1892F5] 
                    border border-t-[1px] 
                    border-[rgba(122,167,234,1)] 
                    backdrop-blur-[8px] shadow-[0px_0px_28px_-1px_#58DAF247] 
                    rounded-[12px] text-white text-[20px] font-semibold"
                >
                  Dive in!
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccuracyEmail;

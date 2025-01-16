"use client";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [verifying, setVerifying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (verifying && progress < 100) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(timer);
            setVerifying(false);
            return 100;
          }
        });
      }, 20);
    }
    return () => clearInterval(timer);
  }, [verifying, progress]);

  useEffect(() => {
    if (progress === 100) {
      const modalTimeout = setTimeout(() => {
        setShowModal(true);
      });

      return () => clearTimeout(modalTimeout);
    }
  }, [progress]);

  const handleVerify = () => {
    if (email) {
      setVerifying(true);
      setProgress(0);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-[85px] gap-5 mb-6 pb-10">
      <p className="w-[682px] h-[148px] text-[72px] font-montserrat font-semibold leading-[74px] text-center text-gradient-to-b from-[#EBEBEB] to-[#A3A3A3] inline-block">
        Email Checker <br />
        <span className="font-normal"> and</span> Verifier
      </p>
      <p className="w-[544px] h-[60px] text-[#E0E0E0] text-[18px] font-[400] leading-[30px] text-center font-montserrat my-3">
        Reduce bounce rate and improve your email marketing performance with our
        verifier.
      </p>

      {!showModal && !verifying && (
        <div className="flex relative">
          <input
            type="email"
            placeholder="Enter an email to verify"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-[602px] h-[64px] px-[28px] py-[6px] bg-gradient-to-r from-[#45588FCC] via-[#303B61CC] to-[#272A49CC] 
               border rounded-[18px] border-t-[1px]
               border-[rgba(51,40,144,1)] 
               backdrop-blur-[8px] shadow-[0px_4px_28px_-1px_#58DAF238] 
               text-white placeholder-white outline-none"
          />
          <button
            onClick={handleVerify}
            className="w-[124px] h-[52px] px-[30px] py-[10px] bg-gradient-to-r from-[#2D58BD] via-[#3A78D0] to-[#1892F5] 
               border border-t-[1px] 
               border-[rgba(122,167,234,1)] 
               backdrop-blur-[8px] shadow-[0px_0px_28px_-1px_#58DAF247] 
               rounded-[12px] text-white text-[20px] font-semibold absolute top-[6px] right-[6px]"
          >
            Verify
          </button>
        </div>
      )}

      {verifying && (
        <>
          <p className="w-[278px] h-[20px] font-normal text-[16px] leading-[20px] text-center text-[#E0E0E0]">
            Verifying your email in real time
          </p>
          <div
            className="relative w-[380px] h-[10px] rounded-l-[40px] 
                bg-gradient-to-b from-[#280e42b6] to-[#221d47] backdrop-blur-[12px] 
                shadow-[inset_0px_0px_7px_0px_#FFFFFF47,0px_2px_36px_4px_#38EBEB47]"
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full rounded-l-[40px] bg-gradient-to-r from-[#2B70B5] via-[#1575E9] to-[#2EC2F1]"
            ></div>
          </div>
        </>
      )}

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setVerifying(false);
          }}
        />
      )}
    </div>
  );
};

export default HeroSection;

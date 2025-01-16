import React from "react";
import ListItem from "./ListItem";

const EmailList = () => {
  return (
    <div className="w-[1140px] h-[1298] flex mx-auto mt-4">
      <div className="w-[308px] h-[334] flex flex-col gap-5 mt-6 items-start">
        <p className="w-[318px] h-[174px] text-[52px] leading-[59px] font-medium text-[#F0F0F0]">
          Rock solid email verification
        </p>
        <p className="w-[287px] h-[44px] text-[18px] font-normal leading-[22px] text-[#E0E0E0]">
          Clean, optimize, and supercharge your email lists.
        </p>
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
      <div className="w-[802px] h-[1298px] grid grid-cols-3 grid-rows-4 gap-4">
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
        <ListItem
          image={"/assets/one.png"}
          text1={"Disposable email detection"}
          text2={
            "Verifier detects & removes temp emails for a clean, reliable list."
          }
        />
      </div>
    </div>
  );
};

export default EmailList;

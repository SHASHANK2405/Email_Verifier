"use client";

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; // Importing Icons

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionItemProps {
  id: number;
  question: string;
  answer: string;
  open: number | null;
  setOpen: React.Dispatch<React.SetStateAction<number | null>>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  open,
  setOpen,
}) => {
  const isOpen = open === id;

  return (
    <div className="rounded-lg flex flex-col mb-4">
      <button
        className="w-[1140px] h-[100px] flex items-center justify-between px-6 
          rounded-[20px] bg-[linear-gradient(112.96deg,_#30273D_0%,_rgba(18,_18,_24,_0.4)_100%)] 
          backdrop-blur-[24px] 
          shadow-[1px_2px_8px_0px_#0000003D] shadow-inner-[0px_0px_5px_0px_#08003F2B] 
          border-[linear-gradient(214.23deg,_rgba(75,_82,_102,_0.6)_0%,_rgba(33,_48,_92,_0.2)_100%)] 
          text-left text-white text-lg font-medium"
        onClick={() => setOpen(isOpen ? null : id)}
      >
        <span>{question}</span>
        <span className="text-2xl font-bold text-[#616161]">
          {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
        </span>
      </button>

      {isOpen && (
        <div
          className="w-[1140px] h-[248px] gap-28 border-t-[1.5px] border-t-[#2e2e2e] 
            rounded-b-[20px] bg-[linear-gradient(112.96deg,_#1B1329_0%,_rgba(13,_13,_20,_0.4)_100%)] 
            border-[linear-gradient(214.23deg,_rgba(75,_82,_102,_0.6)_0%,_rgba(33,_48,_92,_0.2)_100%)] 
            backdrop-blur-[24px] box-shadow-[1px_2px_8px_0px_#0000003D] 
            shadow-inner-[0px_0px_5px_0px_#08003F2B] p-6 text-white mt-[-15px]"
        >
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question:
        "How is the Verifier different from other email verifier tools?",
      answer: `BrandNav Verifier stands out for several reasons:<br/><br/>
               Accuracy: Our advanced algorithms ensure precise email verification.<br/>
               Efficiency: Fast processing for large email lists, saving you time.<br/>
               User-Friendly: Easy-to-use interface makes verification hassle-free.<br/>
               Data Security: Your information is handled with the utmost security.<br/>
               Support: Responsive customer support to assist you at any step.<br/><br/>
               Don’t just take our word for it, checkout our G2 reviews we’re rated 4.8/5 by users.`,
    },
    {
      id: 2,
      question: "What does it mean when an email address is valid?",
      answer:
        "A valid email address means the address exists, and the domain is configured to accept emails.",
    },
    {
      id: 3,
      question: "What does it mean when an email address is unknown?",
      answer:
        "An unknown email means that the system was unable to determine its validity due to issues such as incorrect formatting or DNS configuration.",
    },
    {
      id: 4,
      question: "What does it mean when an email address is invalid?",
      answer:
        "An invalid email address means the address doesn't exist or cannot receive emails due to issues like non-existent domain or server problems.",
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col py-16">
      <div className="w-full flex flex-col items-center gap-14 mb-10">
        <div className="w-[815px] h-[65px] flex flex-col">
          <p className="w-[815px] h-[65px] text-[58px] font-semibold leading-[65px] text-center text-[#F0F0F0]">
            Frequently Ask Questions
          </p>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[rgba(18,16,41,0.68)] to-[rgba(29,62,82,0.32)]
                   backdrop-blur-[24px]"
        onClick={onClose}
      ></div>

      <div
        className="relative w-full max-w-[740px] h-[350px] rounded-[32px] border-[1.5px] border-solid 
                   bg-gradient-to-br from-[rgba(15,12,67,0.44)] to-[rgba(63,61,133,0.64)]
                   border-image-[linear-gradient(214.23deg,rgba(163,186,255,0.6)_0%,rgba(42,61,118,0.2)_100%)]
                   backdrop-blur-[52px] shadow-[0px_2px_36px_-4px_#38EBEB33,0px_0px_5px_0px_#08003F2B_inset] 
                   p-6 z-10 flex flex-col items-center justify-center"
      >
        <div className="w-[600px] h-[135px] flex items-center gap-16 py-16">
          <div className="w-[429px] h-[200px] flex flex-col items-start gap-6">
            <p className="w-[402px] h-[65px] font-medium text-[58px] leading-[65px] text-[#F0F0F0]">
              One last step!
            </p>
            <p className="w-[429px] h-[54px] text-[18px] leading-[27px] font-normal text-[#E0E0E0]">
              Make sure to sign up before you get your result. We promise in
              won’t take long.
            </p>
            <button
              className="w-[199px] h-[62px] py-[10px] bg-gradient-to-r from-[#2D58BD] via-[#3A78D0] to-[#1892F5] 
               border border-t-[1px] 
               border-[rgba(122,167,234,1)] 
               backdrop-blur-[8px] shadow-[0px_0px_28px_-1px_#58DAF247] 
               rounded-[12px] text-white text-[20px] font-semibold"
            >
              Take me in
            </button>
          </div>
          <img src="/assets/Group .png" alt="Group" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

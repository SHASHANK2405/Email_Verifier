import React from "react";

// Define the types for the props
interface ListItemProps {
  image: string;
  text1: string;
  text2: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, text1, text2 }) => {
  return (
    <div
      className="w-[254px] h-[292px] p-[48px_18px] gap-[28px] rounded-[16px] 
    bg-[radial-gradient(191.31%_100%_at_50%_0%,_#281E38_0%,_rgba(11,_8,_28,_0.6)_100%)] 
    border-[linear-gradient(214.23deg,_rgba(57,_62,_77,_0.6)_0%,_rgba(33,_48,_92,_0.2)_100%)] 
    backdrop-blur-[12px] shadow-[1px_2px_8px_0px_#0000003D] shadow-inner-[0px_0px_5px_0px_#08003F2B] flex flex-col items-start justify-evenly my-6"
    >
      <img src={image} alt={image} width={50} height={50} />
      <p className="w-[218px] h-[48px] font-medium text-[20px] leading-[25px] text-[#F0F0F0]">
        {text1}
      </p>
      <p className="w-[218px] h-[54px] font-normal text-[15px] leading-[19px] text-[#E0E0E0]">
        {text2}
      </p>
    </div>
  );
};

export default ListItem;

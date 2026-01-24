import Image from "next/image";
import React from "react";

interface CategoryTagProps {
  icon: string;
  label: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ icon, label }) => {
  return (
    <div className="tag-pill flex items-center bg-white gap-1 px-2 py-2 rounded-full text-sm font-medium text-foreground transition-all hover:scale-105 cursor-pointer">
      <Image src={icon} alt="icon" width={20} height={20} />
      <span className="font-poppins  text-[13px] font-medium ">{label}</span>
    </div>
  );
};

export default CategoryTag;

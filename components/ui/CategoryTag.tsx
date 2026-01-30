import Image from "next/image";
import React from "react";

interface CategoryTagProps {
  icon: string;
  label: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ icon, label }) => {
  return (
    <div className="tag-pill flex items-center border border-red-300 bg-white gap-0.5 px-3 py-1 rounded-full text-sm font-medium text-foreground transition-all cursor-pointer">
      <Image src={icon} alt="icon" width={20} height={20} />
      <span className="font-poppins  text-[10px] font-medium ">{label}</span>
    </div>
  );
};

export default CategoryTag;

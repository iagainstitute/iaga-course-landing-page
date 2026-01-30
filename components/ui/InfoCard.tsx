import React from "react";

interface InfoCardProps {
  value: string;
  label: string;
  originalValue?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ value, label, originalValue }) => {
  return (
    <div
      className="
      flex-1 flex flex-col items-center justify-center
      py-1 px-4 rounded-2xl min-w-[140px]
      bg-white/1 backdrop-blur-[0px]
      border-t border-r  border-l border-pink-100  
    "
    >
      {originalValue && (
        <span className="text-sm md:text-2xl font-bold font-display text-white">
          <s>{originalValue}</s>
        </span>
      )}
      <span className="text-sm md:text-3xl font-bold font-display text-white">
        {value}
      </span>
      <span className="text-md md:text-sm text-white ">{label}</span>
    </div>
  );
};

export default InfoCard;

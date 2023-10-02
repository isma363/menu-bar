import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Labels = [
  {
    name: "Frutales",
  },
  {
    name: "Clasicos",
  },
];

function Tabs() {
  return (
    <div className="text-background cursor-pointer">
      {Labels.map((label, index) => (
        <div
          key={index}
          className="bg-yellow h-7 flex  items-center uppercase  mb-3 font-bold text-lg mx-4"
        >
          <p className="w-full text-center">{label.name}</p>
          <RiArrowDownSLine size={24} className="mr-3 " />
        </div>
      ))}
    </div>
  );
}

export default Tabs;

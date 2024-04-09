import React, { ComponentType, SetStateAction, Dispatch } from "react";
import { data } from "../dummyData";
interface CardProps {
  color: string;
  icon: ComponentType<{}>;
  name: string;
  iconColor: string;
  dataArray: any[];
  setDataArray: Dispatch<SetStateAction<any[]>>;
  index: number;
  toggler: boolean;
  setToggler: Dispatch<SetStateAction<boolean>>;
  sender: string;
  ansArray: any[];
  setAnsArray: Dispatch<SetStateAction<any[]>>;
  isRemoved: boolean;
  clickDisable: boolean;
  clickActive: boolean;
  setClickActive: Dispatch<SetStateAction<boolean>>;
}

export const Card = ({
  color,
  icon: Icon,
  name,
  iconColor,
  dataArray,
  setDataArray,
  index,
  toggler,
  setToggler,
  sender,
  setAnsArray,
  ansArray,
  isRemoved,
  clickDisable,
  clickActive,
  setClickActive,
}: CardProps) => {
  const handleClick = () => {

    if (
      (sender === "left" && clickActive === true) ||
      (sender === "right" && clickActive === false) ||
      (isRemoved === true)
    ) {
      return;
    }

    if (clickDisable) {
      return;
    }

    if (!toggler && sender !== "left") {
      return;
    }

    let tempArray: data[] = [...dataArray];

    tempArray[index].isVisited = !tempArray[index].isVisited;

    setDataArray(tempArray);

    setToggler(!toggler);

    setClickActive(clickActive=>!clickActive);

    let tempAns: data[] = [...ansArray];
    tempAns.push(dataArray[index]);

    setAnsArray(tempAns);

    return;
  };

  return (
    <div
      className={`h-[14rem] w-[10rem] ${color} rounded-xl flex justify-center items-center ${!isRemoved ? "cursor-pointer" : ""} ${
        isRemoved ? `opacity-0` : `opacity-1`
      }`}
      onClick={handleClick}
    >
      <div className={` text-[5rem] ${iconColor}`}>
        {sender === "right" && name !== "" ? name : <Icon />}
      </div>
    </div>
  );
};

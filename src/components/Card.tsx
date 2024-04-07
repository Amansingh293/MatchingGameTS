import React, { ComponentType, SetStateAction, Dispatch } from "react";

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
  isRemoved: boolean
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
  isRemoved
}: CardProps) => {
  const handleClick = () => {
    if (!toggler && sender !== "left") {

      return;
    }

    let tempArray: any[] = [...dataArray];

    tempArray[index].isVisited = !tempArray[index].isVisited;

    setDataArray(tempArray);

    setToggler(!toggler);

    let tempAns: any[] = [...ansArray];
    tempAns.push(dataArray[index]);

    setAnsArray(tempAns);

    return;
  };

  return (
    <div
      className={`h-[14rem] w-[10rem] ${color} rounded-xl flex justify-center items-center cursor-pointer ${isRemoved ? `hidden`: `flex`}`}
      onClick={handleClick}
    >
      <div className={` text-[5rem] ${iconColor}`}>
        {sender === "right" && name !== "" ? name : <Icon />}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { leftDataArray, rightDataArray, mapper } from "../dummyData";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { Card } from "../components/Card";
import { FaHeart } from "react-icons/fa6";
import { Console } from "console";
import { WinnerSvg } from "../iconsSvg/WinnerSvg";
import { Banana } from "../iconsSvg/Banana";
import { GameOver } from "../components/GameOver";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const Game = () => {
  const [leftArray, setLeftArray] = useState<any[]>(leftDataArray);
  const [rightArray, setRightArray] = useState<any[]>(rightDataArray);

  const [toggler, setToggler] = useState<boolean>(false);

  let [ansArray, setAnsArray] = useState<any[]>([]);
  console.log(ansArray);

  const [finish, setFinish] = useState(leftArray.length);

  const [chancesLeft, setChancesLeft] = useState(10);

  useEffect(() => {
    if (ansArray.length === 2) {
      if (mapper[ansArray[1].name] == ansArray[0].icon) {
        setTimeout(() => {
          let tempLeft: any[] = [...leftArray];
          let leftIndex = tempLeft.findIndex((item) => item === ansArray[0]);
          if (leftIndex !== -1) {
            tempLeft[leftIndex].isRemoved = true;
          }
          let tempRight: any[] = [...rightArray];
          let rightIndex = tempRight.findIndex((item) => item === ansArray[1]);
          if (rightIndex !== -1) {
            tempRight[rightIndex].isRemoved = true;
          }

          setLeftArray(tempLeft);
          setRightArray(tempRight);
          setFinish((finish) => finish - 1);
        }, 1000);
      } else {
        console.log(
          mapper[ansArray[1].name] == ansArray[0].icon,
          mapper[ansArray[1].name],
          ansArray[0].icon
        );
        setTimeout(() => {
          let tempLeftArray: any[] = [...leftArray];
          tempLeftArray.forEach((obj) => (obj.isVisited = false));

          let shuffledLeftArray: any[] = shuffleArray(tempLeftArray);

          let tempRightArray: any[] = [...rightArray];
          tempRightArray.forEach((obj) => (obj.isVisited = false));

          let shuffledRightArray: any[] = shuffleArray(tempRightArray);
          setLeftArray(shuffledLeftArray);
          setRightArray(shuffledRightArray);
        }, 2000);
      }
      setAnsArray([]);
      setChancesLeft((chancesLeft) => chancesLeft - 1);
    }
  }, [ansArray]);
  return (
    <>
      {chancesLeft <= 1 ? (
        <GameOver />
      ) : (
        <div className="flex flex-col h-full w-full p-8">
          {finish === 0 ? (
            <div className="flex flex-col md:flex-row justify-center items-center h-full w-full">
              <div className="flex flex-col w-[30%] items-end justify-center">
                <Banana className="w-[7rem] h-[7rem]" />
                <Banana className="w-[7rem] h-[7rem]" />
                <Banana className="w-[7rem] h-[7rem]" />
                <Banana className="w-[7rem] h-[7rem]" />
              </div>
              <WinnerSvg />
              <div className="flex flex-col w-[30%] items-start justify-center">
                <Banana className="w-[7rem] h-[7rem]" />
                <Banana className="w-[7rem] h-[7rem]" />
                <Banana className="w-[7rem] h-[7rem]" />
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <BackButtonSvg className="" navigateId={4} />
                <div className="p-2 rounded-xl bg-yellow-500 flex justify-center items-center text-[3rem]">
                  Chances Left = {chancesLeft}
                </div>
              </div>
              <div className="flex justify-between items-center p-4">
                <div className="w-[40%] h-full flex flex-wrap gap-6 justify-center">
                  {leftArray &&
                    leftArray.map((obj, i) => {
                      return (
                        <Card
                          key={i}
                          color="bg-pink-100"
                          icon={obj.isVisited ? obj.icon : FaHeart}
                          name=""
                          iconColor={obj.isVisited ? obj.color : "text-red-600"}
                          setDataArray={setLeftArray}
                          dataArray={leftArray}
                          index={i}
                          toggler={toggler}
                          setToggler={setToggler}
                          sender="left"
                          ansArray={ansArray}
                          setAnsArray={setAnsArray}
                          isRemoved={obj.isRemoved}
                        />
                      );
                    })}
                </div>
                <div className="w-[40%] h-full flex flex-wrap gap-6 justify-center">
                  {rightArray &&
                    rightArray.map((obj, i) => {
                      return (
                        <Card
                          key={i}
                          color="bg-blue-300"
                          name={obj.isVisited ? obj.name : ""}
                          icon={FaHeart}
                          iconColor="text-red-600"
                          setDataArray={setRightArray}
                          dataArray={rightArray}
                          index={i}
                          toggler={toggler}
                          setToggler={setToggler}
                          sender="right"
                          ansArray={ansArray}
                          setAnsArray={setAnsArray}
                          isRemoved={obj.isRemoved}
                        />
                      );
                    })}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

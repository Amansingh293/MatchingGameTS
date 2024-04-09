import React, { useEffect, useState } from "react";
import { dataArray, data, mapper } from "../dummyData";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { Card } from "../components/Card";
import { FaHeart } from "react-icons/fa6";
import { WinnerSvg } from "../iconsSvg/WinnerSvg";
import { Banana } from "../iconsSvg/Banana";
import { GameOver } from "../components/GameOver";

function shuffleArray(array: data[]): data[] {
  let filteredArray = array.filter((obj) => obj.isRemoved === false);

  for (let i = filteredArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredArray[i], filteredArray[j]] = [filteredArray[j], filteredArray[i]];
  }

  let i: number = 0,
    j = 0;

  while (i < array.length && j < filteredArray.length) {
    if (!array[i].isRemoved) {
      array[i] = filteredArray[j];
      j++;
    }
    i++;
  }
  return array;
}

function deepCopyArray(arr: any[]): any[] {
  return arr.map((item) => ({ ...item }));
}

export const Game = () => {
  const [leftArray, setLeftArray] = useState<data[]>(deepCopyArray(dataArray));
  const [rightArray, setRightArray] = useState<data[]>(
    deepCopyArray(dataArray)
  );

  const [toggler, setToggler] = useState<boolean>(false);

  let [ansArray, setAnsArray] = useState<data[]>([]);

  const [finish, setFinish] = useState<number>(leftArray.length);

  const [chancesLeft, setChancesLeft] = useState<number>(7);

  const [clickDisable, setClickDisable] = useState<boolean>(false);

  // at false left is clickable and at true right is clickable

  const [clickActive, setClickActive] = useState<boolean>(false);

  useEffect(() => {
    if (finish === 0 || chancesLeft === 0) {
      console.log("clicked");
      setLeftArray(deepCopyArray(dataArray));
      setRightArray(deepCopyArray(dataArray));
      console.log(dataArray);
      return;
    }

    if (ansArray.length === 2) {
      setClickDisable(true);
      // eslint-disable-next-line
      if (mapper[ansArray[1].name] == ansArray[0].icon) {
        setTimeout(() => {
          let tempLeft: data[] = [...leftArray];
          let leftIndex = tempLeft.findIndex((item) => item === ansArray[0]);
          if (leftIndex !== -1) {
            tempLeft[leftIndex].isRemoved = true;
          }
          let tempRight: data[] = [...rightArray];
          let rightIndex = tempRight.findIndex((item) => item === ansArray[1]);
          if (rightIndex !== -1) {
            tempRight[rightIndex].isRemoved = true;
          }

          setLeftArray(tempLeft);
          setRightArray(tempRight);
          setClickDisable(false);
        }, 1400);
        setFinish((finish) => finish - 1);
      } else {
        setTimeout(() => {
          let tempLeftArray: data[] = [...leftArray];
          tempLeftArray.forEach((obj) => (obj.isVisited = false));

          let shuffledLeftArray: data[] = shuffleArray(tempLeftArray);

          let tempRightArray: data[] = [...rightArray];
          tempRightArray.forEach((obj) => (obj.isVisited = false));

          let shuffledRightArray: data[] = shuffleArray(tempRightArray);

          setLeftArray(shuffledLeftArray);
          setRightArray(shuffledRightArray);
          setClickDisable(false);
        }, 2000);
        setChancesLeft((chancesLeft) => chancesLeft - 1);
      }
      setAnsArray([]);
    }
    // eslint-disable-next-line
  }, [ansArray]);

  console.log(finish, "finish");

  return (
    <>
      {chancesLeft < 1 ? (
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
              <WinnerSvg className="w-[20rem] md:w-auto" />
              <div className="flex flex-col w-[30%] items-start justify-center">
                <Banana className="w-[7rem] h-[7rem]" />
                <Banana className="w-[7rem] h-[7rem]" />
                <Banana className="w-[7rem] h-[7rem]" />
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <BackButtonSvg className="w-[10rem]" navigateId={4} />
                <div className="p-2 rounded-xl bg-yellow-500 flex justify-center items-center text-[3rem]">
                  Chances Left = {chancesLeft}
                </div>
              </div>
              <div className="flex justify-between items-center p-4">
                <div className="w-[40%] h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8 md:gap-4">
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
                          clickDisable={clickDisable}
                          clickActive={clickActive}
                          setClickActive={setClickActive}
                        />
                      );
                    })}
                </div>
                <div className="w-[40%] h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4 ">
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
                          clickDisable={clickDisable}
                          clickActive={clickActive}
                          setClickActive={setClickActive}
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

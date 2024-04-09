import React from "react";
import { InstructionsCard } from "../iconsSvg/InstructionsCard";
import { InstructionsCard2 } from "../iconsSvg/InstructionsCard2";
import { LineSvg } from "../iconsSvg/LineSvg";
import { InstructionsCard3 } from "../iconsSvg/InstructionsCard3";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { PlayButtonSvg } from "../iconsSvg/PlayButtonSvg";

export const Instructions = () => {
  return (
    <div className="flex flex-co justify-between h-[100vh] md:h-[98%] items-center">
      <BackButtonSvg className=" self-start cursor-pointer h-[7rem] w-[7rem]" navigateId={3} />
      <div className="flex w-full flex-col md:flex-row md:gap-10  h-fit justify-evenly items-center">
        <InstructionsCard className="h-[16rem] w-[10rem] lg:h-[22rem] lg:w-[15rem]"/>
        <InstructionsCard2 className="h-[16rem] w-[10rem] lg:h-[22rem] lg:w-[15rem]"/>
        <InstructionsCard3 className="h-[16rem] w-[10rem] lg:h-[22rem] lg:w-[15rem]"/>
      </div>
      <PlayButtonSvg className="self-end w-[18rem]" navigateId={5} />
    </div>
  );
};

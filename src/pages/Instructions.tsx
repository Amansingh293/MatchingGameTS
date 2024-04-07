import React from "react";
import { InstructionsCard } from "../iconsSvg/InstructionsCard";
import { InstructionsCard2 } from "../iconsSvg/InstructionsCard2";
import { LineSvg } from "../iconsSvg/LineSvg";
import { InstructionsCard3 } from "../iconsSvg/InstructionsCard3";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { PlayButtonSvg } from "../iconsSvg/PlayButtonSvg";

export const Instructions = () => {
  return (
    <div className="flex flex-co justify-between h-full items-center">
      <BackButtonSvg className="" navigateId={3} />
      <div className="flex w-full flex-col lg:flex-row gap-10 h-fit justify-evenly items-center">
        <InstructionsCard className="relative z-10"/>
        <LineSvg className="absolute"/>
        <InstructionsCard2 className="relative z-10"/>
        <InstructionsCard3 className="relative z-10"/>
      </div>
      <PlayButtonSvg className="self-end" navigateId={5} />
    </div>
  );
};

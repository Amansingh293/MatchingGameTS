import React from "react";
import { MokeySvg } from "../iconsSvg/MokeySvg";
import { WelcomeSvg } from "../iconsSvg/WelcomeSvg";
import { ButtonSvg } from "../iconsSvg/ButtonSvg";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { NextButtonSvg } from "../iconsSvg/NextButtonSvg";
import { IntroSvg } from "../iconsSvg/IntroSvg";

export const Introduction1 = () => {
  return (
    <>
      <div className="monkeySvg">
        <BackButtonSvg className="pt-2 self-start cursor-pointer w-[16rem]" navigateId={0}/>
        <IntroSvg className="self-start" />
        <MokeySvg className="h-[20rem] w-[25rem] lg:w-[30rem] " />
        <NextButtonSvg className="self-end cursor-pointer w-[16rem]"  navigateId={3} />
      </div>
    </>
  );
};

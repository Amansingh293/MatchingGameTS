import React from "react";
import { MonkeySvg } from "../iconsSvg/MonkeySvg";
import { WelcomeSvg } from "../iconsSvg/WelcomeSvg";
import { ButtonSvg } from "../iconsSvg/ButtonSvg";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { NextButtonSvg } from "../iconsSvg/NextButtonSvg";
import { IntroSvg } from "../iconsSvg/IntroSvg";

export const Introduction1 = () => {
  return (
    <>
      <div className="monkeySvg">
        <BackButtonSvg className="pt-2 self-start cursor-pointer h-[7rem] w-[7rem]" navigateId={0}/>
        <IntroSvg className="self-start w-[22rem]" />
        <MonkeySvg className="h-[20rem] w-[25rem] lg:w-[30rem] " />
        <NextButtonSvg className="self-end cursor-pointer w-[15rem]"  navigateId={3} />
      </div>
    </>
  );
};

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
        <BackButtonSvg className="pt-2" navigateId={0}/>
        <IntroSvg className="self-start" />
        <MokeySvg className="h-[20rem] w-[30rem]" />
        <NextButtonSvg className="self-end cursor-pointer" navigateId={3} />
      </div>
    </>
  );
};

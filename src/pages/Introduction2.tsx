import React from "react";
import { MonkeySvg } from "../iconsSvg/MonkeySvg";
import { WelcomeSvg } from "../iconsSvg/WelcomeSvg";
import { ButtonSvg } from "../iconsSvg/ButtonSvg";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { IntroSvg2 } from "../iconsSvg/IntroSvg2";
import { YesButtonSvg } from "../iconsSvg/YesButtonSvg";

export const Introduction2 = () => {
  return (
    <>
      <div className="monkeySvg">
        <BackButtonSvg className="pt-2 self-start cursor-pointer h-[7rem] w-[7rem]" navigateId={2}/>
        <IntroSvg2 className=" self-center w-[22rem] md:w-auto" />
        <MonkeySvg className="h-[20rem] w-[20rem] lg:w-[30rem] " />
        <YesButtonSvg className="self-end cursor-pointer w-[15rem]" navigateId={4} />
      </div>
    </>
  );
};

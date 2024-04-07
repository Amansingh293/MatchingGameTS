import React from "react";
import { MokeySvg } from "../iconsSvg/MokeySvg";
import { WelcomeSvg } from "../iconsSvg/WelcomeSvg";
import { ButtonSvg } from "../iconsSvg/ButtonSvg";
import { BackButtonSvg } from "../iconsSvg/BackButtonSvg";
import { IntroSvg2 } from "../iconsSvg/IntroSvg2";
import { YesButtonSvg } from "../iconsSvg/YesButtonSvg";

export const Introduction2 = () => {
  return (
    <>
      <div className="monkeySvg">
        <BackButtonSvg className="pt-2 self-start" navigateId={2}/>
        <IntroSvg2 className=" self-center" />
        <MokeySvg className="h-[20rem] w-[30rem]" />
        <YesButtonSvg className="self-end cursor-pointer" navigateId={4} />
      </div>
    </>
  );
};

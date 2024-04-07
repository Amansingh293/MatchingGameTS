import React from "react";
import { MokeySvg } from "../iconsSvg/MokeySvg";
import { WelcomeSvg } from "../iconsSvg/WelcomeSvg";
import { ButtonSvg } from "../iconsSvg/ButtonSvg";
import { AppleSvg } from "../iconsSvg/AppleSvg";

export const Home = () => {
  return (
    <>
      <div className="monkeySvg">
        <WelcomeSvg className="" />
        <MokeySvg className="h-[20rem] w-[30rem]" />
        <ButtonSvg className="self-end cursor-pointer" navigateId={2} />
        
      </div>
    </>
  );
};

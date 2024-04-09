import React from "react";
import { MonkeySvg } from "../iconsSvg/MonkeySvg";
import { WelcomeSvg } from "../iconsSvg/WelcomeSvg";
import { ButtonSvg } from "../iconsSvg/ButtonSvg";
import { AppleSvg } from "../iconsSvg/AppleSvg";

export const Home = () => {
  return (
    <>
      <div className="monkeySvg">
        <WelcomeSvg className="self-start cursor-pointer" />
        <MonkeySvg className="h-[20rem] w-[30rem]" />
        <ButtonSvg className="self-end cursor-pointer w-[15rem]" navigateId={2} />
        
      </div>
    </>
  );
};

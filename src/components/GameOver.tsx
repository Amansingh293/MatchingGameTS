import React from "react";
import { useNavigate } from "react-router-dom";

export const GameOver = () => {

    const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-[7rem] text-[red] ">
      Game Over !!
      <button onClick={()=>navigate("/")} className="pl-4 pr-4 rounded-xl bg-yellow-500 text-[2rem] text-black "> Restart </button>
    </div>
  );
};

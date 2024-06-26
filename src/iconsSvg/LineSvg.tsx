import React from "react";

interface LineProps{
  className: string;
}
export const LineSvg = ({className} : LineProps) => {
  return (
    <svg
    className={className}
      width="1007"
      height="309"
      viewBox="0 0 1007 309"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1003.39 112.699C951.438 169.414 890.303 167.829 812.665 167.895C736.948 167.96 626.208 115.711 626.208 115.711C626.208 115.711 567.215 -5.5317 502.43 4.32029C443.007 13.3568 456.298 86.5142 412.953 127.477C373.107 165.134 350.167 195.714 295.808 205.568C241.118 215.483 212.554 166.953 157.298 173.129C30.161 187.339 4 305.5 4 305.5"
        stroke="#FFFEFF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="8 14"
      />
    </svg>
  );
};

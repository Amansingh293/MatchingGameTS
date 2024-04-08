import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  className: string;
  navigateId: number;
}

export const BackButtonSvg = ({ className, navigateId }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <svg
      className={className}
      width="194"
      height="194"
      viewBox="0 0 194 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() =>
        navigateId === 0 ? navigate(`/`) : navigate(`/${navigateId}`)
      }
    >
      <g filter="url(#filter0_ii_0_357)">
        <path
          d="M13.7696 43.987C17.6158 29.1794 29.1794 17.6158 43.987 13.7696C78.7522 4.73969 115.248 4.73969 150.013 13.7696C164.821 17.6158 176.384 29.1794 180.23 43.987C189.26 78.7522 189.26 115.248 180.23 150.013C176.384 164.821 164.821 176.384 150.013 180.23C115.248 189.26 78.7522 189.26 43.987 180.23C29.1794 176.384 17.6158 164.821 13.7696 150.013C4.73969 115.248 4.73969 78.7522 13.7696 43.987Z"
          fill="url(#paint0_linear_0_357)"
        />
      </g>
      <path
        d="M19.093 45.3697C22.4375 32.4931 32.4931 22.4375 45.3697 19.093C79.2281 10.2986 114.772 10.2986 148.63 19.093C161.507 22.4375 171.562 32.4931 174.907 45.3697C183.701 79.2281 183.701 114.772 174.907 148.63C171.562 161.507 161.507 171.562 148.63 174.907C114.772 183.701 79.2281 183.701 45.3697 174.907C32.4931 171.562 22.4375 161.507 19.093 148.63C10.2986 114.772 10.2986 79.2281 19.093 45.3697Z"
        stroke="white"
        strokeWidth="11"
        strokeLinejoin="round"
      />
      <ellipse
        cx="145.648"
        cy="42.8191"
        rx="19.4601"
        ry="7.77356"
        transform="rotate(31.6062 145.648 42.8191)"
        fill="white"
      />
      <ellipse
        cx="48.553"
        cy="142.714"
        rx="8.65002"
        ry="4.65757"
        transform="rotate(14.8094 48.553 142.714)"
        fill="white"
        fillOpacity="0.9"
      />
      <g filter="url(#filter1_d_0_357)">
        <path
          d="M93.8145 84.9833L138.958 78.4722C142.575 77.9505 145.814 80.7562 145.814 84.4107V96.6866C145.814 100.296 142.651 103.088 139.07 102.64L93.8145 96.9833V84.9833Z"
          fill="url(#paint1_linear_0_357)"
        />
        <path
          d="M94.2213 104.008C94.4364 114.27 83.4617 120.917 74.4668 115.972L50.1806 102.621C41.1857 97.6763 40.9167 84.8485 49.6965 79.5311L73.4018 65.174C82.1816 59.8566 93.4252 66.0375 93.6404 76.2998L94.2213 104.008Z"
          fill="url(#paint2_linear_0_357)"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_0_357"
          x="6.99707"
          y="-15.4028"
          width="203.006"
          height="217.406"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="23" dy="15" />
          <feGaussianBlur stdDeviation="11.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.388235 0 0 0 0 0.717647 0 0 0 0 0.00392157 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_0_357"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="27" dy="-25" />
          <feGaussianBlur stdDeviation="11.2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.373361 0 0 0 0 0.531235 0 0 0 0 0.0175931 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_0_357"
            result="effect2_innerShadow_0_357"
          />
        </filter>
        <filter
          id="filter1_d_0_357"
          x="26.4705"
          y="50.426"
          width="136.144"
          height="88.0154"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8.4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_357"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_357"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_357"
          x1="97"
          y1="0"
          x2="97"
          y2="194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#71BE00" />
          <stop offset="1" stopColor="#56B000" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_357"
          x1="120"
          y1="137.5"
          x2="118.814"
          y2="80.9833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6BBB01" stopOpacity="0.45" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_357"
          x1="73.0005"
          y1="197"
          x2="84.9539"
          y2="69.6027"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.54" stopColor="#CCFC91" stopOpacity="0.25" />
          <stop offset="0.98" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

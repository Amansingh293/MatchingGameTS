import React from "react";

interface WelcomeProps {
  className: string;
}

export const WelcomeSvg = ({ className }: WelcomeProps) => {
  return (
    <div className="relative">
      <svg
        className={className + " flex justify-center items-center w-[20rem]"}
        viewBox="0 0 576 279"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_0_80)">
          <path
            d="M38.2784 45.4375L39.2715 44.0146C39.8182 43.2313 40.4312 42.4914 41.0986 41.808C44.1388 38.6955 47.691 36.0995 51.5825 34.1537L52.1772 33.9204C56.2868 32.3089 60.662 31.4816 65.0762 31.4816H85.7844H107.294H135.484L224.729 28.2752L254.255 26.1376L277.368 24H302.618H327.869H346.44H357.128H369.152H382.913H412.438H430.341H447.442H468.818C477.844 24 486.81 25.4551 495.373 28.3093L496.874 28.8096L512.105 34.2873L523.06 39.0969L523.429 39.2626C530.663 42.5051 536.401 48.3643 539.493 55.6634C541.785 61.041 542.966 66.8264 542.966 72.6721V76.9059V88.6628V107.1V108.351C542.966 115.784 542.279 123.201 540.912 130.508L539.493 138.095L539.019 139.648C536.143 149.074 531.939 158.044 526.533 166.285L522.726 172.43L519.051 178.362C518.963 178.504 518.859 178.637 518.741 178.756C514.496 183.085 508.689 185.523 502.626 185.523H496.874H476.299H456.393H448.873C443.863 185.523 438.895 186.431 434.209 188.203C431.638 189.175 429.184 190.43 426.892 191.946L422.88 194.599C422.333 194.961 421.816 195.367 421.336 195.815L412.438 204.094L402.819 211.576L394.536 219.859L388.724 224.668L382.913 229.478L373.758 238.008C372.034 239.615 370.067 240.939 367.93 241.931C365.211 243.194 362.095 243.294 359.3 242.21L358.367 241.847C356.518 241.13 355.84 238.864 356.99 237.25L359.029 234.387C360.779 231.931 362.139 229.219 363.061 226.347L364.568 221.652C364.949 220.464 365.144 219.223 365.144 217.976V211.576L363.859 201.414C363.736 200.442 363.516 199.485 363.203 198.556L362.221 195.649C360.931 191.829 358.128 188.706 354.468 187.013L354.185 186.882C352.251 185.987 350.145 185.523 348.014 185.523H343.229C338.525 185.523 333.833 186.023 329.234 187.013C321.043 188.776 312.689 189.665 304.312 189.665H290.862H263.34H241.964H215.912H189.859L159.131 188.997L139.091 188.195L106.492 186.726L84.3254 185.858C78.6904 185.638 73.1775 184.151 68.1961 181.508C64.5334 179.564 61.1809 177.086 58.249 174.154L55.438 171.343C52.0778 167.983 49.1255 164.238 46.6423 160.186L42.7649 153.86L35.5505 138.897L31.1416 125.67L31.0132 125.095C28.3458 113.134 27 100.917 27 88.6628V77.8895C27 74.4848 27.405 71.0922 28.2064 67.7831C30.1462 59.7735 33.5619 52.1955 38.2784 45.4375Z"
            fill="white"
          />
          <path
            d="M48.3015 144.242L31.6758 120.059C31.6758 126.408 32.9449 132.692 35.4086 138.544L35.951 139.832L40.2262 147.848L45.3031 158.269L46.2037 159.689C50.2035 165.996 55.2831 171.55 61.2095 176.095C66.9969 180.533 73.771 183.508 80.9552 184.765L86.0513 185.657L101.683 187.127H118.383H136.419L155.657 188.73H179.705L204.154 190.333H229.539H251.984H282.044H307.974C308.233 190.333 308.491 190.312 308.747 190.27L331.342 186.592L354.322 182.851H329.873H300.881H265.21H237.02L210.701 180.046L186.386 178.175H148.844H138.949C129.984 178.175 121.045 177.224 112.281 175.336L97.7864 172.214C93.0893 171.202 88.489 169.784 84.0378 167.975L76.6352 164.966C72.2378 163.179 68.0497 160.914 64.1459 158.214L57.9827 153.951C54.1928 151.329 50.9122 148.039 48.3015 144.242Z"
            fill="#E2F2F5"
            stroke="#EFF8FA"
            strokeWidth="0.267202"
          />
          <path
            d="M449.875 181.199L440.762 186.592H450.114H455.458H462.405H470.02H478.704H486.186H494.068H501.044C501.38 186.592 501.716 186.557 502.045 186.487L507.829 185.256L512.626 183.817C512.99 183.708 513.339 183.556 513.667 183.365L516.38 181.783L518.796 179.97C519.318 179.579 519.754 179.087 520.079 178.522L522.125 174.969L522.272 174.681C524.302 170.704 526.846 167.011 529.838 163.696C530.127 163.375 530.364 163.012 530.541 162.618L533.213 156.666L536.821 146.111L539.359 138.362L542.622 127.694C542.762 127.238 542.833 126.764 542.833 126.287V115.784V91.6021L535.752 115.784L530.381 136.09C530.31 136.358 530.216 136.618 530.101 136.869L527.003 143.606C522.249 153.948 513.634 162.017 503.004 166.087L496.639 168.524C496.351 168.634 496.053 168.717 495.75 168.77L472.449 172.856C464.483 174.253 456.835 177.08 449.875 181.199Z"
            fill="#E2F2F5"
            stroke="#EFF8FA"
            strokeWidth="0.267202"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_80"
            x="0.299999"
            y="0.299999"
            width="575.367"
            height="278.356"
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
            <feOffset dx="3" dy="6" />
            <feGaussianBlur stdDeviation="14.85" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.40901 0 0 0 0 0.878348 0 0 0 0 0.950984 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_80"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_80"
              result="shape"
            />
          </filter>
        </defs>
        {/* <text fontSize="24" fill="black" textAnchor="middle" dominantBaseline="middle">Welcome Kiddo !</text> */}
        <svg
          className="absolute left-10 top-10"
          width="448"
          height="42"
          viewBox="0 0 448 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          x="10%"
          y="30%"
        >
          <path
            d="M17.592 41.504C16.3973 41.504 15.4267 41.224 14.68 40.664C13.9333 40.0667 13.336 39.1707 12.888 37.976L1.576 6.168C1.09067 4.74933 1.184 3.536 1.856 2.528C2.56533 1.52 3.77867 1.016 5.496 1.016C6.69067 1.016 7.60533 1.296 8.24 1.856C8.912 2.416 9.45333 3.29333 9.864 4.488L19.104 31.984H16.696L26.44 4.544C26.888 3.34933 27.4293 2.472 28.064 1.912C28.736 1.31466 29.6133 1.016 30.696 1.016C31.7413 1.016 32.5813 1.31466 33.216 1.912C33.8507 2.472 34.392 3.368 34.84 4.6L44.136 31.984H42.064L51.472 4.488C51.8453 3.33067 52.368 2.472 53.04 1.912C53.712 1.31466 54.6267 1.016 55.784 1.016C57.24 1.016 58.304 1.52 58.976 2.528C59.648 3.536 59.7227 4.74933 59.2 6.168L47.776 38.032C47.3653 39.1893 46.8053 40.0667 46.096 40.664C45.3867 41.224 44.416 41.504 43.184 41.504C41.9893 41.504 41.0373 41.224 40.328 40.664C39.6187 40.0667 39.04 39.1707 38.592 37.976L29.744 12.944H31.088L22.128 38.032C21.68 39.1893 21.1013 40.0667 20.392 40.664C19.72 41.224 18.7867 41.504 17.592 41.504ZM75.6452 41.616C72.3972 41.616 69.5972 41.0373 67.2452 39.88C64.9305 38.6853 63.1385 37.024 61.8692 34.896C60.6372 32.7307 60.0212 30.192 60.0212 27.28C60.0212 24.4427 60.6185 21.96 61.8132 19.832C63.0079 17.6667 64.6692 15.9867 66.7972 14.792C68.9625 13.56 71.4079 12.944 74.1332 12.944C76.1119 12.944 77.9039 13.28 79.5092 13.952C81.1145 14.5867 82.4959 15.52 83.6532 16.752C84.8105 17.9467 85.6879 19.4213 86.2852 21.176C86.8825 22.8933 87.1812 24.816 87.1812 26.944C87.1812 27.6533 86.9572 28.1947 86.5092 28.568C86.0612 28.904 85.4079 29.072 84.5492 29.072H66.9652V24.704H81.0772L80.1812 25.488C80.1812 23.9573 79.9572 22.688 79.5092 21.68C79.0612 20.6347 78.4079 19.8507 77.5492 19.328C76.7279 18.8053 75.7012 18.544 74.4692 18.544C73.0879 18.544 71.9119 18.8613 70.9412 19.496C69.9705 20.1307 69.2239 21.0453 68.7012 22.24C68.1785 23.4347 67.9172 24.872 67.9172 26.552V27C67.9172 29.8373 68.5705 31.928 69.8772 33.272C71.2212 34.616 73.1999 35.288 75.8132 35.288C76.7092 35.288 77.7359 35.176 78.8932 34.952C80.0505 34.728 81.1332 34.3733 82.1412 33.888C82.9999 33.4773 83.7652 33.3467 84.4372 33.496C85.1092 33.608 85.6319 33.9067 86.0052 34.392C86.3785 34.8773 86.5839 35.4373 86.6212 36.072C86.6959 36.7067 86.5652 37.3413 86.2292 37.976C85.8932 38.5733 85.3332 39.0773 84.5492 39.488C83.2799 40.1973 81.8425 40.72 80.2372 41.056C78.6692 41.4293 77.1385 41.616 75.6452 41.616ZM102.012 41.616C98.6889 41.616 96.2062 40.7013 94.5636 38.872C92.9209 37.0053 92.0996 34.2427 92.0996 30.584V5.328C92.0996 3.90933 92.4542 2.84533 93.1636 2.136C93.9102 1.38933 94.9742 1.016 96.3556 1.016C97.6996 1.016 98.7262 1.38933 99.4356 2.136C100.182 2.84533 100.556 3.90933 100.556 5.328V30.248C100.556 31.7787 100.873 32.9173 101.508 33.664C102.18 34.3733 103.057 34.728 104.14 34.728C104.438 34.728 104.718 34.7093 104.98 34.672C105.241 34.6347 105.521 34.616 105.82 34.616C106.417 34.5413 106.828 34.728 107.052 35.176C107.313 35.5867 107.444 36.4267 107.444 37.696C107.444 38.816 107.22 39.6747 106.772 40.272C106.324 40.832 105.633 41.2053 104.7 41.392C104.326 41.4293 103.897 41.4667 103.412 41.504C102.926 41.5787 102.46 41.616 102.012 41.616ZM123.859 41.616C120.872 41.616 118.259 41.0373 116.019 39.88C113.816 38.6853 112.117 37.0053 110.923 34.84C109.728 32.6747 109.131 30.1173 109.131 27.168C109.131 24.9653 109.467 22.9867 110.139 21.232C110.811 19.4773 111.781 17.984 113.051 16.752C114.357 15.52 115.925 14.5867 117.755 13.952C119.584 13.28 121.619 12.944 123.859 12.944C125.016 12.944 126.248 13.0933 127.555 13.392C128.861 13.6533 130.149 14.12 131.419 14.792C132.165 15.128 132.669 15.6133 132.931 16.248C133.229 16.8453 133.341 17.48 133.267 18.152C133.192 18.7867 132.949 19.3653 132.539 19.888C132.165 20.3733 131.68 20.7093 131.083 20.896C130.485 21.0453 129.813 20.9333 129.067 20.56C128.357 20.1493 127.611 19.8507 126.827 19.664C126.08 19.4773 125.371 19.384 124.699 19.384C123.579 19.384 122.589 19.5707 121.731 19.944C120.872 20.28 120.144 20.784 119.547 21.456C118.987 22.0907 118.539 22.8933 118.203 23.864C117.904 24.8347 117.755 25.9547 117.755 27.224C117.755 29.688 118.352 31.6293 119.547 33.048C120.779 34.4293 122.496 35.12 124.699 35.12C125.371 35.12 126.08 35.0453 126.827 34.896C127.573 34.7093 128.32 34.4107 129.067 34C129.813 33.6267 130.485 33.5333 131.083 33.72C131.68 33.9067 132.147 34.2613 132.483 34.784C132.856 35.2693 133.061 35.848 133.099 36.52C133.173 37.1547 133.061 37.7893 132.763 38.424C132.501 39.0213 132.016 39.488 131.307 39.824C130.037 40.4587 128.768 40.9067 127.499 41.168C126.229 41.4667 125.016 41.616 123.859 41.616ZM149.886 41.616C146.937 41.616 144.361 41.0373 142.158 39.88C139.993 38.7227 138.313 37.0613 137.118 34.896C135.923 32.7307 135.326 30.1733 135.326 27.224C135.326 25.0213 135.662 23.0427 136.334 21.288C137.006 19.5333 137.977 18.04 139.246 16.808C140.553 15.5387 142.102 14.5867 143.894 13.952C145.686 13.28 147.683 12.944 149.886 12.944C152.835 12.944 155.393 13.5227 157.558 14.68C159.761 15.8373 161.459 17.48 162.654 19.608C163.886 21.736 164.502 24.2747 164.502 27.224C164.502 29.464 164.147 31.4613 163.438 33.216C162.766 34.9707 161.795 36.4827 160.526 37.752C159.257 39.0213 157.707 39.992 155.878 40.664C154.086 41.2987 152.089 41.616 149.886 41.616ZM149.886 35.288C151.118 35.288 152.182 34.9893 153.078 34.392C153.974 33.7947 154.683 32.9173 155.206 31.76C155.729 30.5653 155.99 29.0533 155.99 27.224C155.99 24.4987 155.43 22.5013 154.31 21.232C153.19 19.9253 151.715 19.272 149.886 19.272C148.691 19.272 147.627 19.552 146.694 20.112C145.798 20.672 145.089 21.5493 144.566 22.744C144.081 23.9013 143.838 25.3947 143.838 27.224C143.838 29.9493 144.398 31.984 145.518 33.328C146.638 34.6347 148.094 35.288 149.886 35.288ZM174.014 41.504C172.633 41.504 171.569 41.1307 170.822 40.384C170.113 39.6373 169.758 38.5733 169.758 37.192V17.312C169.758 15.9307 170.113 14.8853 170.822 14.176C171.569 13.4293 172.596 13.056 173.902 13.056C175.246 13.056 176.273 13.4293 176.982 14.176C177.692 14.8853 178.046 15.9307 178.046 17.312V20.896L177.43 18.656C178.177 16.9387 179.334 15.5573 180.902 14.512C182.47 13.4667 184.318 12.944 186.446 12.944C188.574 12.944 190.348 13.448 191.766 14.456C193.185 15.464 194.193 17.0133 194.79 19.104H194.006C194.828 17.2 196.078 15.7067 197.758 14.624C199.476 13.504 201.436 12.944 203.638 12.944C205.766 12.944 207.502 13.3733 208.846 14.232C210.228 15.0533 211.254 16.3227 211.926 18.04C212.598 19.72 212.934 21.8667 212.934 24.48V37.192C212.934 38.5733 212.561 39.6373 211.814 40.384C211.105 41.1307 210.078 41.504 208.734 41.504C207.353 41.504 206.289 41.1307 205.542 40.384C204.833 39.6373 204.478 38.5733 204.478 37.192V24.76C204.478 22.9307 204.18 21.6053 203.582 20.784C203.022 19.9253 202.052 19.496 200.67 19.496C199.065 19.496 197.814 20.056 196.918 21.176C196.022 22.296 195.574 23.8827 195.574 25.936V37.192C195.574 38.5733 195.201 39.6373 194.454 40.384C193.745 41.1307 192.718 41.504 191.374 41.504C190.03 41.504 188.985 41.1307 188.238 40.384C187.492 39.6373 187.118 38.5733 187.118 37.192V24.76C187.118 22.9307 186.82 21.6053 186.222 20.784C185.662 19.9253 184.692 19.496 183.31 19.496C181.705 19.496 180.454 20.056 179.558 21.176C178.662 22.296 178.214 23.8827 178.214 25.936V37.192C178.214 40.0667 176.814 41.504 174.014 41.504ZM233.692 41.616C230.444 41.616 227.644 41.0373 225.292 39.88C222.977 38.6853 221.185 37.024 219.916 34.896C218.684 32.7307 218.068 30.192 218.068 27.28C218.068 24.4427 218.665 21.96 219.86 19.832C221.055 17.6667 222.716 15.9867 224.844 14.792C227.009 13.56 229.455 12.944 232.18 12.944C234.159 12.944 235.951 13.28 237.556 13.952C239.161 14.5867 240.543 15.52 241.7 16.752C242.857 17.9467 243.735 19.4213 244.332 21.176C244.929 22.8933 245.228 24.816 245.228 26.944C245.228 27.6533 245.004 28.1947 244.556 28.568C244.108 28.904 243.455 29.072 242.596 29.072H225.012V24.704H239.124L238.228 25.488C238.228 23.9573 238.004 22.688 237.556 21.68C237.108 20.6347 236.455 19.8507 235.596 19.328C234.775 18.8053 233.748 18.544 232.516 18.544C231.135 18.544 229.959 18.8613 228.988 19.496C228.017 20.1307 227.271 21.0453 226.748 22.24C226.225 23.4347 225.964 24.872 225.964 26.552V27C225.964 29.8373 226.617 31.928 227.924 33.272C229.268 34.616 231.247 35.288 233.86 35.288C234.756 35.288 235.783 35.176 236.94 34.952C238.097 34.728 239.18 34.3733 240.188 33.888C241.047 33.4773 241.812 33.3467 242.484 33.496C243.156 33.608 243.679 33.9067 244.052 34.392C244.425 34.8773 244.631 35.4373 244.668 36.072C244.743 36.7067 244.612 37.3413 244.276 37.976C243.94 38.5733 243.38 39.0773 242.596 39.488C241.327 40.1973 239.889 40.72 238.284 41.056C236.716 41.4293 235.185 41.616 233.692 41.616ZM270.883 41.504C269.464 41.504 268.382 41.112 267.635 40.328C266.888 39.544 266.515 38.4427 266.515 37.024V5.44C266.515 4.02133 266.888 2.93866 267.635 2.192C268.382 1.408 269.464 1.016 270.883 1.016C272.264 1.016 273.328 1.408 274.075 2.192C274.822 2.93866 275.195 4.02133 275.195 5.44V18.712H275.307L290.203 3.144C290.838 2.472 291.491 1.968 292.163 1.632C292.872 1.25866 293.675 1.072 294.571 1.072C295.878 1.072 296.811 1.408 297.371 2.08C297.968 2.752 298.23 3.536 298.155 4.432C298.08 5.328 297.67 6.168 296.923 6.952L281.971 22.24L282.027 18.488L297.707 35.232C298.566 36.1653 298.995 37.1173 298.995 38.088C299.032 39.0587 298.715 39.88 298.043 40.552C297.408 41.1867 296.456 41.504 295.187 41.504C294.104 41.504 293.227 41.28 292.555 40.832C291.92 40.384 291.211 39.7307 290.427 38.872L275.307 22.968H275.195V37.024C275.195 38.4427 274.822 39.544 274.075 40.328C273.366 41.112 272.302 41.504 270.883 41.504ZM310.457 41.448C309.076 41.448 308.012 41.056 307.265 40.272C306.556 39.4507 306.201 38.312 306.201 36.856V17.704C306.201 16.2107 306.556 15.072 307.265 14.288C308.012 13.4667 309.076 13.056 310.457 13.056C311.801 13.056 312.828 13.4667 313.537 14.288C314.284 15.072 314.657 16.2107 314.657 17.704V36.856C314.657 38.312 314.302 39.4507 313.593 40.272C312.884 41.056 311.838 41.448 310.457 41.448ZM310.457 8.464C308.889 8.464 307.676 8.10933 306.817 7.4C305.996 6.65333 305.585 5.608 305.585 4.264C305.585 2.88267 305.996 1.83733 306.817 1.128C307.676 0.381331 308.889 0.00799704 310.457 0.00799704C312.025 0.00799704 313.22 0.381331 314.041 1.128C314.862 1.83733 315.273 2.88267 315.273 4.264C315.273 5.608 314.862 6.65333 314.041 7.4C313.22 8.10933 312.025 8.464 310.457 8.464ZM331.882 41.616C329.492 41.616 327.383 41.0373 325.554 39.88C323.762 38.7227 322.362 37.0613 321.354 34.896C320.346 32.7307 319.842 30.1733 319.842 27.224C319.842 24.2747 320.346 21.736 321.354 19.608C322.362 17.48 323.762 15.8373 325.554 14.68C327.383 13.5227 329.492 12.944 331.882 12.944C334.047 12.944 335.951 13.4667 337.594 14.512C339.274 15.5573 340.412 16.92 341.01 18.6H340.394V5.328C340.394 3.90933 340.748 2.84533 341.458 2.136C342.167 1.38933 343.212 1.016 344.594 1.016C345.938 1.016 346.983 1.38933 347.73 2.136C348.476 2.84533 348.85 3.90933 348.85 5.328V37.192C348.85 38.5733 348.476 39.6373 347.73 40.384C347.02 41.1307 345.994 41.504 344.65 41.504C343.306 41.504 342.26 41.1307 341.514 40.384C340.804 39.6373 340.45 38.5733 340.45 37.192V33.384L341.066 35.568C340.543 37.3973 339.423 38.872 337.706 39.992C336.026 41.0747 334.084 41.616 331.882 41.616ZM334.401 35.288C335.634 35.288 336.698 34.9893 337.594 34.392C338.49 33.7947 339.199 32.9173 339.722 31.76C340.244 30.5653 340.506 29.0533 340.506 27.224C340.506 24.4987 339.946 22.5013 338.826 21.232C337.706 19.9253 336.231 19.272 334.401 19.272C333.207 19.272 332.143 19.552 331.21 20.112C330.314 20.672 329.604 21.5493 329.082 22.744C328.596 23.9013 328.354 25.3947 328.354 27.224C328.354 29.9493 328.914 31.984 330.034 33.328C331.154 34.6347 332.61 35.288 334.401 35.288ZM366.061 41.616C363.672 41.616 361.563 41.0373 359.733 39.88C357.941 38.7227 356.541 37.0613 355.533 34.896C354.525 32.7307 354.021 30.1733 354.021 27.224C354.021 24.2747 354.525 21.736 355.533 19.608C356.541 17.48 357.941 15.8373 359.733 14.68C361.563 13.5227 363.672 12.944 366.061 12.944C368.227 12.944 370.131 13.4667 371.773 14.512C373.453 15.5573 374.592 16.92 375.189 18.6H374.573V5.328C374.573 3.90933 374.928 2.84533 375.637 2.136C376.347 1.38933 377.392 1.016 378.773 1.016C380.117 1.016 381.163 1.38933 381.909 2.136C382.656 2.84533 383.029 3.90933 383.029 5.328V37.192C383.029 38.5733 382.656 39.6373 381.909 40.384C381.2 41.1307 380.173 41.504 378.829 41.504C377.485 41.504 376.44 41.1307 375.693 40.384C374.984 39.6373 374.629 38.5733 374.629 37.192V33.384L375.245 35.568C374.723 37.3973 373.603 38.872 371.885 39.992C370.205 41.0747 368.264 41.616 366.061 41.616ZM368.581 35.288C369.813 35.288 370.877 34.9893 371.773 34.392C372.669 33.7947 373.379 32.9173 373.901 31.76C374.424 30.5653 374.685 29.0533 374.685 27.224C374.685 24.4987 374.125 22.5013 373.005 21.232C371.885 19.9253 370.411 19.272 368.581 19.272C367.387 19.272 366.323 19.552 365.389 20.112C364.493 20.672 363.784 21.5493 363.261 22.744C362.776 23.9013 362.533 25.3947 362.533 27.224C362.533 29.9493 363.093 31.984 364.213 33.328C365.333 34.6347 366.789 35.288 368.581 35.288ZM402.761 41.616C399.812 41.616 397.236 41.0373 395.033 39.88C392.868 38.7227 391.188 37.0613 389.993 34.896C388.798 32.7307 388.201 30.1733 388.201 27.224C388.201 25.0213 388.537 23.0427 389.209 21.288C389.881 19.5333 390.852 18.04 392.121 16.808C393.428 15.5387 394.977 14.5867 396.769 13.952C398.561 13.28 400.558 12.944 402.761 12.944C405.71 12.944 408.268 13.5227 410.433 14.68C412.636 15.8373 414.334 17.48 415.529 19.608C416.761 21.736 417.377 24.2747 417.377 27.224C417.377 29.464 417.022 31.4613 416.313 33.216C415.641 34.9707 414.67 36.4827 413.401 37.752C412.132 39.0213 410.582 39.992 408.753 40.664C406.961 41.2987 404.964 41.616 402.761 41.616ZM402.761 35.288C403.993 35.288 405.057 34.9893 405.953 34.392C406.849 33.7947 407.558 32.9173 408.081 31.76C408.604 30.5653 408.865 29.0533 408.865 27.224C408.865 24.4987 408.305 22.5013 407.185 21.232C406.065 19.9253 404.59 19.272 402.761 19.272C401.566 19.272 400.502 19.552 399.569 20.112C398.673 20.672 397.964 21.5493 397.441 22.744C396.956 23.9013 396.713 25.3947 396.713 27.224C396.713 29.9493 397.273 31.984 398.393 33.328C399.513 34.6347 400.969 35.288 402.761 35.288ZM442.25 28.848C441.391 28.848 440.719 28.5867 440.234 28.064C439.749 27.5413 439.45 26.776 439.338 25.768L437.546 6.616C437.359 4.936 437.677 3.592 438.498 2.584C439.319 1.53866 440.57 1.016 442.25 1.016C443.855 1.016 445.069 1.53866 445.89 2.584C446.711 3.592 447.029 4.936 446.842 6.616L445.05 25.768C444.938 26.776 444.639 27.5413 444.154 28.064C443.706 28.5867 443.071 28.848 442.25 28.848ZM442.25 41.28C440.757 41.28 439.562 40.832 438.666 39.936C437.807 39.04 437.378 37.8827 437.378 36.464C437.378 35.0827 437.807 33.9627 438.666 33.104C439.562 32.208 440.757 31.76 442.25 31.76C443.743 31.76 444.901 32.208 445.722 33.104C446.581 33.9627 447.01 35.0827 447.01 36.464C447.01 37.8827 446.581 39.04 445.722 39.936C444.901 40.832 443.743 41.28 442.25 41.28Z"
            fill="#11AEC6"
          />
        </svg>
      </svg>
    </div>
  );
};
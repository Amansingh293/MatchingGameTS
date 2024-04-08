import React from "react";
import { useNavigate } from "react-router-dom";

interface YesButtonProps {
  className: string;
  navigateId: number;
}

export const YesButtonSvg = ({ className, navigateId }: YesButtonProps) => {
  const navigate = useNavigate();

  return (
    <svg
      className={className}
      width="373"
      height="129"
      viewBox="0 0 373 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => navigate(`/${navigateId}`)}
    >
      <g filter="url(#filter0_d_0_480)">
        <path
          d="M313.034 49.5297C313.034 41.7991 321.403 36.9674 328.097 40.8328L346.174 51.2691C352.869 55.1344 352.869 64.7977 346.174 68.663L328.097 79.0994C321.403 82.9647 313.034 78.1331 313.034 70.4024L313.034 49.5297Z"
          fill="#FFDF6D"
        />
      </g>
      <g filter="url(#filter1_d_0_480)">
        <rect width="329.39" height="120.509" rx="40.1695" fill="#FFDF6D" />
      </g>
      <g filter="url(#filter2_di_0_480)">
        <rect
          x="10.0425"
          y="6.02539"
          width="309.306"
          height="100.424"
          rx="40.1695"
          fill="#FFCF25"
        />
      </g>
      <path
        d="M27 38.7462C27 27.2884 36.2884 18 47.7462 18H275.392C286.848 18 296.136 27.2876 296.136 38.7444C296.136 51.2021 285.257 60.8826 272.868 59.574C244.748 56.6038 196.868 52.16 161.98 52.1441C126.817 52.1281 78.5378 56.5978 50.2647 59.5787C37.8759 60.8849 27 51.2037 27 38.7462Z"
        fill="#FFD84C"
      />
      <path
        d="M118.107 83.6802C116.222 83.6802 114.765 83.1661 113.737 82.1377C112.708 81.0665 112.194 79.5455 112.194 77.5745V59.9641L114.637 66.4555L99.8542 45.1818C99.1258 44.1534 98.8044 43.018 98.8901 41.7754C99.0186 40.4899 99.5328 39.4188 100.433 38.5618C101.375 37.662 102.704 37.2121 104.417 37.2121C105.617 37.2121 106.71 37.512 107.695 38.1119C108.681 38.6689 109.602 39.633 110.459 41.0041L119.457 54.244H117.143L126.141 40.9398C127.041 39.5687 127.962 38.6047 128.905 38.0476C129.847 37.4906 130.961 37.2121 132.247 37.2121C133.875 37.2121 135.139 37.6192 136.039 38.4333C136.939 39.2474 137.41 40.2757 137.453 41.5183C137.539 42.7609 137.153 44.0249 136.296 45.3103L121.642 66.4555L124.02 59.9641V77.5745C124.02 81.645 122.049 83.6802 118.107 83.6802ZM156.24 83.1018C154.226 83.1018 152.684 82.5876 151.613 81.5593C150.584 80.4881 150.07 78.967 150.07 76.996V43.8963C150.07 41.9253 150.584 40.4257 151.613 39.3973C152.684 38.3261 154.226 37.7906 156.24 37.7906H178.028C179.571 37.7906 180.728 38.1762 181.499 38.9474C182.27 39.7187 182.656 40.8327 182.656 42.2895C182.656 43.7892 182.27 44.9461 181.499 45.7602C180.728 46.5314 179.571 46.9171 178.028 46.9171H161.382V55.5294H176.614C178.114 55.5294 179.249 55.9151 180.021 56.6863C180.835 57.4576 181.242 58.593 181.242 60.0927C181.242 61.5924 180.835 62.7278 180.021 63.4991C179.249 64.2703 178.114 64.6559 176.614 64.6559H161.382V73.9753H178.028C179.571 73.9753 180.728 74.3823 181.499 75.1964C182.27 75.9677 182.656 77.0817 182.656 78.5385C182.656 80.0382 182.27 81.1737 181.499 81.9449C180.728 82.7162 179.571 83.1018 178.028 83.1018H156.24ZM209.617 83.8088C207.903 83.8088 206.103 83.6802 204.218 83.4232C202.376 83.2089 200.619 82.8661 198.948 82.3948C197.277 81.9235 195.777 81.3665 194.449 80.7238C193.292 80.1668 192.478 79.4383 192.007 78.5385C191.535 77.5959 191.364 76.6104 191.492 75.5821C191.621 74.5537 191.985 73.6539 192.585 72.8827C193.185 72.0686 193.978 71.533 194.963 71.2759C195.949 70.976 197.063 71.1045 198.305 71.6615C199.933 72.4328 201.776 73.0326 203.833 73.4611C205.889 73.8896 207.817 74.1038 209.617 74.1038C212.445 74.1038 214.416 73.7396 215.53 73.0112C216.687 72.24 217.265 71.2973 217.265 70.1833C217.265 69.1978 216.858 68.4051 216.044 67.8052C215.273 67.2054 213.88 66.6912 211.866 66.2627L204.347 64.6559C200.233 63.799 197.17 62.2993 195.156 60.157C193.142 58.0146 192.135 55.2509 192.135 51.866C192.135 49.6379 192.585 47.6241 193.485 45.8245C194.428 43.982 195.734 42.4181 197.405 41.1327C199.119 39.8472 201.133 38.8617 203.447 38.1762C205.804 37.4478 208.417 37.0836 211.288 37.0836C213.516 37.0836 215.766 37.3407 218.037 37.8548C220.35 38.3261 222.343 39.0546 224.014 40.04C224.999 40.5542 225.706 41.2612 226.135 42.161C226.563 43.0608 226.735 44.0034 226.649 44.9889C226.563 45.9316 226.22 46.7671 225.621 47.4955C225.063 48.2239 224.292 48.7167 223.307 48.9738C222.364 49.188 221.229 49.0166 219.9 48.4596C218.658 47.9026 217.244 47.4955 215.658 47.2384C214.116 46.9385 212.616 46.7885 211.159 46.7885C209.574 46.7885 208.224 46.9813 207.11 47.367C205.996 47.7098 205.139 48.2239 204.54 48.9095C203.983 49.595 203.704 50.3877 203.704 51.2875C203.704 52.1873 204.068 52.9586 204.797 53.6013C205.568 54.2012 206.96 54.7153 208.974 55.1438L216.43 56.7506C220.586 57.6504 223.692 59.1286 225.749 61.1853C227.806 63.242 228.834 65.92 228.834 69.2192C228.834 71.4473 228.384 73.4611 227.484 75.2607C226.585 77.0603 225.299 78.6028 223.628 79.8882C221.957 81.1308 219.943 82.0949 217.587 82.7805C215.23 83.466 212.573 83.8088 209.617 83.8088Z"
        fill="white"
      />
      <path
        d="M113.737 82.1377L113.012 82.8332L113.019 82.8406L113.027 82.8478L113.737 82.1377ZM112.194 59.9641L113.134 59.6105L111.19 59.9641H112.194ZM114.637 66.4555L113.812 67.0286L115.576 66.1019L114.637 66.4555ZM99.8542 45.1817L100.679 44.6087L100.674 44.6013L99.8542 45.1817ZM98.8901 41.7754L97.8908 41.6754L97.8893 41.6908L97.8882 41.7063L98.8901 41.7754ZM100.433 38.5618L101.125 39.289L101.126 39.2882L100.433 38.5618ZM107.695 38.1119L107.173 38.9697L107.187 38.9782L107.201 38.9862L107.695 38.1119ZM110.459 41.0041L109.607 41.5364L109.618 41.5527L109.628 41.5686L110.459 41.0041ZM119.457 54.244V55.2482H121.354L120.287 53.6795L119.457 54.244ZM117.143 54.244L116.311 53.6814L115.252 55.2482H117.143V54.244ZM126.141 40.9398L126.973 41.5025L126.981 41.4908L126.141 40.9398ZM128.905 38.0476L128.394 37.1831V37.1831L128.905 38.0476ZM136.039 38.4333L135.365 39.1779L136.039 38.4333ZM137.453 41.5183L136.449 41.5529L136.45 41.5702L136.451 41.5874L137.453 41.5183ZM136.296 45.3103L137.121 45.8823L137.127 45.8749L137.132 45.8673L136.296 45.3103ZM121.642 66.4555L120.699 66.1101L122.468 67.0276L121.642 66.4555ZM124.02 59.9641H125.024L123.077 59.6187L124.02 59.9641ZM118.107 82.676C116.406 82.676 115.236 82.2165 114.447 81.4276L113.027 82.8478C114.295 84.1157 116.038 84.6845 118.107 84.6845V82.676ZM114.461 81.4423C113.665 80.6128 113.198 79.3735 113.198 77.5745H111.19C111.19 79.7174 111.752 81.5203 113.012 82.8332L114.461 81.4423ZM113.198 77.5745V59.9641H111.19V77.5745H113.198ZM111.254 60.3178L113.697 66.8092L115.576 66.1019L113.134 59.6105L111.254 60.3178ZM115.461 65.8825L100.679 44.6087L99.0295 45.7548L113.812 67.0286L115.461 65.8825ZM100.674 44.6013C100.077 43.7595 99.8224 42.853 99.892 41.8445L97.8882 41.7063C97.7864 43.1829 98.1741 44.5473 99.0347 45.7622L100.674 44.6013ZM99.8894 41.8753C99.995 40.8186 100.407 39.9733 101.125 39.289L99.74 37.8346C98.6589 38.8643 98.0423 40.1613 97.8908 41.6754L99.8894 41.8753ZM101.126 39.2882C101.829 38.6173 102.878 38.2164 104.417 38.2164V36.2079C102.529 36.2079 100.922 36.7067 99.7392 37.8354L101.126 39.2882ZM104.417 38.2164C105.441 38.2164 106.351 38.4696 107.173 38.9697L108.217 37.2541C107.068 36.5545 105.794 36.2079 104.417 36.2079V38.2164ZM107.201 38.9862C107.992 39.433 108.803 40.2502 109.607 41.5364L111.311 40.4719C110.4 39.0158 109.37 37.9048 108.189 37.2377L107.201 38.9862ZM109.628 41.5686L118.626 54.8085L120.287 53.6795L111.29 40.4396L109.628 41.5686ZM119.457 53.2398H117.143V55.2482H119.457V53.2398ZM117.975 54.8066L126.973 41.5025L125.309 40.3772L116.311 53.6814L117.975 54.8066ZM126.981 41.4908C127.835 40.1896 128.654 39.3621 129.416 38.9122L128.394 37.1831C127.27 37.8472 126.247 38.9479 125.302 40.3889L126.981 41.4908ZM129.416 38.9122C130.179 38.4615 131.11 38.2164 132.247 38.2164V36.2079C130.813 36.2079 129.516 36.5198 128.394 37.1831L129.416 38.9122ZM132.247 38.2164C133.713 38.2164 134.705 38.581 135.365 39.1779L136.713 37.6886C135.573 36.6573 134.038 36.2079 132.247 36.2079V38.2164ZM135.365 39.1779C136.058 39.8047 136.415 40.5744 136.449 41.5529L138.457 41.4837C138.405 39.9771 137.819 38.69 136.713 37.6886L135.365 39.1779ZM136.451 41.5874C136.518 42.5598 136.224 43.6071 135.46 44.7532L137.132 45.8673C138.081 44.4426 138.559 42.9619 138.455 41.4492L136.451 41.5874ZM135.471 44.7383L120.817 65.8835L122.468 67.0276L137.121 45.8823L135.471 44.7383ZM122.585 66.801L124.963 60.3096L123.077 59.6187L120.699 66.1101L122.585 66.801ZM123.016 59.9641V77.5745H125.024V59.9641H123.016ZM123.016 77.5745C123.016 79.4629 122.558 80.6933 121.821 81.4552C121.088 82.2111 119.915 82.676 118.107 82.676V84.6845C120.241 84.6845 122.024 84.1317 123.263 82.8524C124.496 81.5791 125.024 79.7566 125.024 77.5745H123.016ZM151.613 81.5593L150.888 82.2548L150.902 82.2695L150.917 82.2837L151.613 81.5593ZM151.613 39.3973L152.323 40.1074L151.613 39.3973ZM181.499 45.7602L182.209 46.4703L182.218 46.4607L182.228 46.4509L181.499 45.7602ZM161.382 46.9171V45.9128H160.378V46.9171H161.382ZM161.382 55.5294H160.378V56.5337H161.382V55.5294ZM180.021 56.6863L179.31 57.3964L179.32 57.406L179.33 57.4153L180.021 56.6863ZM180.021 63.4991L179.33 62.77L179.32 62.7794L179.31 62.789L180.021 63.4991ZM161.382 64.6559V63.6517H160.378V64.6559H161.382ZM161.382 73.9753H160.378V74.9795H161.382V73.9753ZM181.499 75.1964L180.77 75.8871L180.779 75.8969L180.789 75.9065L181.499 75.1964ZM156.24 82.0976C154.391 82.0976 153.134 81.6276 152.308 80.8349L150.917 82.2837C152.234 83.5477 154.061 84.106 156.24 84.106V82.0976ZM152.337 80.8638C151.541 80.0343 151.074 78.795 151.074 76.996H149.066C149.066 79.139 149.628 80.9419 150.888 82.2548L152.337 80.8638ZM151.074 76.996V43.8963H149.066V76.996H151.074ZM151.074 43.8963C151.074 42.0945 151.542 40.8884 152.323 40.1074L150.903 38.6872C149.627 39.963 149.066 41.7562 149.066 43.8963H151.074ZM152.323 40.1074C153.15 39.2803 154.402 38.7948 156.24 38.7948V36.7863C154.051 36.7863 152.218 37.372 150.903 38.6872L152.323 40.1074ZM156.24 38.7948H178.028V36.7863H156.24V38.7948ZM178.028 38.7948C179.416 38.7948 180.272 39.141 180.789 39.6575L182.209 38.2373C181.183 37.2113 179.725 36.7863 178.028 36.7863V38.7948ZM180.789 39.6575C181.315 40.1839 181.651 41.0068 181.651 42.2895H183.66C183.66 40.6587 183.225 39.2534 182.209 38.2373L180.789 39.6575ZM181.651 42.2895C181.651 43.621 181.311 44.4977 180.77 45.0695L182.228 46.4509C183.229 45.3945 183.66 43.9574 183.66 42.2895H181.651ZM180.789 45.0501C180.272 45.5666 179.416 45.9128 178.028 45.9128V47.9213C179.725 47.9213 181.183 47.4963 182.209 46.4703L180.789 45.0501ZM178.028 45.9128H161.382V47.9213H178.028V45.9128ZM160.378 46.9171V55.5294H162.386V46.9171H160.378ZM161.382 56.5337H176.614V54.5252H161.382V56.5337ZM176.614 56.5337C177.95 56.5337 178.789 56.8751 179.31 57.3964L180.731 55.9762C179.709 54.955 178.278 54.5252 176.614 54.5252V56.5337ZM179.33 57.4153C179.883 57.9393 180.237 58.772 180.237 60.0927H182.246C182.246 58.4141 181.786 56.9758 180.711 55.9573L179.33 57.4153ZM180.237 60.0927C180.237 61.4134 179.883 62.2461 179.33 62.77L180.711 64.2281C181.786 63.2096 182.246 61.7713 182.246 60.0927H180.237ZM179.31 62.789C178.789 63.3103 177.95 63.6517 176.614 63.6517V65.6602C178.278 65.6602 179.709 65.2304 180.731 64.2092L179.31 62.789ZM176.614 63.6517H161.382V65.6602H176.614V63.6517ZM160.378 64.6559V73.9753H162.386V64.6559H160.378ZM161.382 74.9795H178.028V72.971H161.382V74.9795ZM178.028 74.9795C179.402 74.9795 180.251 75.3393 180.77 75.8871L182.228 74.5058C181.204 73.4254 179.74 72.971 178.028 72.971V74.9795ZM180.789 75.9065C181.315 76.4329 181.651 77.2558 181.651 78.5385H183.66C183.66 76.9077 183.225 75.5024 182.209 74.4863L180.789 75.9065ZM181.651 78.5385C181.651 79.8739 181.31 80.7135 180.789 81.2348L182.209 82.655C183.23 81.6338 183.66 80.2025 183.66 78.5385H181.651ZM180.789 81.2348C180.272 81.7513 179.416 82.0976 178.028 82.0976V84.106C179.725 84.106 181.183 83.681 182.209 82.655L180.789 81.2348ZM178.028 82.0976H156.24V84.106H178.028V82.0976ZM204.218 83.4232L204.354 82.4281L204.344 82.4268L204.334 82.4256L204.218 83.4232ZM194.449 80.7238L194.886 79.8198L194.885 79.8189L194.449 80.7238ZM192.007 78.5385L191.108 78.9877L191.113 78.9961L191.117 79.0045L192.007 78.5385ZM191.492 75.5821L192.489 75.7066L191.492 75.5821ZM192.585 72.8827L193.378 73.4992L193.386 73.4889L193.394 73.4784L192.585 72.8827ZM194.963 71.2759L195.217 72.2476L195.236 72.2425L195.256 72.2366L194.963 71.2759ZM198.305 71.6615L198.735 70.754L198.726 70.7494L198.716 70.7451L198.305 71.6615ZM203.833 73.4611L204.037 72.478L203.833 73.4611ZM215.53 73.0112L216.08 73.8518L216.087 73.8468L215.53 73.0112ZM216.044 67.8052L215.428 68.5979L215.438 68.606L215.448 68.6137L216.044 67.8052ZM211.866 66.2627L211.657 67.2448L211.657 67.245L211.866 66.2627ZM204.347 64.6559L204.557 63.6739L204.552 63.6728L204.347 64.6559ZM195.156 60.157L195.888 59.4691L195.156 60.157ZM193.485 45.8245L192.591 45.367L192.587 45.3754L193.485 45.8245ZM197.405 41.1327L196.803 40.3292L196.793 40.3367L197.405 41.1327ZM203.447 38.1762L203.732 39.1391L203.743 39.1356L203.447 38.1762ZM218.037 37.8548L217.815 38.8343L217.825 38.8367L217.836 38.8389L218.037 37.8548ZM224.014 40.04L223.504 40.9051L223.526 40.9183L223.549 40.9304L224.014 40.04ZM226.135 42.161L225.228 42.5928V42.5928L226.135 42.161ZM226.649 44.9889L227.649 45.0799L227.649 45.0759L226.649 44.9889ZM225.621 47.4955L224.845 46.8571L224.834 46.8711L224.823 46.8855L225.621 47.4955ZM223.307 48.9738L223.529 49.953L223.545 49.9495L223.56 49.9455L223.307 48.9738ZM219.9 48.4596L219.49 49.376L219.501 49.381L219.512 49.3857L219.9 48.4596ZM215.658 47.2384L215.467 48.2242L215.482 48.2272L215.498 48.2297L215.658 47.2384ZM207.11 47.367L207.406 48.3268L207.422 48.3217L207.439 48.316L207.11 47.367ZM204.54 48.9095L203.784 48.2482L203.772 48.262L203.76 48.2762L204.54 48.9095ZM204.797 53.6013L204.132 54.3543L204.156 54.3749L204.18 54.394L204.797 53.6013ZM208.974 55.1438L209.186 54.1621L209.183 54.1615L208.974 55.1438ZM216.43 56.7506L216.642 55.7691L216.641 55.7689L216.43 56.7506ZM227.484 75.2607L228.383 75.7098L227.484 75.2607ZM223.628 79.8882L224.227 80.6941L224.234 80.6892L224.24 80.6842L223.628 79.8882ZM217.587 82.7804L217.867 83.7447L217.587 82.7804ZM209.617 82.8046C207.953 82.8046 206.199 82.6797 204.354 82.4281L204.082 84.4182C206.008 84.6807 207.853 84.813 209.617 84.813V82.8046ZM204.334 82.4256C202.541 82.2171 200.837 81.8842 199.221 81.4283L198.675 83.3614C200.401 83.8481 202.21 84.2007 204.102 84.4207L204.334 82.4256ZM199.221 81.4283C197.597 80.9702 196.153 80.4328 194.886 79.8198L194.012 81.6277C195.401 82.3001 196.957 82.8768 198.675 83.3614L199.221 81.4283ZM194.885 79.8189C193.87 79.3306 193.244 78.7357 192.896 78.0726L191.117 79.0045C191.712 80.141 192.714 81.0029 194.013 81.6286L194.885 79.8189ZM192.905 78.0894C192.521 77.3209 192.385 76.5347 192.489 75.7066L190.496 75.4575C190.342 76.6861 190.55 77.8709 191.108 78.9877L192.905 78.0894ZM192.489 75.7066C192.596 74.8463 192.896 74.1191 193.378 73.4992L191.792 72.2661C191.075 73.1888 190.646 74.2611 190.496 75.4575L192.489 75.7066ZM193.394 73.4784C193.856 72.8509 194.452 72.4471 195.217 72.2476L194.71 70.3042C193.503 70.6189 192.514 71.2862 191.777 72.287L193.394 73.4784ZM195.256 72.2366C195.943 72.0274 196.801 72.0877 197.894 72.5779L198.716 70.7451C197.324 70.1213 195.954 69.9245 194.671 70.3152L195.256 72.2366ZM197.875 72.5691C199.586 73.3794 201.506 74.0022 203.628 74.4442L204.037 72.478C202.046 72.0631 200.281 71.4861 198.735 70.754L197.875 72.5691ZM203.628 74.4442C205.741 74.8845 207.738 75.1081 209.617 75.1081V73.0996C207.896 73.0996 206.038 72.8947 204.037 72.478L203.628 74.4442ZM209.617 75.1081C212.464 75.1081 214.7 74.7539 216.079 73.8517L214.98 72.1707C214.132 72.7254 212.425 73.0996 209.617 73.0996V75.1081ZM216.087 73.8468C217.445 72.9417 218.269 71.7177 218.269 70.1833H216.261C216.261 70.8769 215.929 71.5382 214.973 72.1756L216.087 73.8468ZM218.269 70.1833C218.269 68.869 217.703 67.7801 216.64 66.9968L215.448 68.6137C216.014 69.0301 216.261 69.5266 216.261 70.1833H218.269ZM216.661 67.0125C215.697 66.263 214.109 65.7131 212.075 65.2805L211.657 67.245C213.652 67.6693 214.849 68.1478 215.428 68.5979L216.661 67.0125ZM212.076 65.2807L204.557 63.6739L204.137 65.638L211.657 67.2448L212.076 65.2807ZM204.552 63.6728C200.557 62.8406 197.712 61.4095 195.888 59.4691L194.424 60.8448C196.628 63.1892 199.91 64.7574 204.142 65.6391L204.552 63.6728ZM195.888 59.4691C194.075 57.5412 193.139 55.0368 193.139 51.866H191.131C191.131 55.465 192.209 58.488 194.424 60.8448L195.888 59.4691ZM193.139 51.866C193.139 49.7768 193.56 47.9193 194.383 46.2736L192.587 45.3754C191.61 47.3288 191.131 49.499 191.131 51.866H193.139ZM194.379 46.2819C195.253 44.5743 196.462 43.1252 198.018 41.9286L196.793 40.3367C195.007 41.711 193.602 43.3898 192.591 45.3671L194.379 46.2819ZM198.008 41.9361C199.615 40.7307 201.518 39.795 203.732 39.139L203.162 37.2133C200.748 37.9285 198.623 38.9638 196.803 40.3293L198.008 41.9361ZM203.743 39.1356C205.99 38.4413 208.502 38.0878 211.288 38.0878V36.0793C208.333 36.0793 205.617 36.4542 203.15 37.2167L203.743 39.1356ZM211.288 38.0878C213.438 38.0878 215.613 38.3358 217.815 38.8343L218.258 36.8754C215.918 36.3455 213.594 36.0793 211.288 36.0793V38.0878ZM217.836 38.8389C220.064 39.2926 221.947 39.9869 223.504 40.9051L224.524 39.175C222.739 38.1222 220.637 37.3597 218.237 36.8708L217.836 38.8389ZM223.549 40.9304C224.365 41.356 224.904 41.9124 225.228 42.5928L227.041 41.7292C226.508 40.61 225.634 39.7525 224.478 39.1497L223.549 40.9304ZM225.228 42.5928C225.58 43.3323 225.718 44.096 225.648 44.9019L227.649 45.0759C227.751 43.9109 227.546 42.7892 227.041 41.7292L225.228 42.5928ZM225.649 44.898C225.581 45.6404 225.316 46.285 224.845 46.8571L226.396 48.1339C227.124 47.2492 227.545 46.2228 227.649 45.0799L225.649 44.898ZM224.823 46.8855C224.417 47.4163 223.847 47.7949 223.053 48.002L223.56 49.9455C224.737 49.6385 225.71 49.0316 226.418 48.1055L224.823 46.8855ZM223.084 47.9945C222.424 48.1446 221.514 48.0471 220.289 47.5335L219.512 49.3857C220.944 49.9861 222.305 50.2314 223.529 49.953L223.084 47.9945ZM220.311 47.5432C218.976 46.9447 217.476 46.5158 215.819 46.2471L215.498 48.2297C217.012 48.4752 218.339 48.8604 219.49 49.376L220.311 47.5432ZM215.85 46.2527C214.249 45.9414 212.685 45.7843 211.159 45.7843V47.7928C212.547 47.7928 213.983 47.9356 215.467 48.2242L215.85 46.2527ZM211.159 45.7843C209.498 45.7843 208.031 45.9856 206.782 46.418L207.439 48.316C208.418 47.9771 209.65 47.7928 211.159 47.7928V45.7843ZM206.815 46.4071C205.572 46.7896 204.536 47.3881 203.784 48.2482L205.295 49.5708C205.742 49.0598 206.421 48.6299 207.406 48.3268L206.815 46.4071ZM203.76 48.2762C203.055 49.1444 202.7 50.1618 202.7 51.2875H204.708C204.708 50.6137 204.91 50.0457 205.319 49.5428L203.76 48.2762ZM202.7 51.2875C202.7 52.5003 203.207 53.5381 204.132 54.3543L205.461 52.8483C204.929 52.3791 204.708 51.8743 204.708 51.2875H202.7ZM204.18 54.394C205.144 55.1436 206.732 55.6935 208.765 56.126L209.183 54.1615C207.189 53.7372 205.992 53.2587 205.413 52.8086L204.18 54.394ZM208.763 56.1255L216.218 57.7323L216.641 55.7689L209.186 54.1621L208.763 56.1255ZM216.217 57.7321C220.267 58.6089 223.168 60.0244 225.039 61.8954L226.459 60.4752C224.217 58.2328 220.905 56.6919 216.642 55.7691L216.217 57.7321ZM225.039 61.8954C226.881 63.7379 227.83 66.1473 227.83 69.2192H229.838C229.838 65.6926 228.73 62.7461 226.459 60.4752L225.039 61.8954ZM227.83 69.2192C227.83 71.3083 227.409 73.1659 226.586 74.8116L228.383 75.7098C229.359 73.7564 229.838 71.5862 229.838 69.2192H227.83ZM226.586 74.8116C225.757 76.4689 224.572 77.8948 223.016 79.0923L224.24 80.6842C226.026 79.3108 227.412 77.6517 228.383 75.7098L226.586 74.8116ZM223.029 79.0824C221.469 80.2421 219.568 81.1582 217.306 81.8162L217.867 83.7447C220.318 83.0316 222.445 82.0195 224.227 80.6941L223.029 79.0824ZM217.306 81.8162C215.057 82.4705 212.497 82.8046 209.617 82.8046V84.813C212.65 84.813 215.403 84.4616 217.867 83.7447L217.306 81.8162Z"
        fill="white"
      />
      <path
        d="M58.4865 16.5919C62.3325 21.1287 58.9785 30.2931 53.2272 35.1687C47.476 40.0444 37.8862 41.8532 34.0401 37.3164C30.194 32.7796 32.5487 24.4625 39.2993 18.7396C46.05 13.0167 54.6404 12.0551 58.4865 16.5919Z"
        fill="#FFF7DD"
      />
      <defs>
        <filter
          id="filter0_d_0_480"
          x="313.034"
          y="39.4724"
          width="38.1611"
          height="49.0212"
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
          <feOffset dy="8.03391" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.835982 0 0 0 0 0.251667 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_480"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_480"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_0_480"
          x="0"
          y="0"
          width="329.39"
          height="128.542"
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
          <feOffset dy="8.03391" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.835982 0 0 0 0 0.251667 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_480"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_480"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_di_0_480"
          x="3.04248"
          y="6.02539"
          width="316.306"
          height="108.458"
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
          <feOffset dy="8.03391" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.929167 0 0 0 0 0.72458 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_480"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_480"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-7" dy="8" />
          <feGaussianBlur stdDeviation="9.9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.929412 0 0 0 0 0.72549 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_0_480"
          />
        </filter>
      </defs>
    </svg>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

interface PlayButtonProp {
  className: string;
  navigateId: number;
}

export const PlayButtonSvg = ({ className, navigateId }: PlayButtonProp) => {
  let navigate = useNavigate();
  console.log(className);
  return (
    <svg
      className={className}
      width="373"
      height="129"
      viewBox="0 0 373 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => navigate(`/${navigateId}`)}
      style={{alignSelf: "end" , cursor: "pointer" }} 
    >
      <g filter="url(#filter0_d_0_601)">
        <path
          d="M313.034 49.5297C313.034 41.7991 321.403 36.9674 328.097 40.8328L346.174 51.2691C352.869 55.1344 352.869 64.7977 346.174 68.663L328.097 79.0994C321.403 82.9647 313.034 78.1331 313.034 70.4024L313.034 49.5297Z"
          fill="#FFDF6D"
        />
      </g>
      <g filter="url(#filter1_d_0_601)">
        <rect width="329.39" height="120.509" rx="40.1695" fill="#FFDF6D" />
      </g>
      <g filter="url(#filter2_di_0_601)">
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
        d="M86.7885 83.6802C84.9032 83.6802 83.4464 83.1661 82.4181 82.1377C81.3897 81.0665 80.8756 79.5883 80.8756 77.703V43.7678C80.8756 41.8396 81.3897 40.3614 82.4181 39.3331C83.4893 38.3047 84.9675 37.7906 86.8528 37.7906H102.664C107.805 37.7906 111.769 39.1188 114.554 41.7754C117.382 44.3891 118.796 48.0097 118.796 52.6372C118.796 57.2648 117.382 60.9068 114.554 63.5633C111.769 66.177 107.805 67.4839 102.664 67.4839H92.7015V77.703C92.7015 79.5883 92.2087 81.0665 91.2232 82.1377C90.2378 83.1661 88.7595 83.6802 86.7885 83.6802ZM92.7015 58.4216H100.607C102.835 58.4216 104.549 57.9503 105.749 57.0077C106.948 56.0222 107.548 54.5654 107.548 52.6372C107.548 50.6662 106.948 49.2094 105.749 48.2668C104.549 47.3241 102.835 46.8528 100.607 46.8528H92.7015V58.4216ZM134.142 83.1018C132.257 83.1018 130.779 82.5876 129.708 81.5593C128.679 80.4881 128.165 79.0099 128.165 77.1246V43.7035C128.165 41.7754 128.679 40.2971 129.708 39.2688C130.736 38.2405 132.193 37.7263 134.078 37.7263C136.006 37.7263 137.463 38.2405 138.449 39.2688C139.477 40.2971 139.991 41.7754 139.991 43.7035V73.2683H155.673C157.301 73.2683 158.544 73.6968 159.401 74.5537C160.301 75.3678 160.751 76.5676 160.751 78.1529C160.751 79.7383 160.301 80.9594 159.401 81.8164C158.544 82.6733 157.301 83.1018 155.673 83.1018H134.142ZM171.174 83.6802C169.845 83.6802 168.731 83.3803 167.832 82.7805C166.932 82.1377 166.375 81.2808 166.161 80.2096C165.946 79.0956 166.139 77.853 166.739 76.4819L182.743 42.0325C183.514 40.3614 184.456 39.1402 185.57 38.369C186.727 37.5977 188.034 37.2121 189.491 37.2121C190.948 37.2121 192.212 37.5977 193.283 38.369C194.397 39.1402 195.361 40.3614 196.175 42.0325L212.179 76.4819C212.864 77.853 213.1 79.0956 212.886 80.2096C212.714 81.3236 212.179 82.1806 211.279 82.7805C210.422 83.3803 209.351 83.6802 208.065 83.6802C206.352 83.6802 205.023 83.2946 204.081 82.5234C203.181 81.7521 202.367 80.5095 201.638 78.7956L198.168 70.6332L202.667 73.911H176.187L180.75 70.6332L177.279 78.7956C176.508 80.5095 175.716 81.7521 174.901 82.5234C174.087 83.2946 172.845 83.6802 171.174 83.6802ZM189.362 50.1306L181.907 67.9338L180.107 64.8488H198.81L197.011 67.9338L189.491 50.1306H189.362ZM234.305 83.6802C232.42 83.6802 230.963 83.1661 229.935 82.1377C228.906 81.0665 228.392 79.5455 228.392 77.5745V59.9641L230.835 66.4555L216.052 45.1818C215.324 44.1534 215.002 43.018 215.088 41.7754C215.217 40.4899 215.731 39.4188 216.631 38.5618C217.573 37.662 218.901 37.2121 220.615 37.2121C221.815 37.2121 222.908 37.512 223.893 38.1119C224.879 38.6689 225.8 39.633 226.657 41.0041L235.655 54.244H233.341L242.339 40.9398C243.239 39.5687 244.16 38.6047 245.103 38.0476C246.045 37.4906 247.159 37.2121 248.445 37.2121C250.073 37.2121 251.337 37.6192 252.237 38.4333C253.137 39.2474 253.608 40.2757 253.651 41.5183C253.737 42.7609 253.351 44.0249 252.494 45.3103L237.84 66.4555L240.218 59.9641V77.5745C240.218 81.645 238.247 83.6802 234.305 83.6802Z"
        fill="white"
      />
      <path
        d="M82.4181 82.1377L81.6936 82.8332L81.7007 82.8406L81.708 82.8478L82.4181 82.1377ZM82.4181 39.3331L81.7226 38.6086L81.7152 38.6157L81.708 38.623L82.4181 39.3331ZM114.554 41.7754L113.861 42.502L113.866 42.5075L113.872 42.5129L114.554 41.7754ZM114.554 63.5633L115.241 64.2956L115.241 64.2953L114.554 63.5633ZM92.7015 67.4839V66.4796H91.6972V67.4839H92.7015ZM91.2232 82.1377L91.9483 82.8326L91.9554 82.8252L91.9623 82.8177L91.2232 82.1377ZM92.7015 58.4216H91.6972V59.4259H92.7015V58.4216ZM105.749 57.0077L106.369 57.7973L106.378 57.7906L106.386 57.7837L105.749 57.0077ZM105.749 48.2668L106.369 47.4771V47.4771L105.749 48.2668ZM92.7015 46.8528V45.8486H91.6972V46.8528H92.7015ZM86.7885 82.676C85.0872 82.676 83.917 82.2165 83.1282 81.4276L81.708 82.8478C82.9758 84.1157 84.7192 84.6845 86.7885 84.6845V82.676ZM83.1425 81.4423C82.3386 80.6049 81.8798 79.4021 81.8798 77.703H79.8713C79.8713 79.7746 80.4409 81.5282 81.6936 82.8332L83.1425 81.4423ZM81.8798 77.703V43.7678H79.8713V77.703H81.8798ZM81.8798 43.7678C81.8798 42.0162 82.3434 40.828 83.1282 40.0432L81.708 38.623C80.4361 39.8948 79.8713 41.6631 79.8713 43.7678H81.8798ZM83.1135 40.0575C83.951 39.2536 85.1538 38.7948 86.8528 38.7948V36.7863C84.7813 36.7863 83.0276 37.3559 81.7226 38.6086L83.1135 40.0575ZM86.8528 38.7948H102.664V36.7863H86.8528V38.7948ZM102.664 38.7948C107.636 38.7948 111.318 40.0768 113.861 42.502L115.247 41.0487C112.219 38.1609 107.974 36.7863 102.664 36.7863V38.7948ZM113.872 42.5129C116.453 44.8986 117.791 48.2285 117.791 52.6372H119.8C119.8 47.7908 118.31 43.8796 115.235 41.0379L113.872 42.5129ZM117.791 52.6372C117.791 57.0454 116.453 60.4009 113.866 62.8314L115.241 64.2953C118.31 61.4126 119.8 57.4841 119.8 52.6372H117.791ZM113.867 62.8311C111.324 65.2168 107.64 66.4796 102.664 66.4796V68.4881C107.97 68.4881 112.213 67.1372 115.241 64.2956L113.867 62.8311ZM102.664 66.4796H92.7015V68.4881H102.664V66.4796ZM91.6972 67.4839V77.703H93.7057V67.4839H91.6972ZM91.6972 77.703C91.6972 79.4131 91.2535 80.6216 90.4842 81.4578L91.9623 82.8177C93.1639 81.5115 93.7057 79.7635 93.7057 77.703H91.6972ZM90.4982 81.4429C89.7656 82.2073 88.5936 82.676 86.7885 82.676V84.6845C88.9255 84.6845 90.7099 84.1248 91.9483 82.8326L90.4982 81.4429ZM92.7015 59.4259H100.607V57.4174H92.7015V59.4259ZM100.607 59.4259C102.96 59.4259 104.927 58.9302 106.369 57.7973L105.128 56.218C104.171 56.9704 102.71 57.4174 100.607 57.4174V59.4259ZM106.386 57.7837C107.873 56.5621 108.552 54.7864 108.552 52.6372H106.544C106.544 54.3443 106.023 55.4822 105.111 56.2317L106.386 57.7837ZM108.552 52.6372C108.552 50.4559 107.879 48.6634 106.369 47.4771L105.128 49.0564C106.018 49.7555 106.544 50.8766 106.544 52.6372H108.552ZM106.369 47.4771C104.927 46.3442 102.96 45.8486 100.607 45.8486V47.857C102.71 47.857 104.171 48.304 105.128 49.0564L106.369 47.4771ZM100.607 45.8486H92.7015V47.857H100.607V45.8486ZM91.6972 46.8528V58.4216H93.7057V46.8528H91.6972ZM129.708 81.5593L128.983 82.2548L128.997 82.2695L129.012 82.2837L129.708 81.5593ZM129.708 39.2688L130.418 39.9789L129.708 39.2688ZM138.449 39.2688L137.724 39.9636L137.731 39.9713L137.738 39.9789L138.449 39.2688ZM139.991 73.2683H138.987V74.2725H139.991V73.2683ZM159.401 74.5537L158.691 75.2638L158.709 75.2816L158.727 75.2984L159.401 74.5537ZM159.401 81.8164L158.708 81.0892L158.7 81.0976L158.691 81.1063L159.401 81.8164ZM134.142 82.0976C132.443 82.0976 131.241 81.6388 130.403 80.8349L129.012 82.2837C130.317 83.5365 132.071 84.106 134.142 84.106V82.0976ZM130.432 80.8638C129.628 80.0264 129.169 78.8236 129.169 77.1246H127.161C127.161 79.1961 127.73 80.9498 128.983 82.2548L130.432 80.8638ZM129.169 77.1246V43.7035H127.161V77.1246H129.169ZM129.169 43.7035C129.169 41.9519 129.633 40.7637 130.418 39.9789L128.998 38.5587C127.726 39.8306 127.161 41.5989 127.161 43.7035H129.169ZM130.418 39.9789C131.207 39.1901 132.377 38.7305 134.078 38.7305V36.722C132.009 36.722 130.265 37.2908 128.998 38.5587L130.418 39.9789ZM134.078 38.7305C135.833 38.7305 136.987 39.1952 137.724 39.9636L139.174 38.574C137.939 37.2857 136.18 36.722 134.078 36.722V38.7305ZM137.738 39.9789C138.523 40.7637 138.987 41.9519 138.987 43.7035H140.995C140.995 41.5989 140.431 39.8306 139.159 38.5587L137.738 39.9789ZM138.987 43.7035V73.2683H140.995V43.7035H138.987ZM139.991 74.2725H155.673V72.2641H139.991V74.2725ZM155.673 74.2725C157.129 74.2725 158.08 74.6528 158.691 75.2638L160.111 73.8436C159.008 72.7408 157.474 72.2641 155.673 72.2641V74.2725ZM158.727 75.2984C159.357 75.8681 159.746 76.7594 159.746 78.1529H161.755C161.755 76.3758 161.245 74.8676 160.075 73.809L158.727 75.2984ZM159.746 78.1529C159.746 79.5436 159.358 80.4707 158.708 81.0892L160.094 82.5436C161.244 81.4481 161.755 79.933 161.755 78.1529H159.746ZM158.691 81.1063C158.08 81.7173 157.129 82.0976 155.673 82.0976V84.106C157.474 84.106 159.008 83.6293 160.111 82.5265L158.691 81.1063ZM155.673 82.0976H134.142V84.106H155.673V82.0976ZM167.832 82.7804L167.248 83.5976L167.261 83.607L167.275 83.616L167.832 82.7804ZM166.161 80.2096L165.174 80.3993L165.176 80.4065L166.161 80.2096ZM166.739 76.4819L165.828 76.0588L165.823 76.069L165.819 76.0793L166.739 76.4819ZM182.743 42.0325L183.653 42.4556L183.654 42.4533L182.743 42.0325ZM185.57 38.369L185.013 37.5334L185.006 37.5383L184.999 37.5433L185.57 38.369ZM193.283 38.369L192.696 39.184L192.704 39.1894L192.711 39.1947L193.283 38.369ZM196.175 42.0325L197.086 41.6094L197.082 41.601L197.078 41.5926L196.175 42.0325ZM212.179 76.4819L211.268 76.905L211.274 76.9181L211.281 76.931L212.179 76.4819ZM212.886 80.2096L211.9 80.02L211.896 80.0384L211.893 80.0569L212.886 80.2096ZM211.279 82.7804L210.722 81.9449L210.712 81.9512L210.703 81.9577L211.279 82.7804ZM204.081 82.5234L203.427 83.2858L203.436 83.2933L203.445 83.3006L204.081 82.5234ZM201.638 78.7956L202.563 78.4028L202.562 78.4027L201.638 78.7956ZM198.168 70.6332L198.759 69.8215L195.821 67.6811L197.243 71.0261L198.168 70.6332ZM202.667 73.911V74.9153H205.75L203.258 73.0993L202.667 73.911ZM176.187 73.911L175.601 73.0954L173.067 74.9153H176.187V73.911ZM180.75 70.6332L181.674 71.0261L183.078 67.7245L180.164 69.8176L180.75 70.6332ZM177.279 78.7956L178.195 79.2077L178.2 79.1982L178.204 79.1886L177.279 78.7956ZM174.901 82.5234L174.211 81.7943L174.901 82.5234ZM189.362 50.1306V49.1264H188.694L188.436 49.7427L189.362 50.1306ZM181.907 67.9338L181.04 68.4398L182.055 70.1804L182.833 68.3217L181.907 67.9338ZM180.107 64.8488V63.8445H178.359L179.24 65.3548L180.107 64.8488ZM198.81 64.8488L199.678 65.3548L200.559 63.8445H198.81V64.8488ZM197.011 67.9338L196.086 68.3245L196.867 70.1737L197.878 68.4398L197.011 67.9338ZM189.491 50.1306L190.416 49.7399L190.157 49.1264H189.491V50.1306ZM171.174 82.676C169.998 82.676 169.089 82.4119 168.389 81.9449L167.275 83.616C168.374 84.3487 169.693 84.6845 171.174 84.6845V82.676ZM168.415 81.9633C167.72 81.4668 167.309 80.8303 167.145 80.0127L165.176 80.4065C165.441 81.7313 166.143 82.8086 167.248 83.5976L168.415 81.9633ZM167.147 80.02C166.981 79.1602 167.115 78.128 167.659 76.8844L165.819 76.0793C165.163 77.578 164.911 79.0309 165.174 80.3992L167.147 80.02ZM167.65 76.905L183.653 42.4556L181.832 41.6094L165.828 76.0588L167.65 76.905ZM183.654 42.4533C184.376 40.889 185.219 39.8335 186.142 39.1947L184.999 37.5433C183.694 38.447 182.651 39.8338 181.831 41.6116L183.654 42.4533ZM186.128 39.2046C187.111 38.5487 188.222 38.2164 189.491 38.2164V36.2079C187.846 36.2079 186.343 36.6468 185.013 37.5334L186.128 39.2046ZM189.491 38.2164C190.76 38.2164 191.814 38.5485 192.696 39.184L193.87 37.554C192.61 36.647 191.136 36.2079 189.491 36.2079V38.2164ZM192.711 39.1947C193.641 39.8381 194.507 40.9011 195.272 42.4723L197.078 41.5926C196.215 39.8217 195.153 38.4424 193.855 37.5433L192.711 39.1947ZM195.264 42.4556L211.268 76.905L213.09 76.0588L197.086 41.6094L195.264 42.4556ZM211.281 76.931C211.902 78.1734 212.06 79.1877 211.9 80.02L213.872 80.3992C214.14 79.0034 213.827 77.5326 213.077 76.0328L211.281 76.931ZM211.893 80.0569C211.763 80.9056 211.376 81.5087 210.722 81.9449L211.836 83.616C212.981 82.8524 213.666 81.7417 213.878 80.3623L211.893 80.0569ZM210.703 81.9577C210.05 82.4147 209.193 82.676 208.065 82.676V84.6845C209.509 84.6845 210.794 84.3459 211.855 83.6032L210.703 81.9577ZM208.065 82.676C206.49 82.676 205.419 82.3209 204.717 81.7461L203.445 83.3006C204.627 84.2683 206.213 84.6845 208.065 84.6845V82.676ZM204.734 81.7609C204 81.1317 203.261 80.0474 202.563 78.4028L200.714 79.1884C201.472 80.9717 202.361 82.3725 203.427 83.2858L204.734 81.7609ZM202.562 78.4027L199.092 70.2402L197.243 71.0261L200.714 79.1886L202.562 78.4027ZM197.576 71.4448L202.075 74.7227L203.258 73.0993L198.759 69.8215L197.576 71.4448ZM202.667 72.9068H176.187V74.9153H202.667V72.9068ZM176.773 74.7266L181.336 71.4488L180.164 69.8176L175.601 73.0954L176.773 74.7266ZM179.826 70.2402L176.355 78.4027L178.204 79.1886L181.674 71.0261L179.826 70.2402ZM176.364 78.3835C175.615 80.0479 174.887 81.1539 174.211 81.7943L175.592 83.2524C176.544 82.3503 177.402 80.9712 178.195 79.2077L176.364 78.3835ZM174.211 81.7943C173.657 82.319 172.712 82.676 171.174 82.676V84.6845C172.978 84.6845 174.518 84.2703 175.592 83.2524L174.211 81.7943ZM188.436 49.7427L180.981 67.5459L182.833 68.3217L190.289 50.5185L188.436 49.7427ZM182.774 67.4278L180.975 64.3428L179.24 65.3548L181.04 68.4398L182.774 67.4278ZM180.107 65.853H198.81V63.8445H180.107V65.853ZM197.943 64.3428L196.143 67.4278L197.878 68.4398L199.678 65.3548L197.943 64.3428ZM197.936 67.543L190.416 49.7399L188.566 50.5214L196.086 68.3245L197.936 67.543ZM189.491 49.1264H189.362V51.1349H189.491V49.1264ZM229.935 82.1377L229.21 82.8332L229.217 82.8406L229.225 82.8478L229.935 82.1377ZM228.392 59.9641L229.332 59.6105L227.388 59.9641H228.392ZM230.835 66.4555L230.01 67.0286L231.774 66.1019L230.835 66.4555ZM216.052 45.1817L216.877 44.6087L216.872 44.6013L216.052 45.1817ZM215.088 41.7754L214.089 41.6754L214.087 41.6908L214.086 41.7063L215.088 41.7754ZM216.631 38.5618L217.323 39.289L217.324 39.2882L216.631 38.5618ZM223.893 38.1119L223.371 38.9697L223.385 38.9782L223.399 38.9862L223.893 38.1119ZM226.657 41.0041L225.805 41.5364L225.815 41.5527L225.826 41.5686L226.657 41.0041ZM235.655 54.244V55.2482H237.552L236.485 53.6795L235.655 54.244ZM233.341 54.244L232.509 53.6814L231.45 55.2482H233.341V54.244ZM242.339 40.9398L243.171 41.5025L243.179 41.4908L242.339 40.9398ZM245.103 38.0476L244.592 37.1831V37.1831L245.103 38.0476ZM252.237 38.4333L251.563 39.1779L252.237 38.4333ZM253.651 41.5183L252.647 41.5529L252.648 41.5702L252.649 41.5874L253.651 41.5183ZM252.494 45.3103L253.319 45.8823L253.325 45.8749L253.33 45.8673L252.494 45.3103ZM237.84 66.4555L236.897 66.1101L238.665 67.0276L237.84 66.4555ZM240.218 59.9641H241.222L239.275 59.6187L240.218 59.9641ZM234.305 82.676C232.604 82.676 231.434 82.2165 230.645 81.4276L229.225 82.8478C230.492 84.1157 232.236 84.6845 234.305 84.6845V82.676ZM230.659 81.4423C229.863 80.6128 229.396 79.3735 229.396 77.5745H227.388C227.388 79.7174 227.95 81.5203 229.21 82.8332L230.659 81.4423ZM229.396 77.5745V59.9641H227.388V77.5745H229.396ZM227.452 60.3178L229.895 66.8092L231.774 66.1019L229.332 59.6105L227.452 60.3178ZM231.659 65.8825L216.877 44.6087L215.227 45.7548L230.01 67.0286L231.659 65.8825ZM216.872 44.6013C216.275 43.7595 216.02 42.853 216.09 41.8445L214.086 41.7063C213.984 43.1829 214.372 44.5473 215.233 45.7622L216.872 44.6013ZM216.087 41.8753C216.193 40.8186 216.605 39.9733 217.323 39.289L215.938 37.8346C214.857 38.8643 214.24 40.1613 214.089 41.6754L216.087 41.8753ZM217.324 39.2882C218.027 38.6173 219.076 38.2164 220.615 38.2164V36.2079C218.727 36.2079 217.12 36.7067 215.937 37.8354L217.324 39.2882ZM220.615 38.2164C221.639 38.2164 222.549 38.4696 223.371 38.9697L224.415 37.2541C223.266 36.5545 221.992 36.2079 220.615 36.2079V38.2164ZM223.399 38.9862C224.19 39.433 225.001 40.2502 225.805 41.5364L227.508 40.4719C226.598 39.0158 225.568 37.9048 224.387 37.2377L223.399 38.9862ZM225.826 41.5686L234.824 54.8085L236.485 53.6795L227.487 40.4396L225.826 41.5686ZM235.655 53.2398H233.341V55.2482H235.655V53.2398ZM234.173 54.8066L243.171 41.5025L241.507 40.3772L232.509 53.6814L234.173 54.8066ZM243.179 41.4908C244.033 40.1896 244.852 39.3621 245.614 38.9122L244.592 37.1831C243.468 37.8472 242.445 38.9479 241.499 40.3889L243.179 41.4908ZM245.614 38.9122C246.376 38.4615 247.308 38.2164 248.445 38.2164V36.2079C247.011 36.2079 245.714 36.5198 244.592 37.1831L245.614 38.9122ZM248.445 38.2164C249.91 38.2164 250.903 38.581 251.563 39.1779L252.911 37.6886C251.771 36.6573 250.236 36.2079 248.445 36.2079V38.2164ZM251.563 39.1779C252.256 39.8047 252.613 40.5744 252.647 41.5529L254.654 41.4837C254.603 39.9771 254.017 38.69 252.911 37.6886L251.563 39.1779ZM252.649 41.5874C252.716 42.5598 252.422 43.6071 251.658 44.7532L253.33 45.8673C254.279 44.4426 254.757 42.9619 254.653 41.4492L252.649 41.5874ZM251.669 44.7383L237.015 65.8835L238.665 67.0276L253.319 45.8823L251.669 44.7383ZM238.783 66.801L241.161 60.3096L239.275 59.6187L236.897 66.1101L238.783 66.801ZM239.214 59.9641V77.5745H241.222V59.9641H239.214ZM239.214 77.5745C239.214 79.4629 238.756 80.6933 238.018 81.4552C237.286 82.2111 236.113 82.676 234.305 82.676V84.6845C236.439 84.6845 238.222 84.1317 239.461 82.8524C240.694 81.5791 241.222 79.7566 241.222 77.5745H239.214Z"
        fill="white"
      />
      <path
        d="M58.4865 16.5919C62.3325 21.1287 58.9785 30.2931 53.2272 35.1687C47.476 40.0444 37.8862 41.8532 34.0401 37.3164C30.194 32.7796 32.5487 24.4625 39.2993 18.7396C46.05 13.0167 54.6404 12.0551 58.4865 16.5919Z"
        fill="#FFF7DD"
      />
      <defs>
        <filter
          id="filter0_d_0_601"
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
            result="effect1_dropShadow_0_601"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_601"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_0_601"
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
            result="effect1_dropShadow_0_601"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_601"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_di_0_601"
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
            result="effect1_dropShadow_0_601"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_601"
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
            result="effect2_innerShadow_0_601"
          />
        </filter>
      </defs>
    </svg>
  );
};

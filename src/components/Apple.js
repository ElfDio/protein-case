import React from "react";
import "../index.scss";

// className={['tree' + " " + this.props.item]} -- burası prosptan gelecek değere göre animasyonu çalıştıracağı classı alıyor.

class Apple extends React.Component{
  render(){
    return(
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={['tree' + " " + this.props.item]} viewBox="0 0 2048.000000 2048.000000"  preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,2048.000000) scale(0.100000,-0.100000)" fill="#ca0808" stroke="none">
            <path d="M11458 18492 c-143 -153 -363 -438 -535 -697 -635 -950 -1060 -2049
                -1232 -3180 -17 -107 -61 -471 -61 -498 0 -4 -43 30 -96 75 -649 558 -1400
                924 -2222 1083 -654 126 -1395 109 -2017 -47 -654 -163 -1196 -459 -1648 -898
                -683 -663 -1060 -1524 -1184 -2700 -22 -210 -25 -983 -5 -1210 43 -481 106
                -895 228 -1495 336 -1648 868 -3041 1569 -4110 922 -1407 2115 -2212 3340
                -2251 533 -17 1088 162 1718 554 274 172 623 438 835 637 l92 87 78 -74 c106
                -101 299 -261 467 -386 624 -467 1231 -741 1786 -808 242 -29 594 -5 877 61
                474 109 958 339 1385 658 362 271 715 618 1019 1002 764 967 1359 2267 1763
                3850 196 770 341 1570 402 2215 25 264 25 1033 0 1270 -84 797 -273 1414 -607
                1974 -273 459 -649 851 -1091 1139 -498 324 -1089 524 -1749 592 -80 9 -248
                18 -375 21 -1171 32 -2297 -362 -3193 -1116 -41 -34 -76 -60 -78 -57 -2 2 5
                77 16 168 143 1156 582 2205 1254 2994 153 179 409 426 566 546 19 15 33 29
                30 32 -3 3 -289 147 -637 320 l-631 316 -64 -67z"
            />
          </g>
        </svg>
    )
  }
}
export default Apple;
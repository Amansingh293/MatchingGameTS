import { FaAppleAlt } from "react-icons/fa";

import {
  GiOrange,
  GiBanana,
  GiGrapes,
  GiWatermelon,
  GiKiwiFruit,
} from "react-icons/gi";

interface leftData {
  icon: React.ComponentType;
  isVisited: boolean;
  isRemoved: boolean;
  color: string;
}

interface rightData {
  name: string;
  isVisited: boolean;
  isRemoved: boolean;
}
interface mapperTypes {
  [name: string]: React.ComponentType<{}>;
}

export const leftDataArray: leftData[] = [
  {
    icon: FaAppleAlt,
    isVisited: false,
    isRemoved: false,
    color: "text-rose-700",
  },
  {
    icon: GiOrange,
    isVisited: false,
    isRemoved: false,
    color: "text-orange-400",
  },
  {
    icon: GiBanana,
    isVisited: false,
    isRemoved: false,
    color: "text-yellow-300",
  },
  {
    icon: GiGrapes,
    isVisited: false,
    isRemoved: false,
    color: "text-indigo-700",
  },
  {
    icon: GiWatermelon,
    isVisited: false,
    isRemoved: false,
    color: "text-emerald-700",
  },
  {
    icon: GiKiwiFruit,
    isVisited: false,
    isRemoved: false,
    color: "text-amber-700",
  },
];
export const rightDataArray: rightData[] = [
  {
    name: "A",
    isVisited: false,
    isRemoved: false,
  },
  {
    name: "O",
    isVisited: false,
    isRemoved: false,
  },
  {
    name: "B",
    isVisited: false,
    isRemoved: false,
  },
  {
    name: "G",
    isVisited: false,
    isRemoved: false,
  },
  {
    name: "W",
    isVisited: false,
    isRemoved: false,
  },
  {
    name: "K",
    isVisited: false,
    isRemoved: false,
  },
];

export const mapper : mapperTypes={
  "A":FaAppleAlt,
  "O":GiOrange,
  "B":GiBanana,
  "G":GiGrapes,
  "W":GiWatermelon,
  "K":GiKiwiFruit,
};

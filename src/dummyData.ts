import { FaAppleAlt } from "react-icons/fa";

import {
  GiOrange,
  GiBanana,
  GiGrapes,
  GiWatermelon,
  GiKiwiFruit,
} from "react-icons/gi";

export interface data {
  icon: React.ComponentType;
  name: string;
  isVisited: boolean;
  isRemoved: boolean;
  color: string;
}

export interface mapperTypes {
  [name: string]: React.ComponentType<{}>;
}

export const dataArray: data[] = [
  {
    icon: FaAppleAlt,
    name: "A",
    isVisited: false,
    isRemoved: false,
    color: "text-rose-700",
  },
  {
    icon: GiOrange,
    name: "O",
    isVisited: false,
    isRemoved: false,
    color: "text-orange-400",
  },
  {
    icon: GiBanana,
    name: "B",
    isVisited: false,
    isRemoved: false,
    color: "text-yellow-300",
  },
  {
    icon: GiGrapes,
    name: "G",
    isVisited: false,
    isRemoved: false,
    color: "text-indigo-700",
  },
  {
    icon: GiWatermelon,
    name: "W",
    isVisited: false,
    isRemoved: false,
    color: "text-emerald-700",
  },
  {
    icon: GiKiwiFruit,
    name: "K",
    isVisited: false,
    isRemoved: false,
    color: "text-amber-700",
  },
];

export const mapper: mapperTypes = {
  A: FaAppleAlt,
  O: GiOrange,
  B: GiBanana,
  G: GiGrapes,
  W: GiWatermelon,
  K: GiKiwiFruit,
};

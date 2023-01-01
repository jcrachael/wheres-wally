import level01Img from "../img/levels/Level_01.svg";
import wallyImg from "../img/characters/wally.svg";
import wandaImg from "../img/characters/wanda.svg";
import oswaldImg from "../img/characters/oswald.svg";

export const levels = [
  {
    level: 1,
    img: level01Img,
    chars: [
      {
        id: 0,
        name: "Wally",
        img: wallyImg,
        x_min: 872,
        x_max: 926,
        y_min: 435,
        y_max: 500,
        found: false,
      },
      {
        id: 1,
        name: "Wanda",
        img: wandaImg,
        x_min: 328,
        x_max: 348,
        y_min: 139,
        y_max: 177,
        found: false,
      },
      {
        id: 2,
        name: "Oswald",
        img: oswaldImg,
        x_min: 63,
        x_max: 83,
        y_min: 355,
        y_max: 390,
        found: false,
      },
    ],
  },
];

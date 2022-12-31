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
        name: "Wally",
        img: wallyImg,
        x_min: 872,
        x_max: 926,
        y_min: 699,
        y_max: 764,
        found: false,
      },
      {
        name: "Wanda",
        img: wandaImg,
        x_min: 328,
        x_max: 348,
        y_min: 402,
        y_max: 440,
        found: false,
      },
      {
        name: "Oswald",
        img: oswaldImg,
        x_min: 63,
        x_max: 83,
        y_min: 618,
        y_max: 652,
        found: false,
      },
    ],
  },
];

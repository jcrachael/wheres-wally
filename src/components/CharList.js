// Char images
import wally from "../img/characters/wally.svg";
import wanda from "../img/characters/wanda.svg";
import oswald from "../img/characters/oswald.svg";

export default function CharList() {
  return (
    <div className="chars">
      <div className="wally char">
        <img src={wally} alt="Wally" className="wally-img char-img" />
        <p className="char-name">Wally</p>
      </div>
      <div className="wanda char">
        <img src={wanda} alt="Wanda" className="wanda-img char-img" />
        <p className="char-name">Wanda</p>
      </div>
      <div className="oswald char">
        <img src={oswald} alt="Oswald" className="oswald-img char-img" />
        <p className="char-name">Oswald</p>
      </div>
    </div>
  );
}

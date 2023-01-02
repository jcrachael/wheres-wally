import checkMarkImg from "../img/check-symbol.png";

export default function Char({ char }) {
  const name = char.name;

  const checkMark = (
    <div className="checkMark">
      <img src={checkMarkImg} alt="Found!" />
    </div>
  );

  return (
    <div
      className={`${name.toLowerCase()} char ${char.found && "found"}`}
      key={char.id}
    >
      <div className="char-img-container">
        <img
          src={char.img}
          alt={name}
          className={`${name.toLowerCase()}-img char-img`}
        />
        {char.found && checkMark}
      </div>
      <p className="char-name">{name} </p>
    </div>
  );
}

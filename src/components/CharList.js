import Char from "./Char";

export default function CharList({ currentLevel }) {
  const list = currentLevel.chars.map((char) => {
    return <Char key={char.id} char={char} />;
  });

  return <div className="chars">{list}</div>;
}

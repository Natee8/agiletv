import BorderIcons from "../../../utils/circleIcons";
import styles from "./icons.module.css";
import { IoAddSharp } from "react-icons/io5";
import { PiShareFatFill, PiShareFatLight } from "react-icons/pi";
import { TiMediaRecord } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { FaGrinStars } from "react-icons/fa";
import { BsCollectionPlayFill } from "react-icons/bs";

const iconsData = [
  { label: "Minha Lista", initial: <IoAddSharp />, alternate: <FiCheck /> },
  { label: "Avaliar", initial: <CiStar />, alternate: <FaGrinStars /> },
  {
    label: "Gravar",
    initial: <TiMediaRecord />,
    alternate: <BsCollectionPlayFill />,
  },
  {
    label: "Compartilhar",
    initial: <PiShareFatLight />,
    alternate: <PiShareFatFill />,
  },
];

const Icons: React.FC = () => {
  const [icons, setIcons] = useState(Array(iconsData.length).fill(false));

  const altIcon = (position: number) => {
    setIcons((prevIcons) =>
      prevIcons.map((state, icon) => (icon === position ? !state : state))
    );
  };

  return (
    <div className={styles.container}>
      {iconsData.map((item, position) => (
        <div
          key={position}
          onClick={() => altIcon(position)}
          className={styles.centralize}
        >
          <BorderIcons icon={icons[position] ? item.alternate : item.initial} />
          <p className={styles.sizeP}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Icons;

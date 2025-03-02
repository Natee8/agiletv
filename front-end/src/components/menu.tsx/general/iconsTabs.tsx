import BorderIcons from "../../../utils/circleIcons";
import styles from "./icons.module.css";
import { IoAddSharp } from "react-icons/io5";
import { PiShareFatLight } from "react-icons/pi";
import { TiMediaRecord } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
const Icons: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centralize}>
        <BorderIcons icon={<IoAddSharp />} />
        <p className={styles.sizeP}>Minha Lista</p>
      </div>
      <div className={styles.centralize}>
        <BorderIcons icon={<CiStar />} />
        <p className={styles.sizeP}>Avaliar</p>
      </div>
      <div className={styles.centralize}>
        <BorderIcons icon={<TiMediaRecord />} />
        <p className={styles.sizeP}>Gravar</p>
      </div>
      <div className={styles.centralize}>
        <BorderIcons icon={<PiShareFatLight />} />
        <p className={styles.sizeP}>Compartilhar</p>
      </div>
    </div>
  );
};

export default Icons;

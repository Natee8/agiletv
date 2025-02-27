import { GiTrophyCup } from "react-icons/gi";
import styles from "./awards.module.css";

const Awards: React.FC = () => {
  return (
    <div className={styles.trophyStyle}>
      <GiTrophyCup />
      <p>Producers Guild of America</p>
    </div>
  );
};

export default Awards;

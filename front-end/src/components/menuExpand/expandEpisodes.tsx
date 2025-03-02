import { BsPlayFill } from "react-icons/bs";
import BorderIcons from "../../utils/circleIcons";
import styles from "./expandEpisodes.module.css";
import Expand from "./expand";
const Episodes: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.episodes}>
        <p>01</p>
        <p>Nice Work</p>
        <BorderIcons icon={<BsPlayFill style={{ color: "white" }} />} />
        <Expand />
      </div>
    </div>
  );
};

export default Episodes;

import { Utils } from "../types/utils";
import styles from "./circle.module.css";
const BorderIcons: React.FC<Partial<Utils>> = ({ icon }) => {
  return <div className={styles.borderContainer}>{icon}</div>;
};

export default BorderIcons;

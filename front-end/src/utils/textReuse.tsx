import { Utils } from "../types/utils";
import styles from "./texts.module.css";

const TextP: React.FC<Partial<Utils>> = ({ text }) => {
  return (
    <div className={styles.textTitle}>
      <p>{text}</p>
    </div>
  );
};

export default TextP;

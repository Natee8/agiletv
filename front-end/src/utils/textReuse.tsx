import { Utils } from "../types/utils";
import styles from "./texts.module.css";

const TextP: React.FC<Partial<Utils>> = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className={styles.textTitle}>
      <p>{text}</p>
    </div>
  );
};

export default TextP;

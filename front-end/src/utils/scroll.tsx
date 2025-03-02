import { ScrollProp } from "../types/utils";
import styles from "./scroll.module.css";

const Scroll: React.FC<ScrollProp> = ({ width }) => {
  return (
    <div className={styles.scrollBg}>
      <div className={`${styles.scroll} ${styles[width]}`}></div>
    </div>
  );
};

export default Scroll;

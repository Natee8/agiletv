import styles from "./scroll.module.css";
const Scroll: React.FC = () => {
  return (
    <div className={styles.scrollBg}>
      <div className={styles.scroll}></div>
    </div>
  );
};

export default Scroll;

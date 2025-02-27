import Icons from "./iconsTabs";
import Synopsis from "./synopsis";
import styles from "./general.module.css";

const General: React.FC = () => {
  return (
    <div className={styles.container}>
      <Icons />
      <Synopsis />
    </div>
  );
};

export default General;

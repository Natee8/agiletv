import { Series } from "../../types/series";
import TextLight from "./tags";
import styles from "./bg.module.css";

const Infos: React.FC<Partial<Series>> = ({ Title }) => {
  return (
    <div className={styles.titlePosition}>
      <div>
        <h1>{Title}</h1>
      </div>
      <div>
        <TextLight />
      </div>
    </div>
  );
};

export default Infos;

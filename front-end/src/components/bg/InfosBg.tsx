import { Series } from "../../types/series";
import TextLight from "./tags";
import styles from "./bg.module.css";
import { BsPlayFill } from "react-icons/bs";

const Infos: React.FC<Partial<Series>> = ({ Title }) => {
  return (
    <div>
      <div className={styles.titlePosition}>
        <div>
          <h1>{Title}</h1>
        </div>
        <div>
          <TextLight />
        </div>
      </div>
      <div className={styles.btnPlay}>
        <button>
          <BsPlayFill style={{ fontSize: "20px" }} />
          Assistir Agora
        </button>
      </div>
    </div>
  );
};

export default Infos;

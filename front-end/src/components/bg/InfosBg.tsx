import { Series } from "../../types/series";
import TextLight from "./tags";
import styles from "./bg.module.css";
import { BsPlayFill } from "react-icons/bs";
import { useHidden } from "../../hooks/useHiddenContext";

const Infos: React.FC<Partial<Series>> = ({ Title }) => {
  const { isHidden, setIsHidden } = useHidden();

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
        <button onClick={() => setIsHidden(!isHidden)}>
          <BsPlayFill style={{ fontSize: "20px" }} />
          Assistir Agora
        </button>
      </div>
    </div>
  );
};

export default Infos;

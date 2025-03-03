import { useTp } from "../../../hooks/useTp";
import { Tps } from "../../../types/reducerTp";
import Episodes from "../../menuExpand/expandEpisodes";
import styles from "./play.module.css";
const PlayMobile: React.FC = () => {
  const { dispatch } = useTp();

  return (
    <div className={styles.container}>
      <div className={styles.play}>
        <select
          onChange={(tp) => dispatch({ type: tp.target.value as Tps["type"] })}
          name=""
          id=""
        >
          <option value="T1">Temporada 1</option>
          <option value="T2">Temporada 2</option>
        </select>
        <Episodes />
      </div>
      <div className={styles.message}>
        <p>
          Ops.... nada aqui, clique para assistir para visualizar as temporadas
        </p>
      </div>
    </div>
  );
};
export default PlayMobile;

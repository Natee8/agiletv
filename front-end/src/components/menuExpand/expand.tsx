import { EpisodeList } from "../../types/episodes";
import styles from "./expand.module.css";
const Expand: React.FC<EpisodeList> = ({ Episodes }) => {
  return (
    <div>
      {Episodes?.map((infos) => (
        <div key={infos.ID} className={styles.container}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${infos.Image})` }}
          >
            <div className={styles.barContainer}>
              <div className={styles.barDuration}></div>
            </div>
            <p>{`${infos.Duration}:00`}</p>
          </div>
          <div className={styles.view}>
            <div></div>
          </div>
          <div className={styles.synopsis}>
            <p>{infos.Synopsis}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Expand;

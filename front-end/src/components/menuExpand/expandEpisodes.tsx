import { BsPlayFill } from "react-icons/bs";
import BorderIcons from "../../utils/circleIcons";
import styles from "./expandEpisodes.module.css";
import Expand from "./expand";
import { useApiEps } from "../../hooks/useApiEpisodes";
import { useTp } from "../../hooks/useTp";
import { useState } from "react";
const Episodes: React.FC = () => {
  const { episodes, loading, error } = useApiEps();
  const { state } = useTp();
  const [selectedEpisode, setSelectedEpisode] = useState<string | false>(false);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const numbFilter = state.tp;
  const filterSeason = episodes?.filter(
    (eps) => eps.SeasonNumber === numbFilter
  );

  const ExpandClick = (id: string) => {
    setSelectedEpisode((prev) => (prev === id ? false : id));
  };

  return (
    <div className={styles.container}>
      {filterSeason?.map((eps) => (
        <div key={eps.ID} className={styles.episodes}>
          <div className={styles.infoEps}>
            <p>{eps.EpisodeNumber}</p>
            <p onClick={() => ExpandClick(eps.ID)} className={styles.title}>
              {eps.Title}
            </p>
            <BorderIcons icon={<BsPlayFill style={{ color: "white" }} />} />
          </div>
          {selectedEpisode === eps.ID && <Expand Episodes={[eps]} />}
        </div>
      ))}
    </div>
  );
};

export default Episodes;

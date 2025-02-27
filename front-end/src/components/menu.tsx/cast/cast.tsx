import { useApiContext } from "../../../hooks/useApiContext";
import Card from "../../../utils/card";
import styles from "./cast.module.css";

const Cast: React.FC = () => {
  const { selectedSeries, loading, error } = useApiContext();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.containerRelative}>
      <div className={styles.cardContainer}>
        {selectedSeries?.Cast.map((cast) => (
          <Card ID={cast.ID} Name={cast.Name} Character={cast.Character} />
        ))}
      </div>
    </div>
  );
};
export default Cast;

import { useApiContext } from "../../../hooks/useApiContext";
import styles from "./synopsis.module.css";

const Synopsis: React.FC = () => {
  const { selectedSeries, loading, error } = useApiContext();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={styles.textStyle}>
      <h1>Sinopse:</h1>
      <p>{selectedSeries?.Synopsis}</p>
    </div>
  );
};

export default Synopsis;

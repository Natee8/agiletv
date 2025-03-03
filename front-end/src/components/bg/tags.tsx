import { useApiContext } from "../../hooks/useApiSeries";
import { Genre } from "../../types/series";
import styles from "./bg.module.css";

const TextLight: React.FC<Partial<Genre>> = () => {
  const { selectedSeries, loading, error } = useApiContext();

  const genres = () => {
    return selectedSeries?.Genres.map((genre, idx, arr) => (
      <span key={genre.ID}>
        {genre.Title}
        {idx < arr.length - 1 && <span> / </span>}
      </span>
    ));
  };

  console.log(selectedSeries);
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={styles.pLight}>
      <p>
        {`${selectedSeries?.Reviews}% Indicado`}
        <span> / </span>
        {genres()}
        <span> / </span>
        {selectedSeries?.Year}
        <span> / </span>
        {selectedSeries?.Country}
      </p>
    </div>
  );
};
export default TextLight;

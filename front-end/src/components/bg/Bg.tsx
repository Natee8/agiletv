import styled from "./bg.module.css";
import Infos from "./InfosBg";
import { useApiContext } from "../../hooks/useApiContext";

const Background: React.FC = () => {
  const { selectedSeries, loading, error } = useApiContext();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  //Images.Background;

  return (
    <div>
      <div
        className={styled.container}
        style={{ backgroundImage: `url(${selectedSeries?.Images.Background})` }}
      ></div>
      <Infos Title={selectedSeries?.Title} />
    </div>
  );
};

export default Background;

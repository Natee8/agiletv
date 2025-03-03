import styled from "./bg.module.css";
import { useApiContext } from "../../hooks/useApiSeries";
import Infos from "./infosBg";

const Background: React.FC = () => {
  const { selectedSeries, loading, error } = useApiContext();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  //Images.Background;

  return (
    <div className={styled.container}>
      <div
        className={styled.imageLayer}
        style={{ backgroundImage: `url(${selectedSeries?.Images.Background})` }}
      ></div>
      <Infos Title={selectedSeries?.Title} />
    </div>
  );
};

export default Background;

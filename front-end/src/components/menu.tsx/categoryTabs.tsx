import styles from "./menu.module.css";
import icon from "../../assets/images/favIcon.svg";
import TextP from "../../utils/textReuse";
import { useView } from "../../hooks/useViewContext";
import { TypesView } from "../../types/typesViewTabs";

const FilterTabs: React.FC = () => {
  const { dispatch } = useView();

  const click = (type: TypesView["type"]) => {
    dispatch({ type });
  };

  return (
    <div className={styles.spacingElements}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <TextP onClick={() => click("General")} text="Geral" />
          <p onClick={() => click("Play")} className={styles.play}>
            Assistir
          </p>
          <TextP onClick={() => click("Cast")} text="Elenco" />
          <TextP onClick={() => click("Awards")} text="Principais Prêmios" />
        </div>
        <div>
          <img width={30} src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;

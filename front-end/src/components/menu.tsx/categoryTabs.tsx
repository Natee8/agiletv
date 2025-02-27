import styles from "./menu.module.css";
import icon from "../../assets/images/favIcon.svg";
import TextP from "../../utils/textReuse";
import Scroll from "../../utils/scroll";
const FilterTabs: React.FC = () => {
  return (
    <div className={styles.spacingElements}>
      <div className={styles.container}>
        <TextP text="Geral" />
        <TextP text="Elenco" />
        <TextP text="Principais Premios" />
        <img width={30} src={icon} alt="" />
      </div>
      <Scroll />
    </div>
  );
};

export default FilterTabs;

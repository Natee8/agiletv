import { IoIosArrowForward } from "react-icons/io";
import FilterTabs from "./categoryTabs";
import styles from "./menu.module.css";
import General from "./general/general";
import Cast from "./cast/cast";
import Awards from "./awards/awards";

const Menu: React.FC = () => {
  return (
    <div className={styles.bg}>
      <FilterTabs />
      <General />
      <Cast />
      <Awards />
      <div className={styles.arrowNav}>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Menu;

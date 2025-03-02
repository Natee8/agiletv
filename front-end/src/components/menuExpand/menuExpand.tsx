import { IoCloseOutline } from "react-icons/io5";
import styles from "./menuExpand.module.css";
import TextP from "../../utils/textReuse";
import Scroll from "../../utils/scroll";
import Episodes from "./expandEpisodes";
const MenuExpand: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.icon}>
        <IoCloseOutline />
      </div>
      <div className={styles.seasons}>
        <TextP text="T1" />
        <TextP text="T2" />
        <TextP text="T3" />
        <Scroll />
      </div>
      <div className="containerEpisodes">
        <Episodes />
      </div>
    </div>
  );
};

export default MenuExpand;

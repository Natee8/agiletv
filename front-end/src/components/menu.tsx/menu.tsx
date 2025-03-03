import { IoIosArrowForward } from "react-icons/io";
import FilterTabs from "./categoryTabs";
import styles from "./menu.module.css";

import Cast from "./cast/cast";
import Awards from "./awards/awards";
import PlayMobile from "./playTp/play";
import General from "./general/general";
import { useView } from "../../hooks/useViewContext";

const Menu: React.FC = () => {
  const { state } = useView();
  console.log(state);
  return (
    <div className={styles.bg}>
      <FilterTabs />
      {state.view === "General" && <General />}
      {state.view === "Play" && <PlayMobile />}
      {state.view === "Cast" && <Cast />}
      {state.view === "Awards" && <Awards />}
      {state.view === "Cast" && (
        <div className={styles.arrowNav}>
          <IoIosArrowForward />
        </div>
      )}
    </div>
  );
};

export default Menu;

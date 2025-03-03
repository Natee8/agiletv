import FilterTabs from "./categoryTabs";
import styles from "./menu.module.css";

import Cast from "./cast/cast";
import Awards from "./awards/awards";
import PlayMobile from "./playTp/play";
import General from "./general/general";
import { useView } from "../../hooks/useViewContext";

const Menu: React.FC = () => {
  const { state } = useView();

  return (
    <div className={styles.bg}>
      <FilterTabs />
      {state.view === "General" && <General />}
      {state.view === "Play" && <PlayMobile />}
      {state.view === "Cast" && <Cast />}
      {state.view === "Awards" && <Awards />}
    </div>
  );
};

export default Menu;

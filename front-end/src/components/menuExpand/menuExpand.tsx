import { IoCloseOutline } from "react-icons/io5";
import styles from "./menuExpand.module.css";
import TextP from "../../utils/textReuse";
import Episodes from "./expandEpisodes";
import { useTp } from "../../hooks/useTp";
import { Tps } from "../../types/reducerTp";
import { useHidden } from "../../hooks/useHiddenContext";

const MenuExpand: React.FC = () => {
  const { dispatch } = useTp();

  const click = (type: Tps["type"]) => {
    dispatch({ type });
  };

  const { setIsHidden } = useHidden();

  return (
    <div>
      <div className={styles.icon}>
        <IoCloseOutline onClick={() => setIsHidden(false)} />
      </div>
      <div className={styles.seasons}>
        <TextP onClick={() => click("T1")} text="T1" />
        <TextP onClick={() => click("T2")} text="T2" />
      </div>
      <Episodes />
    </div>
  );
};

export default MenuExpand;

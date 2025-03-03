import { useHidden } from "../../hooks/useHiddenContext";
import MenuExpand from "./menuExpand";
import styles from "./menuExpand.module.css";

const MenuEx: React.FC = () => {
  const { isHidden } = useHidden();
  console.log(isHidden);
  return (
    <div className={styles.menuContainer}>
      {isHidden === true && <MenuExpand />}
    </div>
  );
};
export default MenuEx;

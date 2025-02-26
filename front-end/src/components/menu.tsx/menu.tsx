import FilterTabs from "./categoryTabs";
import styles from "./menu.module.css";

const Menu: React.FC = () => {
  return (
    <div className={styles.bg}>
      <FilterTabs />
    </div>
  );
};

export default Menu;

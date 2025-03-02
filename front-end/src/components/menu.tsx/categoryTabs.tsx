import styles from "./menu.module.css";
import icon from "../../assets/images/favIcon.svg";
import TextP from "../../utils/textReuse";
import Scroll from "../../utils/scroll";
import { useReducer } from "react";
import { MenuActions, State } from "../../types/actions";

const FilterTabs: React.FC = () => {
  const reducer = (state: State, action: MenuActions) => {
    switch (action.type) {
      case "menuGeneral":
        return { ...state, general: "general" };
      case "menuCast":
        return { ...state, cast: "cast" };
      case "menuAwards":
        return { ...state, awards: "awards" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    general: "",
    cast: "",
    awards: "",
  });

  const menu = () => {
    dispatch({ type: "menuGeneral" });
  };

  return (
    <div className={styles.spacingElements}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <TextP text="Geral" />
          <TextP text="Elenco" />
          <TextP text="Principais Premios" />
        </div>
        <div>
          <img width={30} src={icon} alt="" />
        </div>
      </div>
      <Scroll width={state.general} />
    </div>
  );
};

export default FilterTabs;

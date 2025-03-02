import { ApiProvider } from "./context/contextSeries";
import styles from "./App.module.css";
import Menu from "./components/menu.tsx/menu";
import Background from "./components/bg/bg";
import MenuExpand from "./components/menuExpand/menuExpand";

function App() {
  return (
    <div className={styles.container}>
      <ApiProvider>
        <MenuExpand />
        <Background />
        <Menu />
      </ApiProvider>
    </div>
  );
}

export default App;

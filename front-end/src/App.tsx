import { ApiProvider } from "./context/contextApi";
import styles from "./App.module.css";
import Menu from "./components/menu.tsx/menu";
import Background from "./components/bg/bg";

function App() {
  return (
    <div className={styles.container}>
      <ApiProvider>
        <Background />
        <Menu />
      </ApiProvider>
    </div>
  );
}

export default App;

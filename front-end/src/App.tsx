import Background from "./components/bg/Bg";
import Menu from "./components/menuInfo.tsx/menu";
import { ApiProvider } from "./context/contextApi";
import styles from "./App.module.css";

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

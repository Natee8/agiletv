import { ApiProviderSeries } from "./context/contextSeries";
import styles from "./App.module.css";
import Menu from "./components/menu.tsx/menu";
import Background from "./components/bg/bg";
import { ApiProviderEps } from "./context/contextEpisodes";
import { TpProvider } from "./context/tpProvider";
import MenuEx from "./components/menuExpand/menuEx";
import { ContextHiddenProvider } from "./context/providerHidden";
import { ViewProvider } from "./context/viewProvider";

function App() {
  return (
    <div className={styles.container}>
      <ApiProviderSeries>
        <ApiProviderEps>
          <TpProvider>
            <ContextHiddenProvider>
              <ViewProvider>
                <MenuEx />
                <Background />
                <Menu />
              </ViewProvider>
            </ContextHiddenProvider>
          </TpProvider>
        </ApiProviderEps>
      </ApiProviderSeries>
    </div>
  );
}

export default App;

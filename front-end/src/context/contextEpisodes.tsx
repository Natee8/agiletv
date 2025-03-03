import useFetchEpisodes from "../hooks/useEpisodes";
import { ApiContext } from "./createContextEpisodes";
import { ProvidersProps } from "../types/providerProps";

export const ApiProviderEps = ({ children }: ProvidersProps) => {
  const { episodes, loading, error } = useFetchEpisodes();

  return (
    <ApiContext.Provider value={{ episodes, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

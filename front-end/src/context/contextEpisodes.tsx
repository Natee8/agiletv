import useFetchEpisodes from "../hooks/useEpisodes";
import { ApiContext } from "./createContextEpisodes";
import { ApiProvidersProps } from "../types/providerProps";

export const ApiProvider = ({ children }: ApiProvidersProps) => {
  const { episodes, loading, error } = useFetchEpisodes();

  const selectedEpisodes = episodes?.[0] || null;

  return (
    <ApiContext.Provider value={{ selectedEpisodes, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

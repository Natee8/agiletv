import useFetchSeries from "../hooks/useSeries";
import { ApiContext } from "./createContextSeries";
import { ProvidersProps } from "../types/providerProps";

export const ApiProviderSeries = ({ children }: ProvidersProps) => {
  const { series, loading, error } = useFetchSeries();

  const selectedSeries = series?.[0] || null;

  return (
    <ApiContext.Provider value={{ selectedSeries, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

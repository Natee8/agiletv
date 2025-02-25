import useFetchSeries from "../hooks/useSeries";
import { ApiContext } from "./createContextApi";
import { ApiProvidersProps } from "../types/providerProps";

export const ApiProvider = ({ children }: ApiProvidersProps) => {
  const { series, loading, error } = useFetchSeries();

  const selectedSeries = series?.[0] || null;

  return (
    <ApiContext.Provider value={{ selectedSeries, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

import { Series } from "./series";

export interface ApiContextType {
  selectedSeries: Series | null;
  loading: boolean;
  error: string | null;
}

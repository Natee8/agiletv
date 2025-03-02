import { Episodes } from "./episodes";
import { Series } from "./series";

export interface ApiContextTypeSeries {
  selectedSeries: Series | null;
  loading: boolean;
  error: string | null;
}

export interface ApiContextTypeEpisodes {
  selectedEpisodes: Episodes | null;
  loading: boolean;
  error: string | null;
}

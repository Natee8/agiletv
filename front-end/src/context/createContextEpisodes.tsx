import { createContext } from "react";
import { ApiContextTypeEpisodes } from "../types/contextTypeApi";

export const ApiContext = createContext<ApiContextTypeEpisodes | undefined>(
  undefined
);

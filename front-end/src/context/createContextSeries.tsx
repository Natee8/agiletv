import { createContext } from "react";
import { ApiContextTypeSeries } from "../types/contextTypeApi";

export const ApiContext = createContext<ApiContextTypeSeries | undefined>(
  undefined
);

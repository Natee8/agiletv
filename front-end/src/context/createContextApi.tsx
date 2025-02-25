import { createContext } from "react";
import { ApiContextType } from "../types/contextTypeApi";

export const ApiContext = createContext<ApiContextType | undefined>(undefined);

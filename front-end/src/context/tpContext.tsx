import { createContext } from "react";
import { StateTp, Tps } from "../types/reducerTp";

export const tpContext = createContext<{
  state: StateTp;
  dispatch: React.Dispatch<Tps>;
} | null>(null);

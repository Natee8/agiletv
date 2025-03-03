import { ReactNode, useReducer } from "react";
import { tpContext } from "./tpContext";
import { StateTp, Tps } from "../types/reducerTp";

const reducer = (state: StateTp, actions: Tps) => {
  switch (actions.type) {
    case "T1":
      return { ...state, tp: 1 };
    case "T2":
      return { ...state, tp: 2 };
    default:
      return state;
  }
};

export const TpProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { tp: 1 });

  return (
    <tpContext.Provider value={{ state, dispatch }}>
      {children}
    </tpContext.Provider>
  );
};

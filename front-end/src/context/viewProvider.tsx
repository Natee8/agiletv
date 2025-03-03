import { useReducer } from "react";
import { StateView, TypesView } from "../types/typesViewTabs";
import { ViewContext } from "./createContextView";
import { ProvidersProps } from "../types/providerProps";

const initialState: StateView = {
  view: "General",
};

const reducer = (state: StateView, action: TypesView): StateView => {
  switch (action.type) {
    case "General":
      return { ...state, view: "General" };
    case "Play":
      return { ...state, view: "Play" };
    case "Cast":
      return { ...state, view: "Cast" };
    case "Awards":
      return { ...state, view: "Awards" };
    default:
      return state;
  }
};

export const ViewProvider = ({ children }: ProvidersProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ViewContext.Provider value={{ state, dispatch }}>
      {children}
    </ViewContext.Provider>
  );
};

import { createContext } from "react";
import { TypesView, StateView } from "../types/typesViewTabs";

const initialState: StateView = {
  view: "General",
};

export const ViewContext = createContext<{
  state: StateView;
  dispatch: React.Dispatch<TypesView>;
}>({
  state: initialState,
  dispatch: () => {},
});

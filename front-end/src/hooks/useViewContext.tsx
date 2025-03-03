import { useContext } from "react";
import { ViewContext } from "../context/createContextView";

export const useView = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useViewContext deve ser usado dentro de um provider");
  }
  return context;
};

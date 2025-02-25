import { useContext } from "react";
import { ApiContext } from "../context/createContextApi";

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext deve ser usado dentro de ApiProvider");
  }
  return context;
};

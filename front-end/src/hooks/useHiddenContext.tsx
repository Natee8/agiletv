import { useContext } from "react";
import { ContextCreate } from "../context/contextCreateHidden";

export const useHidden = () => {
  const context = useContext(ContextCreate);
  if (!context) {
    throw new Error("useHidden deve ser usado em um provider");
  }
  return context;
};

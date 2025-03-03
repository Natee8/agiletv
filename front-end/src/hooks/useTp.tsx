import { useContext } from "react";
import { tpContext } from "../context/tpContext";

export const useTp = () => {
  const context = useContext(tpContext);

  if (!context) {
    throw new Error("useTp deve ser usado dentro de provider");
  }
  return context;
};

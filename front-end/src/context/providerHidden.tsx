import { useState } from "react";
import { ProvidersProps } from "../types/providerProps";
import { ContextCreate } from "./contextCreateHidden";

export const ContextHiddenProvider = ({ children }: ProvidersProps) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <ContextCreate.Provider value={{ isHidden, setIsHidden }}>
      {children}
    </ContextCreate.Provider>
  );
};

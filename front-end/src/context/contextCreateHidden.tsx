import { createContext } from "react";
import { ContextTypes } from "../types/typesActions";

export const ContextCreate = createContext<ContextTypes | undefined>(undefined);

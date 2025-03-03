import { createContext } from "react";
import { ContextTypes } from "../types/typesHidden";

export const ContextCreate = createContext<ContextTypes | undefined>(undefined);

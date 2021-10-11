import { createContext } from "react";
import { IContext } from "./../Interface/interface";

export const datacontext = createContext<IContext["ctx"] | null>(null);

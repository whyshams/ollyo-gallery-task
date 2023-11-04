// MyContext.js
import { createContext, useContext } from "react";

const Contexts = createContext();

export function useMyContext() {
  return useContext(Contexts);
}

export default Contexts;

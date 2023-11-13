import { useContext } from "react";
import { ReduceContext } from "../contexts/ReduceContext";
export const useReduceContext = () => {
  const state = useContext(ReduceContext);
  return { width: state?.width, setState: state?.setState };
};

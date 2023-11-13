import React, { ReactNode, createContext, useEffect, useReducer } from "react";

type TAtion = {
  type: "Open" | "Close";
};

const initialState = {
  name: "isopen",
  width: "256px",
};

type initValueType = {
  width: string;
  setState: React.Dispatch<TAtion>;
};

export const ReduceContext = createContext<initValueType | null>(null);
export const ReduceContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const reducer = (state: typeof initialState, action: TAtion) => {
    switch (action.type) {
      case "Open":
        return { ...state, width: "258px" };
      case "Close":
        return { ...state, width: "56px" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <ReduceContext.Provider value={{ width: state.width, setState: dispatch }}>{children}</ReduceContext.Provider>;
};

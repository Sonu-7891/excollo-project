import React from "react";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("default");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CursorContext.Provider
      value={{ cursorType, setCursorType, isHovered, setIsHovered }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);

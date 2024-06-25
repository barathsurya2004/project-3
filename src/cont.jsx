import { createContext, useState } from "react";

export const MeshContext = createContext({
  selectedObjects: [],
  setSelectedObjects: () => {},
});

export const MeshContextProvider = ({ children }) => {
  const [selectedObjects, setSelectedObjects] = useState([]);
  return (
    <MeshContext.Provider
      value={{
        selectedObjects,
        setSelectedObjects,
      }}
    >
      {children}
    </MeshContext.Provider>
  );
};

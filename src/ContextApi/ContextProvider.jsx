// MyContextProvider.js
import React, { useState } from "react";
import Contexts from "./Contexts";

const ContextProvider = ({ children }) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  return (
    <Contexts.Provider value={{ selectedPhotos, setSelectedPhotos }}>
      {children}
    </Contexts.Provider>
  );
};

export default ContextProvider;

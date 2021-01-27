import React, { useEffect, useState, createContext, useContext } from "react";
import {
  UserContextProvider,
  LoadingContext,
  Body
} from "./components";

//instalo firebase con "npm i firebase"

function App() {
  const [loading, setLoading] = useContext(LoadingContext);


  if (false) {
    return <div style={{ textAlign: "center" }}>Cargando</div>;
  } else {
    return (
      <UserContextProvider>
          <Body />
      </UserContextProvider>
    );
  }
}

export default App;

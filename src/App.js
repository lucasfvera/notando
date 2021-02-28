import React, { useContext } from "react";
import {
  UserContextProvider,
  LoadingContext,
  Body
} from "./components";

//instalo firebase con "npm i firebase"

function App() {
  const [loading, setLoading] = useContext(LoadingContext);
    return (
      <UserContextProvider>
          <Body />
      </UserContextProvider>
    );
}

export default App;

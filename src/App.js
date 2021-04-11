import React, { useContext } from "react";
//importing feature flags context
import {
  UserContextProvider,
  FeatureFlagsContextProvider,
  LoadingContext,
  Body
} from "./components";

//instalo firebase con "npm i firebase"

function App() {
  const [loading, setLoading] = useContext(LoadingContext);
    return (
      <FeatureFlagsContextProvider>
        <UserContextProvider>
            <Body />
        </UserContextProvider>
      </FeatureFlagsContextProvider>
    );
}

export default App;

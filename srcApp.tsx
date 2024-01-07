import React, { useState } from "react";
import { MetaMaskProvider } from "@wagmi/react-metamask";

const App = () => {
  const [address, setAddress] = useState("");

  return (
    <MetaMaskProvider>
      <div>
        <h1>Connexion au portefeuille</h1>
        <p>Votre adresse Ethereum est : {address}</p>
      </div>
    </MetaMaskProvider>
  );
};

export default App;

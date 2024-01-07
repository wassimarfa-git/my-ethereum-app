import React, { useState } from "react";
import { Contract } from "@wagmi/contracts";

const TokenInfo = ({ contractAddress }) => {
  const [tokenInfo, setTokenInfo] = useState({
    name: "",
    symbol: "",
    balance: 0,
  });

  const loadTokenInfo = async () => {
    const contract = await Contract.loadContract(contractAddress);
    const name = await contract.get("name");
    const symbol = await contract.get("symbol");
    const balance = await contract.balanceOf(address);

    setTokenInfo({ name, symbol, balance });
  };

  useEffect(() => {
    loadTokenInfo();
  }, []);

  return (
    <div>
      <h1>Informations du token</h1>
      <p>Nom : {tokenInfo.name}</p>
      <p>Symbole : {tokenInfo.symbol}</p>
      <p>Solde : {tokenInfo.balance}</p>
    </div>
  );
};

export default TokenInfo;

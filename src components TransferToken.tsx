import React, { useState } from "react";
import { Contract } from "@wagmi/contracts";

const TransferToken = ({ contractAddress, recipientAddress, amount }) => {
  const [transferring, setTransferring] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const handleTransfer = async () => {
    setTransferring(true);

    try {
      const contract = await Contract.loadContract(contractAddress);
      const transactionHash = await contract.send(recipientAddress, amount);

      setTransactionHash(transactionHash);
    } catch (error) {
      console.error(error);
    }

    setTransferring(false);
  };

  return (
    <div>
      <h1>Transfert de token</h1>
      <p>Adresse du destinataire : {recipientAddress}</p>
      <p>Quantité de tokens à transférer : {amount}</p>

      {transferring ? (
        <p>Transfert en cours...</p>
      ) : (
        <button onClick={handleTransfer}>Transférer</button>
      )}

      {transactionHash !== "" && (
        <p>Transaction hash : {transactionHash}</p>
      )}
    </div>
  );
};

export default TransferToken;

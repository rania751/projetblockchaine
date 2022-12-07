import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI1, contractAddress1 } from "../utils/constants";


export const TransactionContext1 = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress1, contractABI1, signer);

  return transactionsContract;
}; 


export const TransactionsProvider1 = ({ children }) => {

  const [formData, setformData] = useState({cin: ""});
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
 
  };


  const update_status = async () => {
    try {
      if (ethereum) {
        const {cin} = formData;
        const transactionsContract1 = createEthereumContract();
        const result= await transactionsContract1.update_patient_status(formData.cin)
      };

    }

      catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  }

  return(
    <TransactionContext1.Provider value={{formData,update_status,createEthereumContract,handleChange,isLoading}}>
        {children}
    </TransactionContext1.Provider>
   );
  };

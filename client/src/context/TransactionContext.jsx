import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI1, contractAddress1 } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress1, contractABI1, signer);

  return transactionsContract;
};


export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ id:" ",fname: "", lname: "",  cin: "" ,phone: "", email: "",adress:"",status:" false "});
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
 
  };

  
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);


      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

    const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

    const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { id,fname, lname,cin, phone, email, adress ,status} = formData;
        const transactionsContract = createEthereumContract();
   
        console.log(formData)
        const transactionHash = await transactionsContract.store_patient_details(id ,fname, lname,cin, phone, email, adress , status );

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  
    useEffect(()=>{
      checkIfWalletIsConnect();
    },[]);

   return(
    <TransactionContext.Provider value={{connectWallet,currentAccount,formData,handleChange,sendTransaction,isLoading}}>
        {children}
    </TransactionContext.Provider>
   );
  };
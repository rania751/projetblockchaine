import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Details ,Welcome} from "./componenets";
import { TransactionsProvider } from "./context/TransactionContext";
import { TransactionsProvider1 } from "./context/TransactionContext1";
import "./index.css";

ReactDOM.render(
 
  <React.StrictMode>
 <App/>
 </React.StrictMode>
,

  
  document.getElementById("root"),
);




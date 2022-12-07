import { Navbar,Welcome , Footer , Services ,Details,TableDetails} from './componenets'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransactionsProvider1 } from "./context/TransactionContext1";
import { TransactionsProvider } from "./context/TransactionContext";
const App= ()=> {

  return (
    
    <div className="min-h-screen">
     <div  className="gradient-bg-welcome">
     <Navbar/>
     <br/>
   <br/>
     <TransactionsProvider>
    <Welcome />
   </TransactionsProvider>
  
     {/* <BrowserRouter>
      <Routes>
        <Route path="/TableDetails" element={<TableDetails />}/>
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter> */}
 
    <Services/>
    {/* <TableDetails/> */}
    <br/>
    <br/>
    <TransactionsProvider1>
    <Details />
   </TransactionsProvider1>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
      <Footer/>
      </div>
        </div>
        
  );
}

export default App

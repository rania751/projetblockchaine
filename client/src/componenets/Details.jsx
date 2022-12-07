import React, { useContext,useState,useEffect } from "react";
import { Loader } from ".";
import { TableDetails } from ".";
import { TransactionContext1 } from "../context/TransactionContext1";
import { RiHeart2Fill } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );
  
  const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

      </div>
    </div>
  );












const { ethereum } = window;
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Details = () => {
  const {formData,handleChange,isLoading,createEthereumContract,update_status} = useContext(TransactionContext1);
  const [detailClient, setdetailClient] = useState(false);
  const [show, setshow] = useState(true);
  const [clTable, setTable] = useState([]);
  const [clientsTable, setTablec] = useState([]);

  const handleSubmit = (e) => {
    console.log("sdgffhj")
    const {cin} = formData;
    e.preventDefault();
    if (!cin ) return;
    get_details();

  };

  const handleSubmit1 = (e) => {

    e.preventDefault();
  
    update_status();

  };


  const cancel = (e) => {

    e.preventDefault();
    setdetailClient(false);
   

  };


  const get_clients = async () => {
    try {
      if (ethereum) {
  
        const transactionsContract1 = createEthereumContract();

        const result= await transactionsContract1.retreive_patients()
        console.log(result)

        setTablec(result)
       
      };
    }

      catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  }


  const get_details = async () => {
    try {
      if (ethereum) {
        console.log("azerrgdrd")
        const {cin} = formData;
        console.log(formData);
        console.log(formData.cin)
        const transactionsContract1 = createEthereumContract();

        const result= await transactionsContract1.retreive_patient_details(formData.cin)
        console.log(result)
        setdetailClient(true)
        setTable(result)
       
      };
    }

      catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  }

  useEffect(()=>{
    get_clients();
  },[]);

    return (
      <div>
       
               <div className="flex-1 flex flex-col justify-start items-center">

           <h5 className="text-3xl sm:text-5xl text-white text-gradient py-1">
       Administration Space  

          </h5> 
          <div className="h-[1px] w-full bg-gray-400 my-2" />

          <br/>
          <br/>
          <br/>
          <br/>
              <div className="flex justify-between items-start">    
     
          <div className="flex w-full justify-center items-center">
<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
<h3 className=" text-white" >
        Update Status

          </h3> 
          <Input placeholder="Entre CIN " name="cin" type="text" handleChange={handleChange} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            
            {isLoading
              ? <Loader />
              : (
                <button type="button"  onClick={handleSubmit}  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                get details
                </button>
              )}
          </div>
          </div>
</div>
          <div>
           <div className="flex w-full justify-center items-center">
            
          
          {detailClient
              ? 
               <div >
                <p>.</p>
                <p>.</p>        
                </div>
              : (
                <h5>.</h5>
              )}
              </div>
              </div>


           <div>
           <div className="flex w-full justify-center items-center">

          
          {detailClient
              ? 
               <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                
                <TableDetails data={clTable} />  
              <div className="h-[1px] w-full bg-gray-400 my-2" />
                 <button type="button"  onClick={handleSubmit1}  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Update Status
                </button>
                <button type="button"  onClick={cancel}  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Cancel
                </button>
               </div>
              : (
                <h5>.</h5>
              )}
              </div>
              </div>


              <div>
           <div className="flex w-full justify-center items-center">
            
          
          {detailClient
              ? 
               <div >
                <p>.</p>
                <p>.</p>        
                </div>
              : (
                <h5>.</h5>
              )}
              </div>
              </div>     








              


        <div>
        {show?
       
            <div className="flex-1 flex flex-col justify-start items-center">
              <div className="h-[1px] w-full bg-gray-400 my-2" />
           <h5 className="text-3xl sm:text-5xl text-white text-gradient py-1">
       Client's Accounts  

          </h5> 
          <div className="h-[1px] w-full bg-gray-400 my-2" />
         {clientsTable.map((item)=>( 
          <ServiceCard key={ item.id}
          color="bg-[#F84550]"
          title={item.id}
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle={item.fname} 
        />
                ))} 
 
       </div>
         :(
          <p>.</p> 
          )}
</div>


          </div>
    
          </div>
       
    );
};

export default Details;








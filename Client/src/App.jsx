import React, { useContext, useState, useEffect } from "react";
import { Routes, Route  , useNavigate} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserDataForm from "./components/UserDataForm/UserDataForm";
import Forgot from "./components/Forgot/Forgot";
import MainPage from "./components/Home/MainPage";
import SinglePage from "./components/SinglePage/SinglePage";
import AddProperty from "./components/AddProperty/AddProperty";
import MapView from "./components/MapView/MapView";
import ABI from "./constants/ABI";
import contractAddress from "./constants/contractAddress";
import { ethers } from "ethers";

function App() {
  const nav = useNavigate()
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [Account, setAccount] = useState("Not connected");
  const template = async () => {
    const CAddres = contractAddress;
    const CABI = ABI;
    //Metamask Wallet Connection
    
    try {
      const { ethereum } = window;
      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      account && setAccount(account[0]);
      const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
      console.log(provider);
      const signer = provider.getSigner(); //write the blockchain
      console.log(signer);
      const contract = new ethers.Contract(CAddres, CABI, signer);

      console.log(contract);
      setState({ provider, signer, contract });
    } catch (error) {
      console.log(error);
    }
     nav('/get')
  };


   const clicked =()=>{
    template();

   }

useEffect(()=>{

  const GetAccount = async()=>{
    const account = await ethereum.request({
      method: "eth_requestAccounts",
    });
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    });
    account && setAccount(account[0]);
  }
  GetAccount();

},[])

  return (
    <Routes>
      <Route path="/" element={<Login clicked={clicked} account={Account}/>} />
      <Route path="/get" element={<MainPage account={Account} />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/data" element={<UserDataForm />} />
      {/* <Route path="/forgot" element={<Forgot />} /> */}
      <Route path="/property/:id" element={<SinglePage />} />
      <Route path="/add" element={<AddProperty  state={state} account={Account}/>} />
      <Route path="/map" element={<MapView />} />
    </Routes>
  );
}

export default App;

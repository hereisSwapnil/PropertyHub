import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import DisplayCard from "./DisplayCard";

const MainPage = (props) => {
  const [prop, setprop] = useState('');
  
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <DisplayCard />
        <small>Connected Account - {props.account}</small>
      </div>
    </>
  );
};

export default MainPage;
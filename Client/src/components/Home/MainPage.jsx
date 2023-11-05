import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import DisplayCard from "./DisplayCard";

const MainPage = (props) => {
  const [prop, setprop] = useState('');
  useEffect(()=>{
    console.log("Hello");
    setprop(props.account)
  }, [props]);
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar props={prop} />
        <DisplayCard />
      </div>
    </>
  );
};

export default MainPage;
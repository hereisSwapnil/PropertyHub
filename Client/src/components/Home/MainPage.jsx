import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import DisplayCard from "./DisplayCard";

const MainPage = (props) => {
console.log(props.account)
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar account={props.account}/>
        <DisplayCard />
      </div>
    </>
  );
};

export default MainPage;
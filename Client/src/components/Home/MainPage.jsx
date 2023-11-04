import Navbar from "../Navbar/Navbar";
import DisplayCard from "./DisplayCard";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <DisplayCard />
      </div>
    </>
  );
};

export default MainPage;
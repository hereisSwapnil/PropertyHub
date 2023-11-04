import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserDataForm from "./components/UserDataForm/UserDataForm";
import Forgot from "./components/Forgot/Forgot";
import MainPage from "./components/Home/MainPage";
import SinglePage from "./components/SinglePage/SinglePage";
import AddProperty from "./components/AddProperty/AddProperty";
import MapView from "./components/MapView/MapView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/data" element={<UserDataForm />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/property/:id" element={<SinglePage />} />
      <Route path="/add" element={<AddProperty />} />
      <Route path="/map" element={<MapView />} />
    </Routes>
  );
}

export default App;
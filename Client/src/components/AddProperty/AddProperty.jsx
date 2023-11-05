import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSyncAlt, FaEnvelope, FaKey, FaShieldVirus } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import SidePanel from "../Home/Sidepanel";

const AddProperty = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [captchaVal, setCaptchaVal] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    mobile: "",
    email: "",
    altMobile: "",
    price: "",
    landType: "",
    currency: "",
    lat: "",
    long: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let submitable = true;
    if (captchaVal !== captchaText) {
      alert("Wrong Captcha");
      setCaptchaVal("");
      genrateCaptcha();
      return;
    } else {
      // when all details logged
    }

    Object.values(error).forEach((err) => {
      if (err !== false) {
        submitable = false;
        return;
      }
    });
    navigate("/data");
  };

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  const genrateCaptcha = () => {
    let captcha = "";
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      captcha += charset.charAt(randomIndex);
    }
    setCaptchaText(captcha);
  };

  useEffect(() => {
    genrateCaptcha();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex gap-20">
        <SidePanel />
        <form
          className="flex flex-col pt-3 md:pt-8 w-[60%] mx-auto"
          onSubmit={handleSubmit}
          action="/data"
        >
          {/* Title starts */}
          <div className="flex flex-col pt-4 relative">
            <label htmlFor="Title" className="text-lg">
              Title
            </label>
            <div className="relative">
              <input
                type="title"
                name="title"
                placeholder="Enter a title"
                onChange={handleFormData}
                value={formData.title}
                className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-5 w-full bg-gray-50 pr-12"
              />
            </div>
          </div>
          {/* Description starts */}
          <div className="flex flex-col pt-4 relative">
            <label htmlFor="Title" className="text-lg">
              Description
            </label>
            <div className="relative">
              <textarea
                type="description"
                name="description"
                placeholder="Add description"
                onChange={handleFormData}
                value={formData.description}
                className="focus:shadow-outline peer h-auto appearance-none py-2 leading-tight text-gray-700 shadow border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                cols="10"
                rows="10"
              ></textarea>
            </div>
          </div>
          {/* Name & Mobile */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="Title" className="text-lg">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Owner Name"
                  onChange={handleFormData}
                  value={formData.name}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="password" className="text-lg">
                Mobile Number
              </label>
              <div className="relative">
                <input
                  name="mobile"
                  placeholder="Owner Mobile Number"
                  type="number"
                  onChange={handleFormData}
                  value={formData.mobile}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>
          {/* Email & Alt. Mobile */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="Title" className="text-lg">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  placeholder="Owner Email"
                  onChange={handleFormData}
                  value={formData.email}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="password" className="text-lg">
                Alternate Mobile Number
              </label>
              <div className="relative">
                <input
                  name="altMobile"
                  placeholder="Alt. Mobile Number"
                  type="number"
                  onChange={handleFormData}
                  value={formData.altMobile}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Price & Alt. Land Type */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="Title" className="text-lg">
                Price
              </label>
              <div className="relative">
                <input
                  name="price"
                  placeholder="Price"
                  type="number"
                  onChange={handleFormData}
                  value={formData.price}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="password" className="text-lg">
                Land Type
              </label>
              <div className="relative">
                <select
                  name="landType"
                  id=""
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  onChange={handleFormData}
                  value={formData.landType}
                >
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="agricultural">Agricultural</option>
                </select>
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Currency */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="Title" className="text-lg">
                Currency
              </label>
              <div className="relative">
                <select
                  name="currency"
                  id="currency"
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  value="INR"
                  onChange={handleFormData}
                >
                  <option value="inr">INR</option>
                  <option value="usd">USD</option>
                </select>
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Lat & Long */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="latitude" className="text-lg">
                Latitude
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="lat"
                  placeholder="Latitude"
                  onChange={handleFormData}
                  value={formData.lat}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="longitude" className="text-lg">
                Longitude
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="long"
                  placeholder="Longitude"
                  onChange={handleFormData}
                  value={formData.long}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Address starts */}
          <div className="flex flex-col pt-4 relative">
            <label htmlFor="address" className="text-lg">
              Address
            </label>
            <div className="relative">
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                onChange={handleFormData}
                value={formData.address}
                className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-5 w-full bg-gray-50 pr-12"
              />
            </div>
          </div>

          {/* pincode & city */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="pincode" className="text-lg">
                Pincode
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="pincode"
                  placeholder="Pincode"
                  onChange={handleFormData}
                  value={formData.pincode}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="city" className="text-lg">
                City
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleFormData}
                  value={formData.city}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* state & country */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="state" className="text-lg">
                State
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  onChange={handleFormData}
                  value={formData.state}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="country" className="text-lg">
                Country
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={handleFormData}
                  value={formData.country}
                  className="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Documents Upload */}

          <h2 class="text-2xl font-normal mb-10 mt-10 border-b">
            Upload Documents
          </h2>

          {/* deed & channel doc */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2 mb-4">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Deed
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Channel Document
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Encub & occupancy */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2 mb-4">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Encurbrance Certificate
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Occupancy Certificate
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Allotment & Tax Reciept */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2 mb-4">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Allotment Letter
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Tax Reciept
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* parking & noc */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2 mb-4">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Parking Allotment
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                No Objection Certificate
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Mutation & Conversion */}
          <div className="flex flex-row gap-5 pt-4 relative col-span-2 mb-4">
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Mutation
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
            {/* */}
            <div className="w-1/2">
              <label htmlFor="" className="text-lg">
                Conversion
              </label>
              <div className="relative">
                <input
                  class="focus:shadow-outline peer appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  type="file"
                  id="formFile"
                />
                {/* SVG */}
              </div>
            </div>
            {/* */}
          </div>

          {/* Captcha */}
          <div
            id="captcha-container"
            className="w-full flex flex-col gap-2 mt-5 mb-4 items-start justify-center mx-auto"
          >
            <label htmlFor="captcha">Captcha</label>
            <div
              className="flex flex-row gap-3 justify-center items-center"
              id="captchaBox"
            >
              <div
                id="captcha"
                className="w-40 bg-[url('assets/captcha.webp')] bg-center bg-auto p-1.5 text-2xl font-bold text-gray-700 border-2 border-black rounded-6 select-none"
              >
                {captchaText}
              </div>
              <FaSyncAlt
                id="captchaIcon"
                className="text-3xl cursor-pointer mx-3"
                onClick={genrateCaptcha}
              />
              <div className="iconContainer relative">
                <input
                  type="text"
                  name="captch"
                  value={captchaVal}
                  placeholder="Enter Captcha Here"
                  onChange={(e) => setCaptchaVal(e.target.value)}
                  className="w-full peer bg-slate-100 py-2 px-6"
                />
                <FaShieldVirus className="icons absolute top-[12px] left-[5px]" />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Submit for review"
            className="bg-black p-2 px-4 w-fit m-auto text-lg font-bold text-white cursor-pointer hover:bg-gray-700 mb-20"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProperty;

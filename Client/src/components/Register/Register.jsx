import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import validate from "../../common/validation";
import hide from "../../assets/hide.png";
import show from "../../assets/show.png";
import { FaSyncAlt, FaEnvelope, FaKey, FaShieldVirus } from "react-icons/fa";

const Register = () => {
  // const [formData, setFormData] = useState({
  //   password: "",
  //   confirmPassword: "",
  // });
  const [passwordType, setPasswordType] = useState("password");
  const [captchaVal, setCaptchaVal] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleEmailChange = (e) => {
    setRegisterInformation({
      ...registerInformation,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setRegisterInformation({
      ...registerInformation,
      password: e.target.value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setRegisterInformation({
      ...registerInformation,
      confirmPassword: e.target.value,
    });
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

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (registerInformation.password === registerInformation.confirmPassword) {
      setPasswordMatch(true);
      // You can access the registration information here
      console.log("Email:", registerInformation.email);
      console.log("Password:", registerInformation.password);
      console.log("Confirm Password:", registerInformation.confirmPassword);
    } else {
      alert("Password and confirm password do not match!");
      setPasswordMatch(false);
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      {/* <!-- Register Section --> */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
          <a
            href="#"
            className="bg-black text-white font-bold text-xl p-4"
            alt="Logo"
          >
            Logo
          </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-3xl">Finding Home made</p>
          <p className="text-sm text-gray-500 mt-2">
            Easy &nbsp; &nbsp; • &nbsp; &nbsp; Transparent &nbsp; &nbsp; •
            &nbsp; &nbsp; Verified{" "}
          </p>
          <form
            className="flex flex-col pt-3 md:pt-8"
            onSubmit={handleRegister}
          >
            <div className="flex flex-col pt-4 relative">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={registerInformation.email}
                  onChange={handleEmailChange}
                  className="focus:shadow-outline peer pl-[35px] appearance-none py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  required
                />
                <FaEnvelope className="absolute top-0 left-3 h-full" />
                {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                  Please enter your email
                </p> */}
              </div>
            </div>

            <div className="flex flex-col pt-4 relative">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  placeholder="Password"
                  type={passwordType}
                  value={registerInformation.password}
                  onChange={handlePasswordChange}
                  className="focus:shadow-outline peer appearance-none pl-[35px] py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  required
                />
                <div
                  onClick={passwordToggle}
                  className="absolute top-0 right-3 h-full flex items-center cursor-pointer"
                >
                  <img
                    height={20}
                    width={20}
                    src={passwordType === "password" ? hide : show}
                    alt="password-toggle"
                  />
                </div>
                <FaKey className="absolute top-0 left-3 h-full flex items-center" />
                {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                  Please enter your password
                </p> */}
              </div>
            </div>

            <div className="flex flex-col pt-4 relative">
              <label htmlFor="confirmPassword" className="text-lg">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={passwordType}
                  value={registerInformation.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="focus:shadow-outline peer appearance-none pl-[35px] py-2 leading-tight text-gray-700 shadow h-10 border mt-1 rounded px-4 w-full bg-gray-50 pr-12"
                  required
                />
                <FaKey className="absolute top-[-15px] left-3 h-full flex items-center" />
                {!passwordMatch && (
                  <p className="mt-2 text-red-700 font-light">
                    Passwords do not match
                  </p>
                )}
                {passwordMatch && (
                  <p className="mt-2 text-green-700 font-light">&nbsp;</p>
                )}
              </div>
            </div>
            <div
              id="captcha-container"
              className="w-full flex flex-col gap-2 mt-3 items-start"
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
                    required
                  />
                  <FaShieldVirus className="icons absolute top-[12px] left-[5px]" />
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Register"
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Already have an account?{" "}
              <a href="/login" className="font-semibold">
                Log in here.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Image Section --> */}
      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://i.postimg.cc/c1MkZ67B/alexander-andrews-A3-DPhh-AL6-Zg-unsplash.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Register;
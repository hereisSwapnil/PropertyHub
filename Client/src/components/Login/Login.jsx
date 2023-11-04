import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import validate from "../../common/validation";
import hide from "../../assets/hide.png";
import show from "../../assets/show.png";
import { FaSyncAlt, FaEnvelope, FaKey, FaShieldVirus } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState({});
  const [passwordType, setPasswordType] = useState("password");
  const [captchaVal, setCaptchaVal] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLoginInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return { ...prev, [name]: value };
    });
    let errObj = validate[name](value);
    if (name === "password") {
      errObj = validate.loginPassword(value);
    }
    setError((prev) => {
      return { ...prev, ...errObj };
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    let submitable = true;
    if (captchaVal !== captchaText) {
      alert("Wrong Captcha");
      setCaptchaVal("");
      genrateCaptcha();
      return;
    }else{
      // when all the details are correct or check for correct email and password
      console.log(loginInfo.email, loginInfo.password);
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
    <div className="flex w-full flex-wrap">
      {/* <!-- Login Section --> */}
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <a href="#" className="bg-black p-4 text-xl font-bold text-white">
            Logo
          </a>
        </div>

        <div className="my-auto flex flex-col justify-center px-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
          <p className="text-3xl">Finding Home made</p>
          <p className="text-sm text-gray-500 mt-2">
            Easy &nbsp; &nbsp; • &nbsp; &nbsp; Transparent &nbsp; &nbsp; •
            &nbsp; &nbsp; Verified{" "}
          </p>
          <form
            className="flex flex-col pt-3 md:pt-8"
            onSubmit={handleSignIn}
            action="/data"
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
                  onChange={handleLoginInfo}
                  value={loginInfo.email}
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
                  onChange={handleLoginInfo}
                  value={loginInfo.password}
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

            <div className="pb-8 pt-2 text-right">
              <p>
                <a href="/forgot" className="font-semibold">
                  Forgot your password?{" "}
                </a>
              </p>
            </div>
            <input
              type="submit"
              value="Log In"
              className="bg-black p-2 text-lg font-bold text-white cursor-pointer hover:bg-gray-700"
            />
          </form>
          <div className="pb-12 pt-8">
            <p>
              Don't have an account?{" "}
              <a href="/register" className="font-semibold">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Image Section --> */}
      <div className="w-1/2 shadow-2xl">
        <img
          className="hidden h-[100vh] w-full bg-center object-cover md:block"
          src="https://i.postimg.cc/c1MkZ67B/alexander-andrews-A3-DPhh-AL6-Zg-unsplash.jpg"
        />
      </div>
    </div>
  );
};

export default Login;
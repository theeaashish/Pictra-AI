import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Login() {
  const [state, setState] = useState("Login");

  const {setShowLogin} = useContext(AppContext);

  return (
    <div className="absolute bg-black/30 backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center">
      <form className="text-white bg-[#272D2D] relative text-center w-100 max-h-140 py-10 rounded-lg flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-medium"> {state} </h1>
        <p className="mt-[-15px]">Welcome back! Please sign in to continue</p>

        <img onClick={() => setShowLogin(false)}
          src="./img/cross.svg"
          alt="cross"
          className="absolute w-5 h-5 invert top-5 right-5 cursor-pointer"
        />

        {state !== "Login" && (
          <div className="flex w-[80%] py-1 px-4 gap-3 items-center rounded-lg border-2 border-[var(--border)] ">
            <img className="w-4" src="./img/User.svg" alt="user" />
            <input
              className="w-[90%] h-10 outline-0"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="flex w-[80%] py-1 px-4 gap-3 items-center rounded-lg border-2 border-[var(--border)] ">
          <img className="w-4" src="./img/email.svg" alt="user" />
          <input
            className="w-[90%] h-10 outline-0"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="flex w-[80%] py-1 px-4 gap-3 items-center rounded-lg border-2 border-[var(--border)] ">
          <img className="w-4" src="./img/lock.svg" alt="user" />
          <input
            className="w-[90%] h-10 outline-0"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="text-blue-500 cursor-pointer">Forgot Password?</p>

        <button
          type="submit"
          className="flex w-[80%] items-center justify-center shadow-[0px_0px_152px_12px_rgba(112,23,183,0.3)] text-white font-bold gap-3 bg-[#7768AE] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#533A71] transition-all duration-300"
        >
          {state === "Login" ? "Login" : "create account"}
        </button>

        <div className="flex flex-col gap-3">
            { state === 'Login' ?
          <p>
            Don't have an account?{" "}
            <span className="text-blue-500 cursor-pointer" onClick={() => setState("Sign Up")}>
              Sign up
            </span>
          </p>
          :
          <p>
            Already have an account{" "}
            <span className="text-blue-500 cursor-pointer" onClick={() => setState("Login")}>
              Login
            </span>
          </p>
}
        </div>
      </form>
    </div>
  );
}

export default Login;

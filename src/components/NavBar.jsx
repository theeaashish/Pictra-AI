import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function NavBar() {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="h-20 flex justify-between items-center">
      <div className="Logo flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img className="sm:w-8 sm:h-8 w-5 h-5" src="./public/img/Logo.svg" alt="Logo" />
          <h1 className="text-white font-semibold sm:text-3xl">Pictra AI</h1>
        </Link>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-10">
            <button onClick={() => navigate("/buy")} className="flex items-center text-base text-white font-bold gap-3 bg-[var(--bg-hover)] px-6 py-3 rounded-lg cursor-pointer hover:bg-[var(--bg-btn)] transition-all">
              <img src="./public/img/Star.svg" alt="Star" />
              <p className="text-white sm:text-base">Credits left: 50</p>
            </button>

            <div className="user flex items-center gap-3">
              <p className="text-white sm:text-base">Hi! Aashish</p>
              <div className="relative group w-10 h-10 flex items-center justify-center rounded-full drop-shadow-lg bg-[var(--bg-hover)] hover:bg-[var(--bg-btn)] transition-all cursor-pointer">
                <img
                  className="invert w-4"
                  src="./public/img/User.svg"
                  alt="user"
                />
                <div className="absolute hidden group-hover:block z-10 w-30 h-12 text-center top-10 rounded-lg px-3 py-2 border border-[var(--border)]">
                  <ul className="list-none">
                    <li className="text-white">Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex sm:gap-3 sm:space-x-3 items-center">
            <p
              onClick={() => navigate("/buy")}
              className="sm:text-base text-[10px] text-white cursor-pointer hover:bg-[var(--bg-hover)] px-4 py-1.5 rounded-lg transition-all"
            >
              Pricing
            </p>
            <button onClick={() => setShowLogin(true)} className="sm:text-base text-[10px] text-white font-bold border border-[var(--border)] px-6 py-1.5 rounded-lg cursor-pointer hover:bg-[var(--bg-hover)] transition-all">
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;

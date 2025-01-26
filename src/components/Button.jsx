import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/buy")}
        className="flex items-center shadow-[0px_0px_152px_12px_rgba(112,23,183,0.3)] text-white font-bold gap-3 bg-[var(--bg-hover)] px-6 py-3 rounded-lg cursor-pointer hover:bg-[var(--bg-btn)] transition-all duration-300"
      >
        <p className="text-white text-[10px] sm:text-base">Generate Images</p>
        <img className="sm:w-4 w-3" src="./public/img/magic2.svg" alt="Star" />
      </button>
    </div>
  );
}

export default Button;

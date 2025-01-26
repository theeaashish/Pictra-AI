import React from "react";

function Steps({logoSrc, title, para}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 sm:min-h-28 mt-8 items-center px-6 sm:px-10 sm:w-[65%] w-[85%] gap-5 rounded-2xl border-2 border-[var(--border)] bg-[#261A34] hover:bg-[#2d1f3d] transition-colors duration-300">
        <div className="sm:min-w-12 sm:min-h-12 min-h-9 min-w-9 rounded-lg bg-[var(--round-bg)] flex items-center justify-center p-2.5">
            <img src={logoSrc} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="py-2">
            <h2 className="text-white text-sm sm:text-2xl font-semibold">{title}</h2>
            <p className="text-[var(--text-p)] text-[9px] sm:text-base mt-1">{para}</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;

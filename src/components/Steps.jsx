import React from "react";

function Steps({logoSrc, title, para}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 sm:min-h-28 mt-8 items-center px-4 sm:px-8 sm:w-[60%] w-[80%] gap-4 rounded-xl border-2 border-[var(--border)] bg-[#261A34]">
        <div className="sm:min-w-10 sm:min-h-10 min-h-8 min-w-8 rounded-lg bg-[var(--round-bg)] flex items-center justify-center">
            <img src={logoSrc} alt="" />
        </div>
        <div>
            <h2 className="text-white text-xs sm:text-xl">{title}</h2>
            <p className="text-[var(--text-p)] text-[8px] sm:text-base">{para}</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;

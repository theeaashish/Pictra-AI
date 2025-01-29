import React, { useState } from "react";

function Result() {
  const [image, setImage] = useState("./img/bg-img/ai.jpeg");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {

  }

  return (
    <form onSubmit={handleSubmit} className="text-white flex items-center justify-center flex-col h-full gap-20">
      <div className="flex flex-col gap-1.5">
        <div className="relative">
          <img className="w-sm h-sm rounded" src={image} alt="AI image" />
          <span
            className={`h-1 bg-blue-600 absolute bottom-0 left-0 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} `}
          />
        </div>
        <p className={!loading ? "hidden" : ""}> Loading...</p>
      </div>

      {!imageLoaded && (
        <div className="flex w-full justify-center items-center">
          <div className="w-[40%] h-6 gap-10 bg-[#27213C] px-1 py-7 rounded-lg flex items-center justify-between">
            <input onChange={e => setInput(e.target.value)} value={input}
              className=" outline-0 w-full px-6 py-2"
              type="text"
              placeholder="Describe what you want to generate"
            />
            <button type="submit" className="flex items-center shadow-[0px_0px_152px_12px_rgba(112,23,183,0.3)] text-white font-bold gap-3 bg-[#7768AE] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#533A71] transition-all duration-300">
              Generate
            </button>
          </div>
        </div>
      )}

      {imageLoaded && (
        <div className="flex gap-4">
          <p
            onClick={() => {
              setImageLoaded(false);
            }}
            className="flex items-center text-white font-bold gap-3 border-2 border-[var(--bg-hover)] px-6 py-3 rounded-lg cursor-pointer hover:bg-[var(--bg-hover)] transition-all duration-300"
          >
            Generate Another
          </p>
          <a
            className="flex items-center  text-white font-bold gap-3 bg-[var(--bg-hover)] px-6 py-3 rounded-lg cursor-pointer hover:bg-[var(--bg-btn)] transition-all duration-300"
            href={image}
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
}

export default Result;

import React from "react";
import ImgBox from "./ImgBox";
import Steps from "./Steps";

function ImagesDiv() {
  const content = [
    {
      imgSrc: "./public/img/bg-img/ai.jpeg",
      heading: "Multiple AI Modes",
      text: "Whether you're looking for high-quality results or faster generation, Flux Variants and Mystic will meet all your needs.",
    },
    {
      imgSrc: "./public/img/bg-img/snake.jpeg",
      heading: "Pick style, color filters, and perspective",
      text: "No need for long or complex prompts, just use the presets!",
    },
    {
      imgSrc: "./public/img/bg-img/feather.jpeg",
      heading: "High-end textures and realism",
      text: "Skin tones, textures, details—everything is there",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-white mt-18 text-3xl font-semibold px-4 text-center">
        The only AI Image Generator you need
      </h1>

      <div className="flex flex-wrap justify-center gap-4 p-6 sm:justify-start">
        {content.map((item, index) => (
          <ImgBox
            key={index}
            imgSrc={item.imgSrc}
            heading={item.heading}
            text={item.text}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-white mt-18 text-3xl font-semibold text-center">
          How it works
        </h1>
        <p className="text-[var(--text-p)] text-xs text-center">
          Transform Words Into Stunning Images
        </p>
      </div>
    </div>
  );
}

export default ImagesDiv;

import React from "react";
import Button from "../components/Button";

function Credit() {
  const content = [
    {
      title: "Basic",
      price: "$19",
      credits: "100",
      description:
        "Unlock the essentials to start creating stunning images effortlessly.",
    },
    {
      title: "Advanced",
      price: "$50",
      credits: "500",
      description:
        "Go further with advanced features and higher credit limits to elevate your creativity.",
    },
    {
      title: "Business",
      price: "$250",
      credits: "5000",
      description:
        "Experience limitless creativity with maximum credits and dedicated priority support.",
    },
  ];

  const btnStyle = {
    padding: "0 35px",
  };

  return (
    <div className="flex items-center justify-center min-h-[80%] mb-20">
      <div className="flex flex-col items-center justify-between min-h-full">
        <div className="text-center mt-10 flex items-center flex-col gap-8">
          <p className="text-white text-sm border border-[var(--border)] w-[50%] py-2.5 rounded-2xl">
            OUR PLANS
          </p>
          <h1 className="text-white text-4xl">Choose the plan</h1>
        </div>
        <div className="flex bg-[#121420] min-h-90 min-w-[65vw] rounded-2xl items-center justify-center gap-5 flex-wrap mt-10">
          {content.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center h-[320px] w-[300px] rounded-lg flex-wrap px-8 gap-10"
              key={index}
            >
              <div className="flex flex-col justify-center gap-3 px-1">
                <h1 className="text-white text-4xl font-extrabold">
                  {item.price}{" "}
                  <span className="text-lg font-light">
                    /{item.credits} Credits
                  </span>
                </h1>
                <h2 className="text-white text-2xl mt-5">{item.title}</h2>
                <p className="text-white text-sm">{item.description}</p>
              </div>

              <Button text="Get Started" style={btnStyle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Credit;

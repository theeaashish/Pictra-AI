import React from "react";
import Header from "../components/Header";
import ImagesDiv from "../components/ImagesDiv";
import Steps from "../components/Steps";
import Description from "../components/description";
import Footer from "../components/Footer";

function Home() {
  const resources = [
    {
      logoSrc: "img/vision.svg",
      title: "Describe Your Vision",
      para: "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    },
    {
      logoSrc: "img/magic.svg",
      title: "Watch the Magic",
      para: "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
    },
    {
      logoSrc: "img/download.svg",
      title: "Download & Share",
      para: "Instantly download your creation or share it with the world directly from our platform.",
    },
  ];
  return (
    <div>
      <Header />
      <ImagesDiv />

      {resources.map((items, index) => (
        <Steps
          key={index}
          logoSrc={items.logoSrc}
          title={items.title}
          para={items.para}
        />
      ))}
      <Description/>
      <Footer/>
    </div>
  );
}

export default Home;

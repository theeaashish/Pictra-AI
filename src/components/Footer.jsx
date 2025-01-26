import React from "react";
import { Link } from "react-router-dom";

function Footer() {

    const imageSource = [
        {
            imgSrc: "img/social-icons/Facebook.svg",
            alt: "Facebook"
        },
        {
            imgSrc: "img/social-icons/Twitter.svg",
            alt: "Twitter"
        },
        {
            imgSrc: "img/social-icons/Instagram.svg",
            alt: "Instagram"
        }
    ];

  return (
    <footer className="h-30 flex justify-between items-center border-t-2 border-[var(--border)]">
      <div className="flex items-center">
        <div className="Logo flex items-center gap-2 border-r-2 sm:pr-6 pr-2 border-[var(--text-p)]">
          <Link to="/" className="flex items-center gap-2">
            <img className="sm:w-8 sm:h-8 w-5 h-5" src="./public/img/Logo.svg" alt="Logo" />
            <h1 className="text-white font-semibold text-[12px] sm:text-3xl">Pictra AI</h1>
          </Link>
        </div>
        <p className="text-[var(--text-p)] text-[8px] sm:text-base sm:pl-6 pl-2">
          All right reserved. Copyright @imagify
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {imageSource.map((item, index) => (
            <div key={index} className="sm:w-10 sm:h-10 w-7 h-7 flex items-center justify-center border border-[var(--border)] rounded-full cursor-pointer hover:bg-[var(--bg-hover)] transition-all" >
            <img key={index} src={item.imgSrc} alt={item.alt} />
            </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

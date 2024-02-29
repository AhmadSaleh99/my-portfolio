import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6 footer border border-r-transparent border-b-transparent border-l-transparent text-white border-t-[#33353f]">
      <div className=" z-10 container p-12 flex justify-between">
        <span className="z-11">
          <img src="/images/logo.png" alt="Logo." className="w-25 h-10" />
        </span>
        <p className="text-slate-600">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

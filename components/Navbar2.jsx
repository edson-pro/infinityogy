"use client";
import { requestToBodyStream } from "next/dist/server/body-streams";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Navbar2() {
  const [isOpen, setIsOPen] = useState(false);
  let menuRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handler, true);
  }, []);
  const handler = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setIsOPen(false);
    } else {
      console.log("clicled inside");
    }
  };

  return (
    <div className=" max-w-7xl h-fit mx-auto mt-5 items-center px-6 sm:px-10 md:px-20 w-full flex justify-between">
      <a href="/">
        <Image src={`/image/logo2.png`} alt="" width={120} height={100} />
      </a>
      <div className="links hidden md:flex text-[#56697A]  text-[18px] gap-10 font-light items-center font-outfit">
        <a href="/" className="hover:text-[#F59620]">
          Home
        </a>
        <a href="/ourworks" className="hover:text-[#F59620]">
          Our works
        </a>
        <a href="/services" className="hover:text-[#F59620]">
          Services
        </a>
        <a href="/aboutus" className="hover:text-[#F59620]">
          About Us
        </a>
        <a
          href="#"
          className=" px-6 py-[13px] border border-[#F59620] text-[#F59620]
         hover:text-white hover:bg-[#F59620]"
        >
          Reach us
        </a>
      </div>
      {isOpen ? (
        <div className="flex md:hidden" onClick={() => setIsOPen(!isOpen)}>
          close
        </div>
      ) : (
        <div className="flex md:hidden" onClick={() => setIsOPen(!isOpen)}>
          open
        </div>
      )}

      {isOpen ? (
        <div
          ref={menuRef}
          className={
            "absolute z-20 flex md:hidden  px-10 py-10  bg-[#56697A] right-0 top-20 rounded-l-lg "
          }
        >
          <div className="flex text-white flex-col gap-4  text-[18px]">
            <a href="/">Home</a>
            <a href="/ourworks">Our works</a>
            <a href="/services">Services</a>
            <a href="/aboutus">About us</a>
            <button className="py-2 px-10 bg-[#F59620] rounded-md mt-4">
              Reach as
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar2;

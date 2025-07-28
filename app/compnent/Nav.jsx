"use client";
import { useRef, useState } from "react";

function Nav() {
  const about = useRef();
  const pro = useRef();
  const test = useRef();
  const contact = useRef();
  const [findDot, setFindDot] = useState(1);

  //   const handellNav = (e) => {
  //     console.log(e);
  //     e.classList.add("active");
  //     e.classList.add("dot");

  //     // let dot = document.createElement("div");
  //     // dot.style.cssText =
  //     //   "width: 10px; height: 10px; background-color: white; position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); border-radius: 50%;";
  //     // e.append(dot);
  //   };

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-linear-to-r from-[#6971A229] to-[#272A3C5E] w-[550px] max-md:w-[350px] p-[1px] z-50 rounded-xl fixed top-[50px] left-[50%] -translate-x-[50%]">
      <div className="bg-linear-to-r from-[#04071D] to-[#0C0E23] p-[20px] rounded-xl">
        <ul className="flex justify-around text-[#C1C2D3] text-[16px] max-md:text-[12px]">
          <li
            onClick={() => {
              setFindDot(1);
              handleScroll("head");
            }}
            ref={about}
            className={`cursor-pointer relative hover:scale-[110%] hover:font-bold transition-all ${
              findDot == 1
                ? "text-white scale-110 font-bold"
                : "font-normal scale-100 text-[#C1C2D3]"
            }`}
          >
            About
            {findDot == 1 ? (
              <div className="w-[10px] h-[10px] bg-white rounded-full absolute bottom-[-20px] left-[50%] -translate-x-[50%]"></div>
            ) : (
              console.log("")
            )}
          </li>
          <li
            onClick={() => {
              setFindDot(2);
              handleScroll("project");
            }}
            ref={pro}
            className={`cursor-pointer relative hover:scale-[110%] hover:font-bold transition-all ${
              findDot == 2
                ? "text-white scale-110 font-bold"
                : "font-normal scale-100 text-[#C1C2D3]"
            }`}
          >
            Projects
            {findDot == 2 ? (
              <div className="w-[10px] h-[10px] bg-white rounded-full absolute bottom-[-20px] left-[50%] -translate-x-[50%]"></div>
            ) : (
              console.log("")
            )}
          </li>
          <li
            onClick={() => {
              setFindDot(3);
              handleScroll("word");
            }}
            ref={test}
            className={`cursor-pointer relative hover:scale-[110%] hover:font-bold transition-all ${
              findDot == 3
                ? "text-white scale-110 font-bold"
                : "font-normal scale-100 text-[#C1C2D3]"
            }`}
          >
            Testimonials
            {findDot == 3 ? (
              <div className="w-[10px] h-[10px] bg-white rounded-full absolute bottom-[-20px] left-[50%] -translate-x-[50%]"></div>
            ) : (
              console.log("")
            )}
          </li>
          <li
            onClick={() => {
              setFindDot(4);
              handleScroll("footer");
            }}
            ref={contact}
            className={`cursor-pointer relative hover:scale-[110%] hover:font-bold transition-all ${
              findDot == 4
                ? "text-white scale-110 font-bold"
                : "font-normal scale-100 text-[#C1C2D3]"
            }`}
          >
            Contact
            {findDot == 4 ? (
              <div className="w-[10px] h-[10px] bg-white rounded-full absolute bottom-[-20px] left-[50%] -translate-x-[50%]"></div>
            ) : (
              console.log("")
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

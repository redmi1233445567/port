import React from "react";
import r from "../../public/spotlight (1).png";
import l from "../../public/spotlight (2).png";
import Image from "next/image";
import Link from "next/link";
import bg from "../../public/BG.png";

export default function Head() {
  return (
    <div
      className="pt-[200px] flex flex-col items-center relative max-md:px-[20px]"
      id="head"
    >
      <Image
        src={bg}
        alt="Picture of the author"
        className=" absolute top-0 left-0 w-full -z-40"
      />
      <Image
        src={r}
        alt="Picture of the author"
        className=" absolute top-0 right-0"
      />
      <Image
        src={l}
        alt="Picture of the author"
        className=" absolute top-0 left-0"
      />
      <p className="text-[16px] font-[400] tracking-[5px] leading-1 max-md:text-[12px] max-sm:text-[9px]">
        Dynamic Web Magic with Next.js
      </p>
      <h1 className="text-[72px] max-md:text-[48px] tracking-[-3.6px] font-bold text-center max-w-[940px] my-[10px]">
        Transforming Concepts into Seamless{" "}
        <span className="text-[#CBACF9]">User Experiences</span>
      </h1>
      <p className="text-[24px] font-[400] leading-1 max-md:text-[14px]">
        Hi! I’m Ahmed, a Next.js Developer based in Egypt.
      </p>
      <Link
        href={"https://github.com/redmi1233445567"}
        className="max-md:w-full"
      >
        <div className="bg-linear-to-r max-md:w-full mt-[40px] from-[#6971A266] to-[#272A3C80] w-[150px]  p-[1px] rounded-xl ">
          <button className="bg-linear-to-r hover:scale-[105%] transition-all hover:drop-shadow-sm hover:shadow-amber-50 from-[#161A31] to-[#06091F] p-[15px] rounded-xl flex w-full justify-around cursor-pointer text-[18px] font-[500]">
            See my work
          </button>
        </div>
      </Link>
    </div>
  );
}

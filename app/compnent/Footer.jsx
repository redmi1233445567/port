import React from "react";
import img from "../../public/pattern.png";
import Image from "next/image";
import Link from "next/link";
import whats from "../../public/divsectionxqghtcontainer.png";
import linked from "../../public/divsectioncmpwtcontainer.png";
import git from "../../public/divsectionocgcontainer.png";

export default function Footer() {
  return (
    <div
      className=" relative flex justify-center items-center flex-col max-md:mx-[20px] overflow-hidden h-[660px]"
      id="footer"
    >
      <Image
        src={img}
        alt="Picture of the author"
        className=" absolute top-[-290px] left-0 max-lg:top-0 w-full max-md:h-full"
      />
      <p className="text-[48px] font-bold max-md:text-[20px] text-center md:w-[720px] tracking-[-2px] md:leading-[0.9] ">
        Ready to take <span className="text-[#CBACF9]">your</span> digital
        presence to the next level?
      </p>
      <p className="text-[#C1C2D3] font-[400] text-[16px] text-center pt-[20px]">
        Reach out to me today and let's discuss how I can help you achieve your
        goals.
      </p>
      <Link href="https://wa.me/+201223690246?text=اهلا%20عايز%20استفسر%20عن%20خدماتك">
        <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80] p-[1px] rounded-xl relative z-30 mt-[20px] max-md:w-full">
          <div className="bg-gradient-to-br flex justify-center items-center  from-[#161A31] to-[#06091F] rounded-xl px-[20px] py-[15px] hover:opacity-90 transition-all cursor-pointer text-[18px] font-[500] leading-[120%]">
            Contact Me Now
          </div>
        </div>
      </Link>
      <div className="flex w-full py-[30px] justify-between px-[150px] max-2xl:px-[50px] max-md:mx-[20px]  absolute left-0 bottom-[40px] flex-wrap max-md:justify-center max-md:gap-[20px]">
        <p className="text-[14.83px]">Copyright ©2025 ahmedSayed</p>
        <div className="flex gap-[10px]">
          <Link href="https://wa.me/=+201223690246?text=اهلا%20عايز%20استفسر%20عن%20خدماتك">
            <Image
              src={whats}
              alt="Picture of the author"
              className="hover:scale-[105%] transition-all"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/hmada-redmi-068b162ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <Image
              src={linked}
              alt="Picture of the author"
              className="hover:scale-[105%] transition-all"
            />
          </Link>
          <Link href="https://github.com/redmi1233445567">
            <Image
              src={git}
              alt="Picture of the author"
              className="hover:scale-[105%] transition-all"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

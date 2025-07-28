"use client";
import React from "react";
import b from "../../public/image.png";
import b1 from "../../public/Vector.png";
import b11 from "../../public/Vector (1).png";
import b2 from "../../public/Vector (2).png";
import b22 from "../../public/Vector (3).png";
import c1 from "../../public/Background.png";
import c2 from "../../public/backgroundblobservicepng.png";
import c22 from "../../public/Card.png";
import c3 from "../../public/Image (2).png";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import bg from "../../public/BG.png";

export default function Info() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hmadaredmi7@gmail.com");
    toast.success("success copy", {
      theme: "#0C0E23",
    });
  };

  return (
    <div className="my-[60px] relative">
      <Image
        src={bg}
        alt="Picture of the author"
        className=" absolute top-0 left-0 w-full -z-30"
      />
      <div className="mx-[200px] max-2xl:mx-[50px] max-md:mx-[20px] grid grid-rows-6 grid-cols-11 xl:gap-[20px] max-xl:gap-y-[20px]  max-xl:grid-cols-2 max-xl:grid-rows-13">
        <div className=" relative col-span-7 row-span-6 rounded-2xl overflow-hidden max-xl:col-span-2 max-xl:row-span-7 ">
          <Image
            src={b}
            alt="Picture of the author"
            className=" absolute top-0 left-0 w-full -z-10 h-full"
          />
          <p className=" absolute top-[20%] left-[30%] text-black">Me</p>
          <Image
            src={b1}
            alt="Picture of the author"
            className=" absolute top-[28%] left-[26%] translate-x-[-100%] max-md:w-[60px]"
          />
          <Image
            src={b11}
            alt="Picture of the author"
            className=" absolute top-[23%] left-[26%] max-md:w-[20px]"
          />
          <Image
            src={b2}
            alt="Picture of the author"
            className=" absolute top-[70%] right-[20%] translate-x-[100%] max-md:w-[60px]"
          />
          <Image
            src={b22}
            alt="Picture of the author"
            className=" absolute top-[65%] right-[20%] max-md:w-[20px]"
          />
          <p className=" absolute bottom-[10%] left-[5%] font-bold text-[32px] w-[390px] max-xl:w-[227px] max-xl:text-[20px]">
            I prioritize client collaboration, fostering open communication
          </p>
        </div>
        <div className="row-span-3 col-span-4 bg-linear-to-r from-[#3637496E]/43 to-[#3637497D]/49  p-[1px] rounded-2xl relative -z-40">
          <div className=" p-[20px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-2xl">
            <p className="font-bold text-[30px] max-w-[411px] max-md:text-[20px]">
              I’m very flexible with time zone communications
            </p>
            <div className="flex justify-between">
              <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80]  p-[1px] rounded-xl ">
                <p className="p-[6px] bg-linear-to-r from-[#161A31]/5 to-[#06091F] rounded-xl">
                  USA
                </p>
              </div>
              <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80]  p-[1px] rounded-xl ">
                <p className="p-[6px] bg-linear-to-r from-[#161A31]/5 to-[#06091F] rounded-xl">
                  Germany
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80]  p-[1px] rounded-xl ">
                <p className="p-[6px] bg-linear-to-r from-[#161A31]/5 to-[#06091F] rounded-xl">
                  Ukrain
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 overflow-hidden col-span-4 bg-linear-to-r from-[#3637496E]/43 to-[#3637497D]/49  p-[1px] rounded-2xl ">
          <div className=" p-[20px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-2xl relative h-full flex items-center">
            <div className=" relative z-20">
              <p className="text-[14px] text-[#C1C2D3] max-md:text-[10px]">
                I constantly try to improve
              </p>
              <p className="text-[32px] font-bold max-md:text-[20px]">
                My tech stack
              </p>
            </div>
            <div className=" absolute top-[-8%] right-[155px]">
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl mb-2 text-center">
                ReactJS
              </p>
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl mb-2 text-center">
                NuxtJS
              </p>
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl mb-2 text-center">
                Tailwind
              </p>
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl">
                jmghkj
              </p>
            </div>
            <div className=" absolute top-[-22%] right-[20px]">
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl mb-2">
                jmghkj
              </p>
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl mb-2 text-center">
                HTML
              </p>
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl mb-2 text-center">
                Css
              </p>
              <p className="bg-[#10132E] text-[14px] py-[20px] px-[30px] rounded-xl mb-2 text-center">
                Typescript
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] mx-[200px] max-2xl:mx-[50px] max-md:mx-[20px] lg:grid grid-rows-4 grid-cols-11 gap-[20px]">
        <div className="bg-linear-to-r from-[#3637496E]/43 to-[#3637497D]/49  p-[1px] rounded-2xl row-span-2 col-span-3 ">
          <div className=" p-[20px] bg-gradient-to-r relative from-[#04071D] to-[#0C0E23] rounded-2xl w-full h-full overflow-hidden max-lg:h-[200px]">
            <Image
              src={c1}
              alt="Picture of the author"
              className=" absolute top-0 left-0 w-full  h-full"
            />
            <p className="text-[24px] font-bold max-md:text-[20px]">
              Tech enthusiast with a passion for development.
            </p>
            <div className="w-[220px] max-xl:w-[180px] max-lg:w-[250px] max-md:w-[200px] h-[80%] bg-[#FFFFFF1A]/40 rounded-2xl border-[1px] border-[#FFFFFF1A] absolute p-[10px] right-[30px]">
              <div className="flex gap-[5px] items-center">
                <div className="w-[30px] h-[30px] bg-[#FFFFFF1A] rounded-full"></div>
                <div className="w-[50px] h-[10px] bg-[#FFFFFF1A] rounded-xl"></div>
                <div className="w-[30px] h-[10px] bg-[#FFFFFF1A] rounded-xl"></div>
              </div>
              <div className="w-[150px] h-[10px] bg-[#FFFFFF1A] rounded-xl my-[10px]"></div>
              <div className="w-[120px] h-[10px] bg-[#FFFFFF1A] rounded-xl "></div>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-[#3637496E]/43 to-[#3637497D]/49 max-lg:my-[20px]  p-[1px] rounded-2xl row-start-3 row-span-2 col-span-3">
          <div className=" p-[20px] max-lg:h-[200px] bg-gradient-to-r relative from-[#04071D] to-[#0C0E23] rounded-2xl w-full h-full flex-col overflow-hidden flex justify-center items-center">
            <Image
              src={c2}
              alt="Picture of the author"
              className=" absolute top-0 left-0 w-full  h-full"
            />
            <p className="text-[24px] font-bold relative z-20 text-center max-md:text-[20px]">
              Do you want to start a project together?
            </p>
            <div className="bg-linear-to-r from-[#6971A266]/40 to-[#272A3C80]/50 rounded-md relative z-20 p-[1px]">
              <div
                onClick={copyEmail}
                className="bg-gradient-to-r hover:scale-[105%] transition-all hover:drop-shadow-sm hover:shadow-amber-50 from-[#161A31] to-[#06091F] rounded-md cursor-pointer flex gap-[10px] p-[6px] items-center"
              >
                <Image src={c22} alt="Picture of the author" />
                <p className="text-[14px]">Copy my email address</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-[#3637496E]/43 lg:h-[390px] to-[#3637497D]/49  p-[1px] rounded-2xl row-span-4 col-span-8">
          <div className=" p-[20px] max-lg:h-[250px] bg-gradient-to-r relative from-[#04071D] to-[#0C0E23] rounded-2xl w-full h-full flex justify-center flex-col">
            <Image
              src={c3}
              alt="Picture of the author"
              className=" absolute top-0 right-0 w-[50%]  h-full"
            />
            <Image
              src={c1}
              alt="Picture of the author"
              className=" absolute top-0 left-0 w-full  h-full"
            />
            <p className="text-[#E4ECFF] relative z-20 tracking-[15%] font-[400] leading-1 uppercase text-[16px] py-[20px]">
              The Inside Scoop
            </p>
            <p className="text-[32px] font-bold relative z-20 max-w-[311px] max-md:text-[20px]">
              Currently building a JS Animation library
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

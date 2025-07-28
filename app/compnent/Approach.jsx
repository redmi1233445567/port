import React from "react";
import img from "../../public/section input.png";
import Image from "next/image";

export default function Approach() {
  return (
    <div className="mt-[70px] mx-[200px] max-2xl:mx-[50px] max-md:mx-[20px] ">
      <p className="text-[48px] font-bold mb-[30px] text-center">
        My <span className="text-[#CBACF9]">approach</span>
      </p>
      <div className="flex gap-[20px] justify-between max-lg:flex-wrap max-lg:justify-center">
        <div className="bg-linear-to-r w-[387px] xl:w-[33%] max-md:w-full from-[#3637496E] to-[#3637497D] p-[1px] rounded-2xl">
          <div className=" relative h-[620px] max-md:h-[500px] bg-gradient-to-br flex justify-center items-center  from-[#04071D] to-[#0C0E23] rounded-2xl">
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute top-[-4%] left-[-4%] z-20 "
            />
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute top-[-4%] right-[-4%] z-20 "
            />
            <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80] p-[1px] rounded-xl w-fit">
              <div className="bg-gradient-to-br font-[600] from-[#161A31] to-[#06091F] rounded-xl p-[10px] text-[#CBACF9] text-[30px] text-center w-fit">
                Phase 1
              </div>
            </div>
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute bottom-[-4%] left-[-4%] z-20 "
            />
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute bottom-[-4%] right-[-4%] z-20 "
            />
          </div>
        </div>
        <div className="bg-linear-to-r w-[387px] xl:w-[33%] max-md:w-full from-[#3637496E] to-[#3637497D] p-[1px] rounded-2xl">
          <div className=" p-[30px] relative flex-col h-[620px] max-md:h-[500px] bg-gradient-to-br flex justify-center items-center  from-[#04071D] to-[#0C0E23] rounded-2xl">
            <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80] p-[1px] rounded-xl w-fit">
              <div className="bg-gradient-to-br from-[#161A31] to-[#06091F] rounded-xl p-[10px] text-[#CBACF9] font-[600] text-[16px] text-center w-fit">
                Phase 2
              </div>
            </div>
            <p className="text-[32px] font-bold text-center py-[10px]">
              Development & Progress Update
            </p>
            <p className="text-[#E4ECFF] text-[16px] font-[400] text-center">
              Once we agree on the plan, I cue my lofi playlist and dive into
              coding. From initial sketches to polished code, I keep you updated
              every step of the way.
            </p>
          </div>
        </div>
        <div className="bg-linear-to-r w-[387px] xl:w-[33%] max-md:w-full from-[#3637496E] to-[#3637497D] p-[1px] rounded-2xl">
          <div className=" relative h-[620px] max-md:h-[500px] bg-gradient-to-br flex justify-center items-center  from-[#04071D] to-[#0C0E23] rounded-2xl">
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute top-[-4%] left-[-4%] z-20 "
            />
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute top-[-4%] right-[-4%] z-20 "
            />
            <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80] p-[1px] rounded-xl w-fit">
              <div className="bg-gradient-to-br font-[600] from-[#161A31] to-[#06091F] rounded-xl p-[10px] text-[#CBACF9] text-[30px] text-center w-fit">
                Phase 3
              </div>
            </div>
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute bottom-[-4%] left-[-4%] z-20 "
            />
            <Image
              src={img}
              alt="Picture of the author"
              className=" absolute bottom-[-4%] right-[-4%] z-20 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

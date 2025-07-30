"use client";
import React, { useReducer, useState } from "react";
import img from "../../public/section input.png";
import Image from "next/image";

export default function Approach() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [data, setData] = useState([
    {
      id: 1,
      title: "Discuss & Define",
      des: "Determine the specifications and important points that must be available, the appropriate design, and provide a preliminary design.",
      phase: "Phase 1",
      show: false,
    },
    {
      id: 2,
      title: "Development & Progress Update",
      des: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
      phase: "Phase 2",
      show: true,
    },
    {
      id: 3,
      title: "Delivery & Modification",
      des: "Deliver the work and know the things the client wants to modify, if available, and test the site more than once.",
      phase: "Phase 3",
      show: false,
    },
  ]);

  const show = (id) => {
    let array = data;
    array[id - 1].show = !data[id - 1].show;
    setData(array);
    forceUpdate();
    console.log(data);
  };

  return (
    <div className="mt-[70px] mx-[200px] max-2xl:mx-[50px] max-md:mx-[20px] ">
      <p className="text-[48px] font-bold mb-[30px] text-center">
        My <span className="text-[#CBACF9]">approach</span>
      </p>
      <div className="flex gap-[20px] justify-between max-lg:flex-wrap max-lg:justify-center">
        {data.map((phase) => {
          return (
            <div
              key={phase.id}
              className="bg-linear-to-r w-[387px] xl:w-[33%] max-md:w-full from-[#3637496E] to-[#3637497D] p-[1px] rounded-2xl"
              onClick={() => show(phase.id)}
            >
              <div className=" relative h-[620px] max-md:h-[500px] bg-gradient-to-br flex justify-center items-center flex-col from-[#04071D] to-[#0C0E23] rounded-2xl">
                <Image
                  src={img}
                  alt="Picture of the author"
                  className={`absolute top-[-4%] left-[-4%] z-20 ${
                    phase.show ? "hidden" : "block"
                  }`}
                />
                <Image
                  src={img}
                  alt="Picture of the author"
                  className={`absolute top-[-4%] right-[-4%] z-20 ${
                    phase.show ? "hidden" : "block"
                  }`}
                />
                <div className="bg-linear-to-r from-[#6971A266] to-[#272A3C80] p-[1px] rounded-xl w-fit">
                  <div
                    className={`bg-gradient-to-br font-[600] from-[#161A31] to-[#06091F] rounded-xl p-[10px] text-[#CBACF9] text-center w-fit ${
                      phase.show ? "text-[16px]" : "text-[30px]"
                    }`}
                  >
                    {phase.phase}
                  </div>
                </div>
                {phase.show ? (
                  <div className="flex flex-col justify-center items-center gap-[20px] px-[20px] transition-[6s]">
                    <p className="text-[32px] font-bold text-center py-[10px]">
                      {phase.title}
                    </p>
                    <p className="text-[#E4ECFF] text-[16px] font-[400] text-center">
                      {phase.des}
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
                <Image
                  src={img}
                  alt="Picture of the author"
                  className={`absolute bottom-[-4%] left-[-4%] z-20 ${
                    phase.show ? "hidden" : "block"
                  }`}
                />
                <Image
                  src={img}
                  alt="Picture of the author"
                  className={`absolute bottom-[-4%] right-[-4%] z-20 ${
                    phase.show ? "hidden" : "block"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

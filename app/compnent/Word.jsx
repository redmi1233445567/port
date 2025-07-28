"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from "../../public/Switch.png";
import im from "../../public/Image (4).png";
import Image from "next/image";
import lo1 from "../../public/Layer 2.png";
import lo2 from "../../public/Group 6.png";
import lo3 from "../../public/Group.png";
import lo4 from "../../public/Group (1).png";
import lo5 from "../../public/Group 7.png";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Director of AlphaStream Technologies",
    text: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    image: logo,
  },
  {
    name: "Sarah Smith",
    role: "CEO of WebCore Inc.",
    text: "Adrian’s enthusiasm for every facet of development truly stands out. He's the ideal partner.",
    image: logo,
  },
  {
    name: "David Brown",
    role: "CTO of CloudNova",
    text: "He elevated our brand like no one else. Would definitely recommend him for your next big project.",
    image: logo,
  },
];

export default function Testimonials() {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({ x: "-100%" }, { duration: 50, ease: "linear" });
        await controls.set({ x: "0%" });
      }
    };
    animate();
  }, [controls]);

  return (
    <section className=" text-white overflow-hidden mt-[150px]" id="word">
      <div className="text-center mb-14">
        <h2 className="text-[48px] font-bold max-md:text-[36px]">
          Kind words from{" "}
          <span className="text-[#CBACF9]">satisfied clients</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div animate={controls} className="flex w-max gap-8 px-4">
          {[...Array(3)]
            .flatMap(() => testimonials)
            .map((t, i) => (
              <div
                key={i}
                className="bg-linear-to-r from-[#3637496E] to-[#3637497D] p-[1px] rounded-xl w-[910px] max-md:w-[350px]"
              >
                <div className=" flex flex-col justify-between bg-gradient-to-br from-[#04071D] to-[#0C0E23] p-[45px] rounded-xl relative h-full hover:scale-105  transition-[2s]">
                  <Image
                    src={im}
                    alt="Picture of the author"
                    className=" absolute top-0 left-0 h-full w-full"
                  />
                  <p className="mb-4 text-[20px] max-md:text-[16px]">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image src={logo} alt="Picture of the author" />
                    <div>
                      <p className="font-semibold text-[18px]">{t.name}</p>
                      <p className="text-[14px] text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
      <div className="my-[70px] flex justify-between flex-wrap mx-[200px] max-2xl:mx-[50px] max-md:mx-[20px] items-center max-lg:justify-center max-lg:gap-[20px]">
        <Image
          src={lo1}
          alt="Picture of the author"
          className="max-md:w-[137px] h-[27px]"
        />
        <Image
          src={lo2}
          alt="Picture of the author"
          className="max-md:w-[137px] h-[27px]"
        />
        <Image
          src={lo3}
          alt="Picture of the author"
          className="max-md:w-[137px] h-[27px]"
        />
        <Image
          src={lo4}
          alt="Picture of the author"
          className="max-md:w-[137px] h-[27px]"
        />
        <Image
          src={lo5}
          alt="Picture of the author"
          className="max-md:w-[137px] h-[27px]"
        />
      </div>
    </section>
  );
}

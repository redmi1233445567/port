import React from "react";
import pro1 from "../../public/download (1).png";
import pro2 from "../../public/download (2).png";
import pro3 from "../../public/download (3).png";
import pro4 from "../../public/download (4).png";
import pro5 from "../../public/download.png";
import react from "../../public/tech.png";
import next from "../../public/tech (2).png";
import tail from "../../public/tech (1).png";
import a from "../../public/Image (3).png";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const data = [
    {
      id: 1,
      img: pro1,
      title: "Book appointments at a real estate company",
      dis: "Book appointments with various types of real estate companies and view the appointments booked and their status.",
      item: [react, next, tail],
      link: "https://perfect-scape.vercel.app/",
    },
    {
      id: 2,
      img: pro2,
      title: "Hospital management website",
      dis: "A hospital management website to find out about working doctors, read medical articles, and book examination appointments.",
      item: [react, next, tail],
      link: "https://meddical-two.vercel.app/",
    },
    {
      id: 3,
      img: pro3,
      title: "electronic store",
      dis: "Storing electronics, purchasing various electronics with maintained invoices, managing technicians and customers, and recording debts.",
      item: [react, next, tail],
      link: "https://electronics-wheat.vercel.app/",
    },
    {
      id: 4,
      img: pro4,
      title: "Furniture exhibition",
      dis: "Exhibition for displaying all kinds of furniture",
      item: [tail],
      link: "https://e-commers-jade.vercel.app/",
    },
    {
      id: 5,
      img: pro5,
      title: "To Do List",
      dis: "To-do and completed tasks with task filtering and a page to display removed tasks",
      item: [react, next],
      link: "https://to-do-next-seven.vercel.app/",
    },
  ];

  return (
    <div className="mx-[200px] max-2xl:mx-[50px] max-md:mx-[20px]">
      <p className="text-[48px] font-bold leading-[100%] text-center mt-[150px] mb-[60px]">
        A small selection of{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </p>
      <div className="flex flex-wrap gap-[20px] justify-between max-lg:justify-center">
        {data.map((box) => {
          return (
            <div
              key={box.id}
              className="bg-linear-to-r from-[#3637496E]/43 to-[#3637497D]/49 p-[1px] rounded-2xl w-[48%] max-lg:w-[100%]"
            >
              <div className=" p-[20px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-2xl w-full h-full overflow-hidden">
                <div className=" relative bg-[#13162D] flex justify-center overflow-hidden">
                  <Image
                    src={a}
                    alt="Picture of the author"
                    className=" absolute top-0 left-0 "
                  />
                  <Image
                    src={box.img}
                    alt="Picture of the author"
                    className="w-[449px] h-[364px] max-md:w-[279px] max-md:h-[198px] rounded-xl rotate-6 translate-y-[10%] hover:rotate-0 hover:translate-0 transition-all"
                  />
                </div>
                <p className="text-[32px] max-md:text-[20px] font-bold mt-[30px]">
                  {box.title}
                </p>
                <p className="text-[#BEC1DD] max-md:text-[14px] text-[20px] my-[20px]">
                  {box.dis}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    {box.item.map((it, ind) => {
                      return (
                        <Image
                          key={ind}
                          src={it}
                          alt="Picture of the author"
                          className="ml-[-6px] hover:scale-3d transition-all max-md:w-[34px] max-md:h-[34px]"
                        />
                      );
                    })}
                  </div>
                  <Link href={box.link}>
                    <p className="text-[20px] max-md:text-[14px] text-[#CBACF9] cursor-pointer hover:translate-x-[10px] transition-all font-[500]">
                      Check Live Site
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
